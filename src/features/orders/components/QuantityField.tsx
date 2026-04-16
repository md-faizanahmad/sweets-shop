// features/order/components/QuantityField.tsx

interface Props {
  value: string;
  totalPrice: number | null;
  error?: string;
  onChange: (value: string) => void;
}

export function QuantityField({ value, totalPrice, error, onChange }: Props) {
  const isValid = totalPrice !== null;

  return (
    <div className="space-y-2">
      <input
        value={value}
        placeholder="Quantity (e.g. 1kg, 500g)"
        onChange={(e) => onChange(e.target.value)}
        className="w-full px-4 py-3 rounded-xl border"
      />

      {value && (
        <div className="text-sm font-bold">
          {isValid ? (
            <span className="text-green-600">₹{totalPrice}</span>
          ) : (
            <span className="text-red-500">Invalid quantity</span>
          )}
        </div>
      )}

      {error && <p className="text-xs text-red-500">{error}</p>}
    </div>
  );
}
