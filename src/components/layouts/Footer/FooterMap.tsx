import { Location } from "@/components/ui/Location";
import { SocialLinks } from "@/components/ui/SocialLink";

export function FooterMap({ address }: { address: string }) {
  return (
    <div className="text-center md:text-left">
      <h4
        className="text-xs font-black uppercase tracking-[0.3em] mb-6"
        style={{ color: "var(--footer-muted)" }}
      >
        Location
      </h4>
      <div
        className="rounded-2xl overflow-hidden border shadow-sm h-32 w-full relative group mb-4"
        style={{ borderColor: "var(--footer-border)" }}
      >
        <Location />
        <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors" />
      </div>
      <p
        className="text-[11px] font-medium  mb-6"
        style={{ color: "var(--footer-muted)" }}
      >
        {address}
      </p>
      <div className="flex justify-center md:justify-start">
        <SocialLinks />
      </div>
    </div>
  );
}
