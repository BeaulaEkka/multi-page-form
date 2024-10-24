import { z } from "zod";

export const stepOneSchema = z.object({
  name: z.string().min(2, "Name must be atleast two characters long"),
  link: z.string().url("Link must be a valid url"),
});

export const stepTwoSchema = z.object({
  coupon: z.string().min(5, "Coupon must be atleat 5 characters long"),
  discount: z.coerce
    .number()
    .min(1, "Discount must be greater than 0")
    .max(100, "Discount must be less than 100"),
});

export const stepThreeSchema = z.object({
  contactName: z
    .string()
    .min(3, "Contact name must be atleast more than three characters"),
  contactEmail: z.string().email("Please enter a valid email address"),
});

export const newDealSchema = z.object({
  ...stepOneSchema.shape,
  ...stepTwoSchema.shape,
  ...stepThreeSchema.shape,
});

export type newDeal = z.infer<typeof newDealSchema>;
