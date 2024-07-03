import { defineCollection, z } from "astro:content";

const healthCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    image: z.string(),
    url: z.string(),
  }),
});

const healthProvidersCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    image: z.string(),
  }),
});

export const collections = {
  "health-insurance": healthCollection,
  "health-providers": healthProvidersCollection,
};
