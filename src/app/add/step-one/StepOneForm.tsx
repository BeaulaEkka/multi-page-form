import Input from "@/app/components/Input";
import SubmitButton from "@/app/components/SubmitButton";
import React from "react";

export default function StepOneForm() {
  return (
    <form className="flex flex-1 flex-col items-center ">
      <div className="flex w-full flex-col gap-8 lg:max-w-[700px]">
        <Input
          label="Name"
          id="name"
          type="text"
          required
          placeholder="John Doe"
        />
        <Input label="Link" id="link" type="text" required placeholder="link" />
        <SubmitButton text="Submit" />
      </div>
    </form>
  );
}
