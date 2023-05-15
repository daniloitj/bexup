import payload from "payload";

const marcaEndpoint = async (req, res) => {
  try {
    
    const marca = await payload.findByID({
      collection: "marcas",
      id: req.params.id,
    });
    
    const modelos = await payload.find({
      collection: "modelos",
      where:{
        marca:{
          equals: req.params.id,
        }
      }
    });  
    
    const anos = await payload.find({
      collection: "anos",
      where:{
        marca:{
          equals: req.params.id,
        }
      }
    }); 

    const formatModelos = modelos.docs.map((result) => {
      const { id, createdAt, updatedAt, marca, ...rest } = result;
      return rest;
    });

    const formatAnos = anos.docs.map((result) => {
      const { id, createdAt, updatedAt, marca, ...rest } = result;
      return rest;
    });   

    const data_result = {
      marca: marca.nome,
      modelos: formatModelos,
      anos: formatAnos
    }        
    res.status(200).json(data_result);
  } catch (e) {
    console.log(e);
    return Promise.reject(e);
  }
};

export default marcaEndpoint;
