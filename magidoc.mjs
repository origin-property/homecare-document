import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function markdown(string) {
  const target = string[0];
  const trimSize = /^\s+/.exec(string)[0].length;
  return target
    .split('\n')
    .map((line) => line.substr(trimSize - 1))
    .join('\n');
}

export default {
  introspection: {
    type: 'sdl',
    paths: [path.join(__dirname, '/schemas/**/*.graphql')],
  },
  website: {
    template: 'carbon-multi-page',
    staticAssets: path.join(__dirname, '/assets'),
    options: {
      siteRoot: '/homecare-document',
      appFavicon:
        'https://origin-public-asset.s3.ap-southeast-1.amazonaws.com/origin-assets/favicon.ico',
      appLogo:
        'https://origin-public-asset.s3.ap-southeast-1.amazonaws.com/origin-assets/logo.png',

      pages: [
        {
          title: 'Introduction',
          content: [
            {
              title: 'Welcome',
              content: markdown`
# 👋 API Homecare
              `,
            },
            {
              title: 'Authentication',
              content: markdown`
# 🔒 Authentication

| Key        | Value | Desctription |
| ---------- | ----- | ------------ |
| secret-key | #     | apiKey       |
              `,
            },
          ],
        },
      ],
    },
  },
  dev: {
    watch: [
      path.join(__dirname, '/docs'),
      path.join(__dirname, '/schemas/**/*.graphql'),
    ],
  },
};
