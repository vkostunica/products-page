import { z } from 'zod';

export const zodErrorToString = (error: z.ZodError): string => {
  return error.errors
    .map((err: z.ZodIssue) => `${err.path.join('.')}: ${err.message}`)
    .join(', ');
};
