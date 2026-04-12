export function HeroSkeleton() {
  return (
    <div className="w-full h-[85vh] md:h-[70vh] bg-neutral-200 animate-pulse flex items-center px-6">
      <div className="max-w-xl space-y-4">
        <div className="h-4 w-24 bg-neutral-300 rounded" />
        <div className="h-10 w-3/4 bg-neutral-300 rounded" />
        <div className="h-20 w-full bg-neutral-300 rounded" />
        <div className="h-12 w-48 bg-neutral-300 rounded-xl" />
      </div>
    </div>
  );
}
