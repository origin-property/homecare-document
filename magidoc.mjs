import path from 'path';
import { fileURLToPath } from 'url';

function relativePath(target) {
  return path.join(path.dirname(fileURLToPath(import.meta.url)), target);
}

export default {
  introspection: {
    // type: 'url',
    // url: 'https://qaapi.myorigin.net/graphql',
    type: 'sdl',
    // paths: ['./schemas/**/*.graphql'],
    paths: [relativePath('./schemas/**/*.graphql')],
  },
  website: {
    template: 'carbon-multi-page',
    staticAssets: relativePath('./assets'),
    options: {
      // You need to specify the base path of your github pages root
      // Example: `/magidoc`
      siteRoot: '/demo-magidoc',
    },
  },
};
