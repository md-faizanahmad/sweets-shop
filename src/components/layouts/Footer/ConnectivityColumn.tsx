import { Phone, Clock } from "lucide-react";
import { FooterActions } from "./FooterActions"; // Path to component above

export function ConnectivityColumn({ contact }: { contact: any }) {
  return (
    <div className="text-center md:text-left mt-10 md:mt-0">
      <h4
        className="text-[10px] md:text-xs font-black uppercase tracking-[0.2em] md:tracking-[0.3em] mb-6 md:mb-8"
        style={{ color: "var(--footer-muted)" }}
      >
        Connectivity
      </h4>

      <ul className="space-y-5 md:space-y-6">
        {/* Phone */}
        <li className="flex flex-col md:flex-row items-center md:items-start gap-2 md:gap-3">
          <Phone
            className="w-4 h-4 md:mt-0.5 shrink-0"
            style={{ color: "var(--footer-muted)" }}
          />
          <a
            href={`tel:${contact.phone}`}
            className="text-sm font-bold"
            style={{ color: "var(--footer-text)" }}
          >
            {contact.phone}
          </a>
        </li>

        {/* Timing */}
        <li className="flex flex-col md:flex-row items-center md:items-start gap-2 md:gap-3">
          <Clock
            className="w-4 h-4 md:mt-0.5 shrink-0"
            style={{ color: "var(--footer-muted)" }}
          />
          <div
            className="text-sm font-medium leading-tight"
            style={{ color: "var(--footer-text)" }}
          >
            <p>10:00 AM — 10:00 PM</p>
            <p
              className="text-[9px] md:text-[10px] uppercase font-bold mt-1.5"
              style={{ color: "var(--footer-muted)" }}
            >
              Open All 7 Days
            </p>
          </div>
        </li>
      </ul>

      {/* NEW: Action Buttons Integrated Here */}
      <FooterActions
        phone={contact.phone}
        address="Your Shop Name, Street Address, City"
      />
    </div>
  );
}
