import { z } from "zod";

// Dates come from <input type="date"> as YYYY-MM-DD
const dateString = z.string().regex(/^\d{4}-\d{2}-\d{2}$/);

export const bookingRequestSchema = z
  .object({
    name: z.string().min(2).max(120),
    email: z.string().email(),
    phone: z.string().min(7).max(40).optional(),
    startDate: dateString,
    endDate: dateString,
    pickupCity: z.string().min(2).max(120).optional(),
    groupSize: z.number().int().min(1).max(60).optional(),
    useCase: z.string().max(120).optional(),
    notes: z.string().max(2000).optional(),
  })
  .refine((v) => v.endDate >= v.startDate, {
    message: "End date must be on/after start date",
    path: ["endDate"],
  });
