import React, { FormEvent } from "react";
import clsx from "clsx";

interface SelectOption {
  value: string;
  label: string;
}

interface SelectProps {
  label: string;
  value: string | undefined;
  options: SelectOption[];
  required?: boolean;
  showRequired?: boolean;
  onChange: (e: FormEvent<HTMLSelectElement>) => void;
}

export const Select = ({
  label,
  value,
  options,
  onChange,
  showRequired = false,
  required = true,
}: SelectProps) => {
  return (
    <div className="flex flex-col font-medium">
      <span className="inline-flex justify-between">
        <label htmlFor={label} className="text-sm text-primary-marine-blue">
          {label}
        </label>
        {required && showRequired && (
          <p className="text-primary-starberry-red leading-3">
            Este campo é obrigatório
          </p>
        )}
      </span>
      <select
        id={label}
        value={value}
        className={clsx(
          "border border-neutral-light-gray rounded px-4 py-2 text-sm transition-all focus:outline-none focus:ring-1 focus:ring-primary-purplish-blue",
          showRequired &&
            required &&
            !value &&
            "ring-1 ring-primary-starberry-red",
          "mt-1",
        )}
        style={{
          appearance: "none",
          background: "white",
          paddingRight: "2.5rem",
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23343a40' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E\")",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "right center",
        }}
        onChange={(e: FormEvent<HTMLSelectElement>) => onChange(e)}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};
