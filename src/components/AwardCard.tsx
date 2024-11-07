import { AwardCardProps } from "../types/award-card-props";

export function AwardCard({ title }: AwardCardProps) {
  return (
    <div className="w-full h-[50px] rounded-xl bg-gray-200 flex items-center justify-evenly">
      <span>{ title }</span>
    </div>
  );
}