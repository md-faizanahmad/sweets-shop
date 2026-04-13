type SocialLink = {
  label: string;
  href: string;
};

const socialLinks: SocialLink[] = [
  {
    label: "Instagram",
    href: "https://instagram.com/",
  },
  {
    label: "Facebook",
    href: "https://facebook.com/",
  },
];

export function SocialLinks() {
  return (
    <div className="flex gap-4">
      {socialLinks.map((item) => (
        <a
          key={item.label}
          href={item.href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-[var(--muted)] hover:text-[var(--primary)] transition"
        >
          {item.label}
        </a>
      ))}
    </div>
  );
}
