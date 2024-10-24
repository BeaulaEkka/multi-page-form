"use server";

import { stepOneSchema } from "@/app/schemas";
import { FormErrors } from "@/app/types";

export const stepOneFormActions = (
  prevState: FormErrors | undefined,
  formData: FormData
) => {
  const data = Object.fromEntries(formData.entries());
  const validated = stepOneSchema.safeParse(data);

  if (!validated.success) {
    console.log(validated.error.errors);
    return validated.error.errors;
  }
};
