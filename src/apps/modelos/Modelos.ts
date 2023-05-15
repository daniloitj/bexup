import { CollectionConfig } from 'payload/types';

const Modelos: CollectionConfig = {
  slug: 'modelos',
  admin: {
    useAsTitle: 'nome',
    group: "Config",
  },
  fields: [
    {
      name: 'nome',
      type: 'text',
    },
    {
      name: 'codigo',
      type: 'number',
    },   
    {
      name: 'marca',
      type: 'relationship',
      relationTo: "marcas",
      hasMany: false,
    },      
  ],
}

export default Modelos;