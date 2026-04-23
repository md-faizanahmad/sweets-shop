import { ShieldCheck } from "lucide-react";

export function FooterBrand({
  brand,
  description,
}: {
  brand: string;
  description: string;
}) {
  return (
    <div className="space-y-6 text-center md:text-left">
      <div>
        <h3 className="text-2xl font-black tracking-tighter">
          <span className="text-xl font-bold tracking-tight transition-colors duration-300">
            Khus<span style={{ color: "var(--nav-hover)" }}>Shop</span>
            <span style={{ color: "var(--footer-accent)" }}>.</span>
          </span>
        </h3>
        <p
          className="text-sm mt-4 leading-relaxed max-w-xs mx-auto md:mx-0"
          style={{ color: "var(--footer-text)" }}
        >
          {description}
        </p>
      </div>

      <div className="flex items-center justify-center md:justify-start gap-4">
        <div className="flex items-center gap-2 border px-2 py-1 rounded bg-white/80 border-neutral-100">
          <div className="w-3 h-3 border-2 border-green-600 flex items-center justify-center">
            <div className="w-1.5 h-1.5 rounded-full bg-green-600" />
          </div>
          <span className="text-[10px] font-bold uppercase tracking-wider text-green-700">
            100% Veg
          </span>
        </div>
        <div className="flex items-center gap-2 border px-2 py-1 rounded bg-white/80 border-neutral-100">
          <ShieldCheck className="w-3 h-3 text-blue-600" />
          <span className="text-[10px] font-bold uppercase tracking-wider text-blue-700">
            FSSAI Certified
          </span>
        </div>
      </div>
    </div>
  );
}
