import { z } from "zod";

export type Employee = z.infer<typeof EmployeeSchema>;
export const EmployeeSchema = z.object({
  id: z.number(),
  name: z.string(),
  role: z.string(),
  email: z.string().email(),
  createdAt: z.date(),
  updatedAt: z.date(),
});
