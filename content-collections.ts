import { defineCollection, defineConfig } from "@content-collections/core";
import { z } from "zod";

const posts = defineCollection({
  name: "posts",
  directory: "src/posts",
  include: "**/*.md",
  schema: z.object({
    title: z.string(),
    summary: z.string(),
  }),
  transform: (doc) => ({
    ...doc,
    slug: doc._meta.fileName.substring(0, doc._meta.fileName.length - 3).toLowerCase().replace(/ /g, '-'),
  }),
});



export default defineConfig({
  collections: [posts],
});
