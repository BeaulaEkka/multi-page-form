"use client";

interface InputProps {
  label: string;
  id: string;
  description?: string;
  required?: boolean;
  pattern?: string;
  type?: string;
  minLength?: number;
  min?: number;
  max?: number;
  errorMsg?: string;
}
export default function Input({
  label,
  id,
  required,
  description,
  pattern,
  type,
  minLength,
  min,
  max,
  errorMsg,
}: InputProps) {
  // const { updateNewDealDetails, newDealData } = useAddDealConext();

  // const handleInputChange = (e: React.changeEvent<HTMLInputElement>) => {
  //   updateNewDealDetails({ [e.target.name]: e.target.value });
  // };
  return (
    <div>
      <label htmlFor={id} className="block text-lg">
        {label}
        {description && (
          <span className="text-sm text-slate-200 block mb-1">
            {description}
          </span>
        )}
      </label>
      <input
        className="w-full rounded-md py-4 px-2 text-slate-900"
        type={type}
        name={id}
        id={id}
        required={required}
        pattern={pattern}
        minLength={minLength}
        min={min}
        max={max}
      />
      <div className="min-h-8 mt-1">
        {errorMsg && (
          <span className="text-red-500 text-sm block">{errorMsg}</span>
        )}
      </div>
    </div>
  );
}
