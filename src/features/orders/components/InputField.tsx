// features/order/components/InputField.tsx

import { memo } from "react";
import { LucideIcon } from "lucide-react";

interface Props {
  id: string;
  value: string;
  placeholder: string;
  icon: LucideIcon;
  error?: string;
  type?: string;
  onChange: (value: string) => void;
}

export const InputField = memo(function InputField({
  id,
  value,
  placeholder,
  icon: Icon,
  error,
  type = "text",
  onChange,
}: Props) {
  return (
    <div className="space-y-1">
      <div className="relative group">
        <Icon className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400 group-focus-within:text-(--nav-hover) transition-colors" />

        <input
          id={id}
          value={value}
          type={type}
          aria-invalid={!!error}
          aria-describedby={error ? `${id}-error` : undefined}
          placeholder={placeholder}
          onChange={(e) => onChange(e.target.value)}
          className="w-full bg-neutral-50 border border-neutral-200 px-11 py-3.5 rounded-2xl text-sm font-medium focus:bg-white focus:border-(--nav-hover) focus:ring-2 focus:ring-(--nav-hover)/20 focus:outline-none transition"
        />
      </div>

      {error && (
        <p id={`${id}-error`} className="text-xs text-red-500">
          {error}
        </p>
      )}
    </div>
  );
});
