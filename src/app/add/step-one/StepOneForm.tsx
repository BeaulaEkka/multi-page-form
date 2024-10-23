import Input from "@/app/components/Input";
import React from "react";

export default function StepOneForm() {
  return (
    <div className="flex flex-1 flex-col items-center">
      <div className="flex w-full flex-col gap-8 lg:max-w-[700px]">
        <Input label="Name" id="name" type="text" required />
      </div>
    </div>
  );
}
