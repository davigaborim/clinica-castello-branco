import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const equipe = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/equipe" }),
  schema: z.object({
    nome: z.string(),
    cargo: z.string(),
    especialidade: z.string(),
    registro: z.string(),
    tier: z.enum(["fundadora", "corpo-clinico"]),
    area: z.enum(["odontologia", "parto"]),
    ordem: z.number().default(99),
    foto: z.string(),
    resumo: z.string(),
    procedimentos: z.array(z.string()),
  }),
});

const blog = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/blog" }),
  schema: z.object({
    titulo: z.string(),
    resumo: z.string(),
    data: z.coerce.date(),
    capa: z.string(),
    autor: z.string().default("Clínica Castello Branco"),
    area: z.enum(["odontologia", "parto"]).default("odontologia"),
  }),
});

export const collections = { equipe, blog };
