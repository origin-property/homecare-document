export default {
  introspection: {
    // type: 'url',
    // url: 'https://qaapi.myorigin.net/graphql',
    type: 'sdl',
    paths: ['./schemas/**/*.graphql'],
  },
  website: {
    template: 'carbon-multi-page',
    staticAssets: path.join(__dirname, 'assets'),
    options: {
      // You need to specify the base path of your github pages root
      // Example: `/magidoc`
      siteRoot: '/demo-magidoc',
    },
  },
};
