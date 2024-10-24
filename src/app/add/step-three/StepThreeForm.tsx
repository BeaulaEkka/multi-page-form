"use client";
import Input from "@/app/components/Input";
import SubmitButton from "@/app/components/SubmitButton";
import { FormErrors } from "@/app/types";
import React from "react";
import { useFormState } from "react-dom";
import { stepThreeFormAction } from "./actions";

const initialState: FormErrors = {};
export default function StepThreeForm() {
  const [serverErrors, formAction] = useFormState(
    stepThreeFormAction,
    initialState
  );
  return (
    <form action={formAction} className="flex flex-1 flex-col items-center ">
      <div className="flex w-full flex-col gap-8 lg:max-w-[700px]">
        <Input
          label="Contact Name"
          id="contactName"
          type="text"
          required
          placeholder="John Doe"
          errorMsg={serverErrors?.contactName}
        />
        <Input
          label="Contact Email"
          id="contactEmail"
          type="email"
          required
          placeholder="john@example.com"
          errorMsg={serverErrors?.contactEmail}
        />
        <SubmitButton text="Submit" />
      </div>
    </form>
  );
}
