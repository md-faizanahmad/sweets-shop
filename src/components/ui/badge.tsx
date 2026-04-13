type Props = {
  label: string;
};

export function Badge({ label }: Props) {
  return (
    <span className="inline-flex items-center gap-1.5 text-[11px] font-black uppercase tracking-widest px-5 py-2.5 rounded-full bg-white border border-neutral-100 shadow-sm text-neutral-600 hover:border-(--nav-hover) hover:text-(--nav-hover) transition-all cursor-default">
      <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
      {label}
    </span>
  );
}
