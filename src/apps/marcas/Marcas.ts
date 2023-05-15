
import { CollectionConfig } from 'payload/types';
import loadEndpoint from './endpoints/load.endpoint';
import subscribeEndpoint from './endpoints/subscribe.endpoint';
import afterCreateMarca from './hooks/afterCreateMarca';
import marcaEndpoint from './endpoints/marca.endpoint';

const Marcas: CollectionConfig = {
  slug: 'marcas',
  admin: {
    useAsTitle: 'nome',
    group: "Aplicação",
  },
  hooks: {
    afterChange: [afterCreateMarca],
  },  
  fields: [
    {
      name: 'nome',
      type: 'text',
    },
    {
      name: 'codigo',
      type: 'text',
    },            
  ],
  endpoints: [
    {
      path: '/load',
      method: 'get',
      handler: loadEndpoint,
    },
    {
      path: '/subscribe',
      method: 'get',
      handler: subscribeEndpoint,
    },    
    {
      path: '/:id/marca',
      method: 'get',
      handler: marcaEndpoint,
    },      
  ],  
}

export default Marcas;