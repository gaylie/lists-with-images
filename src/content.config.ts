import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { glob, file } from 'astro/loaders';

const lists = defineCollection({
  loader: glob({ pattern: "**/*.json", base: "./src/lists/" }),
  schema: z.object({
        data: z.looseObject({
            title: z.string(),
            cardcolor: z.string()
        }),
        list: z.array(
            z.looseObject({
                    header: z.string(),
                    src: z.string(),
                    members: z.array(
                        z.object({
                                img: z.string(),
                                src: z.string(),
                                name: z.string()
                            })
                        )
            })
        )
    })
});


export const collections = { lists };