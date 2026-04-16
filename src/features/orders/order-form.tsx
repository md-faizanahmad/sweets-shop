import { OrderField, OrderFormData } from "@/@types/order.types";
import { ChangeEvent } from "react";
import { MapPin, User, Phone, ShoppingBasket, Home } from "lucide-react";

interface Props {
  form: OrderFormData;
  onChange: (field: OrderField, value: string) => void;
  onLocation: () => void;
}

export function OrderForm({ form, onChange, onLocation }: Props) {
  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const field = e.target.name as OrderField;
    onChange(field, e.target.value);
  };

  // Shared Tailwind classes for the inputs
  const inputClasses = `
    w-full bg-neutral-50 border border-neutral-100 
    px-11 py-3.5 rounded-2xl text-sm font-medium
    placeholder:text-neutral-400 focus:bg-white 
    focus:border-[var(--nav-hover)] focus:ring-4 
    focus:ring-[var(--nav-hover)]/5 outline-hidden 
    transition-all duration-200
  `;

  return (
    <div className="space-y-4">
      {/* Name Field */}
      <div className="relative group">
        <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400 group-focus-within:text-(--nav-hover) transition-colors" />
        <input
          name="name"
          placeholder="Your Full Name"
          value={form.name}
          onChange={handleInputChange}
          className={inputClasses}
        />
      </div>

      {/* Phone Field */}
      <div className="relative group">
        <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400 group-focus-within:text-(--nav-hover) transition-colors" />
        <input
          name="phone"
          type="tel"
          placeholder="Contact Number"
          value={form.phone}
          onChange={handleInputChange}
          className={inputClasses}
        />
      </div>

      {/* Quantity Field */}
      <div className="relative group">
        <ShoppingBasket className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400 group-focus-within:text-(--nav-hover) transition-colors" />
        <input
          name="quantity"
          placeholder="Quantity (e.g. 1kg, 500g)"
          value={form.quantity}
          onChange={handleInputChange}
          className={inputClasses}
        />
      </div>

      {/* Address Field */}
      <div className="relative group">
        <Home className="absolute left-4 top-4 w-4 h-4 text-neutral-400 group-focus-within:text-(--nav-hover) transition-colors" />
        <textarea
          name="address"
          placeholder="Detailed Delivery Address"
          value={form.address}
          onChange={handleInputChange}
          rows={3}
          className={`${inputClasses} py-4 resize-none`}
        />

        {/* Location Trigger - Positioned inside textarea area */}
        <button
          type="button"
          onClick={(e) => {
            e.preventDefault();
            onLocation();
          }}
          className="absolute right-3 bottom-3 flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white border border-neutral-100 text-[10px] font-black uppercase tracking-wider text-[var(--footer-accent)] shadow-sm hover:bg-neutral-50 active:scale-95 transition-all"
        >
          <MapPin className="w-3 h-3" />
          Auto-fill
        </button>
      </div>
    </div>
  );
}
