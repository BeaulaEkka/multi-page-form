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
  placeholder?: string;
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
  placeholder,
}: InputProps) {
  return (
    <div>
      <label htmlFor={id} className="block text-sm text-slate-500 mb-1">
        {label}
        {description && (
          <span className="text-sm text-slate-200 block mb-1">
            {description}
          </span>
        )}
      </label>
      <input
        className={`w-full h-10 rounded-md py-4 px-4 text-slate-900 border ${
          errorMsg ? "border-red-500" : "border-slate-300"
        } border-2`}
        type={type}
        name={id}
        id={id}
        required={required}
        pattern={pattern}
        minLength={minLength}
        min={min}
        max={max}
        placeholder={placeholder}
      />
      <div className="min-h-8 mt-1">
        {errorMsg && (
          <span className="text-red-500 text-sm block">{errorMsg}</span>
        )}
      </div>
    </div>
  );
}
