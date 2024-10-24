"use client";
import Input from "@/app/components/Input";
import SubmitButton from "@/app/components/SubmitButton";
import React from "react";
import { stepOneFormAction } from "./actions";
import { useFormState } from "react-dom";
import { FormErrors } from "@/app/types";

const initialState: FormErrors = {};
export default function StepOneForm() {
  const [serverErrors, formAction] = useFormState(
    stepOneFormAction,
    initialState
  );
  console.log("serverErrors:", serverErrors);
  return (
    <form action={formAction} className="flex flex-1 flex-col items-center ">
      <div className="flex w-full flex-col gap-8 lg:max-w-[700px]">
        <Input
          label="Name"
          id="name"
          type="text"
          required
          placeholder="John Doe"
          errorMsg={serverErrors?.name}
         
        />

        <Input
          label="Link"
          id="link"
          type="text"
          required
          placeholder="link"
          pattern="^https?:\/\/(www\.)?[a-zA-Z0-9-]+(\.[a-zA-Z]{2,})+([\/a-zA-Z0-9#-._~:?+&%=]*)?$"
          errorMsg={serverErrors?.link}
        />
        <SubmitButton text="Submit" />
      </div>
    </form>
  );
}
