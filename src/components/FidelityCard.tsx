import { Square } from "./Square";

export function FidelityCardRepresentation() {
  return (
    <div className="w-[500px] h-[300px] bg-lime-600 flex flex-col items-center justify-evenly p-5">
      <strong className="text-white">Compre 10 e ganhe 1 prêmio</strong>

      <hr className="w-full" />

      <div className="grid grid-cols-5 grid-rows-2 gap-4">
        <Square isFilled />
        <Square isFilled />
        <Square isFilled />
        <Square isFilled />
        <Square isFilled />
        <Square isFilled />
        <Square isFilled />
        <Square isFilled />
        <Square />
        <Square />
      </div>
    </div>
  );
}