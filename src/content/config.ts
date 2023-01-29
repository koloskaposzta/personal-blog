// 1. Import utilities from `astro:content`
import { z, defineCollection } from 'astro:content';
// 2. Define a schema for each collection you'd like to validate.
const blog= defineCollection({
    
  schema: z.object({
    title: z.string(),
    date: z.date(),
    author: z.enum(['Kolos Kaposzta' , 'Káposzta Kolos']),
    image: z.object({
        src: z.string(),
        alt: z.string()
    }),
    description: z.string(),
    draft: z.boolean(),
    category: z.enum(['Astro', 'Vue','General'])
  }),
});
// 3. Export a single `collections` object to register your collection(s)
export const collections = {
  'blog': blog,
};