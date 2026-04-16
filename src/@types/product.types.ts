// features/product/types/product.types.ts

import { z } from "zod";
import { productSchema } from "../schema/product.schema";

export type Product = z.infer<typeof productSchema>;
