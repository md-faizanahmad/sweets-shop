// features/product/schema/product.schema.ts

import { z } from "zod";

// reusable
const trimmedString = z.string().trim().min(1);

// price
export const priceSchema = z
  .object({
    amount: z.number().positive(),
    unit: z.enum(["kg", "g", "piece"]),
    currency: z.literal("INR"),
  })
  .strict();

// image
const imageSchema = z
  .object({
    src: z
      .string()
      .trim()
      .min(1)
      .regex(/^\/[a-zA-Z0-9\-\/_.]+$/, "Invalid image path"),
    alt: trimmedString,
  })
  .strict();

// product
export const productSchema = z
  .object({
    id: z.string().trim().min(1),

    name: trimmedString,

    slug: z
      .string()
      .trim()
      .min(1)
      .regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/, "Invalid slug format"),

    price: priceSchema,

    image: imageSchema,

    isAvailable: z.boolean(),

    category: z.string().trim().optional(),

    tags: z.array(z.string().trim()).optional(),
  })
  .strict()
  .superRefine((data, ctx) => {
    // enforce id === slug (optional but recommended)
    if (data.id !== data.slug) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "id and slug must match",
        path: ["id"],
      });
    }
  });

// array
export const productsSchema = z.array(productSchema);
