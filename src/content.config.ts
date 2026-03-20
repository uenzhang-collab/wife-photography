import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const photos = defineCollection({
  loader: glob({ pattern: '**/*.md', base: 'src/content/photos' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    image: z.string(),
  }),
});

export const collections = { photos };
