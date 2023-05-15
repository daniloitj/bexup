import { CollectionConfig } from 'payload/types';

const Anos: CollectionConfig = {
  slug: 'anos',
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
      type: 'text',
    },    
    {
      name: 'marca',
      type: 'relationship',
      relationTo: "marcas",
      hasMany: false,
    },      
  ],
}

export default Anos;