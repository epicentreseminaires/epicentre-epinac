import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const lieux = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/lieux' }),
  schema: z.object({
    title: z.string().max(70),
    description: z.string().max(160),
    ville: z.string(),
    zone: z.literal('epinac'),
    publishedAt: z.coerce.date(),
    cover: z.string().optional(),
    geo: z.object({ lat: z.number(), lng: z.number() }).optional(),
    faq: z.array(z.object({ q: z.string(), a: z.string() })).default([]),
    nearbyVilles: z.array(z.string()).default([]),
    nearbyArticles: z.array(z.string()).default([]),
  }),
});

export const collections = { lieux };
