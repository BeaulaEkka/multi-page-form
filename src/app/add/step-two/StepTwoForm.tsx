"use client";
import Input from "@/app/components/Input";
import SubmitButton from "@/app/components/SubmitButton";
import { useFormState } from "react-dom";
import { stepTwoFormAction } from "./actions";
import { FormErrors } from "@/app/types";

const initialState: FormErrors = {};

export default function StepTwoForm() {
  const [serverErrors, formAction] = useFormState(
    stepTwoFormAction,
    initialState
  );
  return (
    <form className="flex flex-1 flex-col items-center" action={formAction}>
      <div className="flex w-full flex-col gap-8 lg:max-w-[700px]">
        <Input
          label="Coupon Code"
          id="coupon"
          type="text"
          required
          placeholder="123456"
          minLength={5}
          errorMsg={serverErrors?.coupon}
        />

        <Input
          label="Discount %"
          id="discount"
          type="number"
          required
          placeholder="35"
          min={1}
          max={100}
          errorMsg={serverErrors?.discount}
        />

        <SubmitButton text="Submit" />
      </div>
    </form>
  );
}
