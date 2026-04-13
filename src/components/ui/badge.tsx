type Props = {
  label: string;
};

export function Badge({ label }: Props) {
  return <span className="text-xs px-3 py-1 rounded-full border">{label}</span>;
}
