import React from "react";

interface SubmitButtonProps {
  text: string;
}
export default function SubmitButton({ text }: SubmitButtonProps) {
  return (
    <button
      type="submit"
      className="h-8 mt-2 bg-teal-500  text-lg text-white disabled:bg-teal-600/3 py-6 lg:text-md rounded-md font-semibold text-center flex items-center justify-center hover:bg- "
    >
      {text}
    </button>
  );
}
