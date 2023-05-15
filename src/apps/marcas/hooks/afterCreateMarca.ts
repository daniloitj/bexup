import payload, { Payload } from "payload";
import { CollectionAfterChangeHook } from "payload/types";
import { httpClient } from "../../../services/httpApi";
import registerAno from "../registers/ano";
import registerModelo from "../registers/modelo";
import registerVeiculo from "../registers/veiculo";

const afterCreateMarca: CollectionAfterChangeHook = async ({ req, doc, operation }): Promise<void> => {
    const marcaCodigo = doc.codigo;
    const marcaId = doc.id
    try {
      const response  = await httpClient({
        method: "GET",
        url: `${process.env.FIPE_URI}/carros/marcas/${marcaCodigo}/modelos`,
        headers: null,
      });
      const modelos = response.data.modelos.map((modelo: any) => ({
        codigo: modelo.codigo,
        nome: modelo.nome,
        marca: marcaId,
      }));

      const anos = response.data.anos.map((anos: any) => ({
        codigo: anos.codigo,
        nome: anos.nome,
        marca: marcaId,        
      }));
      for(const modelo of modelos){
        registerModelo(modelo)
      }
      for(const ano of anos){
        registerAno(ano)
      }   
      // for(const modelo of modelos){
      //   for(const ano of anos){
      //     registerVeiculo(marcaCodigo, modelo.codigo, ano.codigo)   
      //   }
      // }
    } catch (error) {
      console.error(error);
    }  
};

export default afterCreateMarca;
