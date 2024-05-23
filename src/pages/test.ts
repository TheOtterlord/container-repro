import { experimental_AstroContainer as AstroContainer } from 'astro/container';
import ContentWrapper from './index.astro';

const container = await AstroContainer.create({
  renderers: [
    {
      name: '@astrojs/mdx',
      serverEntrypoint: 'astro/jsx/server.js',
    },
  ],
});

export async function GET(context) {
  const content = await container.renderToString(ContentWrapper);
  return new Response(content);
}
