import { CollectionConfig } from 'payload/types';

const Veiculos: CollectionConfig = {
  slug: 'veiculos',
  admin: {
    useAsTitle: 'modelo',
    group: "Aplicação",
  },
  fields: [
    {
      name: 'tipoVeiculo',
      label: 'TipoVeiculo',
      type: 'number',
    },
    {
      name: 'valor',
      type: 'number',
    },         
    {
      name: 'marca',
      label: 'Marca', 
      type: 'text',
    },  
    {
      name: 'modelo',
      label: 'Modelo', 
      type: 'text',
    },      
    {
      name: 'ano',
      label: 'AnoModelo',
      type: 'number',
    },    
    {
      name: 'combustivel',
      label: 'Combustivel', 
      type: 'text',
    },       
    {
      name: 'codigoFipe',
      label: 'CodigoFipe', 
      type: 'text',
    },     
    {
      name: 'MesReferencia',
      label: 'MesReferencia', 
      type: 'text',
    },     
    {
      name: 'SiglaCombustivel',
      label: 'SiglaCombustivel', 
      type: 'text',
    },      
    {
      name: 'observacoes',
      label: 'observações', 
      type: 'text',
    },      
  ],
}

export default Veiculos;