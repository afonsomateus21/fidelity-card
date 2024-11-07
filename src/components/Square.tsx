import { FidelityCardProps } from "../types/fidelity-card-props";
import { Check } from 'lucide-react';

export function Square({ isFilled } : FidelityCardProps) {
  return (
    <div className={`size-[50px] ${ isFilled ? 'bg-lime-600 border-2 border-white' : 'bg-white' } flex justify-center items-center`}>
      { isFilled ? <Check color="#fff" /> : <div/> }
    </div>
  );
}