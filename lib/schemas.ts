import { z } from 'zod';

export const userRegisterSchema = z.object({
  name: z
    .string()
    .trim()
    .min(1, 'Name is required')
    .regex(/^[A-Za-z\s]+$/, 'Name must contain only letters and spaces'),
});
