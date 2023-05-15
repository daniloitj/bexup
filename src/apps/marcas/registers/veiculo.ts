import payload, { Payload } from "payload";
import { httpClient } from "../../../services/httpApi";

const registerVeiculo = async (
    marca: any,
    modelo: any,
    ano: any,) => {
      // try {
        const response  = await httpClient({
          method: "GET",
          url: `${process.env.FIPE_URI}/carros/marcas/${marca}/modelos/${modelo}/anos/${ano}`,
          headers: null,
        });
        const veiculos = response.data.veiculos.map((veiculo: any) => ({
          modelo: veiculo.Modelo,
          marca: veiculo.Marca,
          ano: veiculo.AnoModelo,
        }));
      //     for(const veiculo of veiculos){
      //       const existingModelo = await payload.find({
      //         collection: "veiculos",
      //         where: {
      //           nome: veiculo.nome,
      //           marca: veiculo.marca,
      //           ano: veiculo.marca,
      //         },
      //       });
      //       if (!existingModelo || existingModelo.totalDocs === 0) {
      //         await payload.create({
      //           collection: "veiculos",
      //           data: {
      //             modelo: veiculo.modelo,
      //             marca: veiculo.marca,
      //             ano: veiculo.ano,
      //           },
      //         });
      //       // }    
      //     // }  
      //   }
      // } catch (error) {
      //   console.error(error);
      //   return
      // }
};

export default registerVeiculo