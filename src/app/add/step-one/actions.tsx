"use server";

import { stepOneSchema } from "@/app/schemas";
import { AddDealRoutes, FormErrors } from "@/app/types";
import { redirect } from "next/navigation";

export const stepOneFormAction = (
  prevState: FormErrors | undefined,
  formData: FormData
): FormErrors | undefined => {
  const data = Object.fromEntries(formData.entries());
  const validated = stepOneSchema.safeParse(data);

  if (!validated.success) {
    const errors = validated.error.issues.reduce((acc: FormErrors, issue) => {
      acc[issue.path[0]] = issue.message;
      return acc;
    }, {});
    return errors;
  } else {
    redirect(AddDealRoutes.COUPON_DETAILS);
  }
};
