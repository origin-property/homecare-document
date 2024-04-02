import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default {
  introspection: {
    // type: 'url',
    // url: 'https://qaapi.myorigin.net/graphql',
<<<<<<< HEAD
    // headers: {
    //   Authorization: 'Bearer tmS3Cp69kpwEAB0kSIpx3GtCF496doFN',
    // },
    type: 'sdl',
    // paths: ['./schemas/**/*.graphql'],
    paths: [path.join(__dirname, '/schemas/**/*.graphql')],
  },
  website: {
    template: 'carbon-multi-page',
    // staticAssets: relativePath('./assets'),
    staticAssets: path.join(__dirname, '/assets'),
=======
    type: "sdl",
    // paths: ['./schemas/**/*.graphql'],
    paths: [relativePath("./schemas/**/*.graphql")],
  },
  website: {
    template: "carbon-multi-page",
    staticAssets: relativePath("./assets"),
>>>>>>> a54dfa086917b1f16a787e08760d93788d8eb542
    options: {
      // You need to specify the base path of your github pages root
      // Example: `/magidoc`
      siteRoot: '/demo-magidoc',
    },
  },
};
