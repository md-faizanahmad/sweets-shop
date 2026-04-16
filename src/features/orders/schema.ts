// features/order/schema.ts

import { z } from "zod";

export const orderSchema = z.object({
  name: z.string().min(2, "Name too short"),
  phone: z.string().regex(/^\d{10}$/, "Phone must be 10 digits"),
  quantity: z.string().min(1, "Quantity required"),
  address: z.string().min(5, "Address too short"),
});

export type OrderSchemaType = z.infer<typeof orderSchema>;
