import Input from "@/app/components/Input";
import SubmitButton from "@/app/components/SubmitButton";
import React from "react";

export default function StepThreeForm() {
  return (
    <form className="flex flex-1 flex-col items-center ">
      <div className="flex w-full flex-col gap-8 lg:max-w-[700px]">
        <Input
          label="Contact Name"
          id="contactName"
          type="text"
          required
          placeholder="John Doe"
        />
        <Input
          label="Contact Email"
          id="contactEmail"
          type="email"
          required
          placeholder="john@example.com"
        />
        <SubmitButton text="Submit" />
      </div>
    </form>
  );
}
