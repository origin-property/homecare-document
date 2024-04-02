import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default {
  introspection: {
    // type: 'url',
    // url: 'https://qaapi.myorigin.net/graphql',
    // headers: {
    //   Authorization: 'Bearer tmS3Cp69kpwEAB0kSIpx3GtCF496doFN',
    // },
    type: 'sdl',
    paths: [path.join(__dirname, '/schemas/**/*.graphql')],
  },
  website: {
    template: 'carbon-multi-page',
    staticAssets: path.join(__dirname, '/assets'),
    options: {
      siteRoot: '/demo-magidoc',
    },
  },
  dev: {
    /**
     * Globs, file paths or directories to watch for and hot-reload on change.
     * By default, Magidoc will reload the website on change of any static assets or the magidoc.mjs file.
     *
     * @see https://github.com/magidoc-org/magidoc/blob/main/docs/magidoc.mjs for an example.
     */
    watch: [
      path.join(__dirname, '/docs'),
      path.join(__dirname, '/schemas/**/*.graphql'),
    ],
  },
};
