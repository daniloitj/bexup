import { buildConfig } from 'payload/config';
import path from 'path';
import Users from './collections/Users';
import Marcas from './apps/marcas/Marcas';
import Anos from './apps/anos/Anos';
import Veiculos from './apps/veiculos/Veiculos';
import Modelos from './apps/modelos/Modelos';
import { Logo } from "./graphics/Logo";
import { Icon } from "./graphics/Icon";

export default buildConfig({
  serverURL: process.env.SERVER_URL,
  admin: {
    user: Users.slug,
    meta: {
      titleSuffix: process.env.COMPANY_NAME,
      favicon: "/assets/favicon.ico",
      ogImage: "/assets/logo.svg",
    },
    components: {
      graphics: {
        Logo,
        Icon,
      },
    },     
  },
  collections: [
    Users,
    Marcas,
    Anos,
    Modelos,
    Veiculos
  ],

  typescript: {
    outputFile: path.resolve(__dirname, 'payload-types.ts'),
  },
  graphQL: {
    schemaOutputFile: path.resolve(__dirname, 'generated-schema.graphql'),
  },
});
