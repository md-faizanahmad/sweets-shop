import type { Review } from "@/features/home/config/trust.config";

type Props = {
  review: Review;
};

export function ReviewCard({ review }: Props) {
  return (
    <div className="border rounded-lg p-4">
      <p className="text-small">&quot;{review.text}&quot;</p>
      <p className="text-small mt-3 font-medium">— {review.name}</p>
    </div>
  );
}
