import ZeluxImage from "../assets/images/zelux-removebg-preview.png"
import { AwardCard } from "../components/AwardCard";
import { FidelityCardRepresentation } from "../components/FidelityCard";

export function FidelityCard() {
  return (
    <>
      <header className="fixed top-0 bg-lime-600 w-screen h-[100px] flex items-center justify-center">
        <div className="w-3/4 flex items-center justify-between">
          <img 
            src={ZeluxImage} 
            alt="Logo Zelux Estética Automotiva com fundo verde"  
            className="size-[100px]"
          />

          <strong className="text-white">Seja bem vinda, Joana</strong>
        </div>
      </header>

      <main className="bg-gray-100 flex flex-col items-center gap-10 mt-[100px] p-5">
        <div className="w-[1000px] h-[200px] bg-white p-4 flex flex-col justify-evenly">
          <strong className="text-2xl">Seus pontos</strong>
          <strong className="text-3xl text-lime-600">8 pontos</strong>
          <span className="">Continue comprando para ganhar mais pontos</span>
        </div>  

        <div className="w-[1000px] h-[400px] bg-white p-4 flex flex-col gap-3">
          <strong className="text-2xl">Prêmios disponíveis</strong>
          <AwardCard title="Lustração de Carro Grátis" />
          <AwardCard title="Lavagem Completa Premium" />
          <AwardCard title="Higienização Interna Gratuita" />
          <AwardCard title="Polimento de Faróis" />
          <AwardCard title="Descontos Exclusivos em Enceramento" />
          <AwardCard title="Cristalização de Pintura Grátis" />
        </div>

        <div className="w-[1000px] h-[400px] bg-white p-4 flex flex-col gap-3">
          <strong className="text-2xl">Seu cartão</strong>
          <FidelityCardRepresentation />
        </div>

        <div className="w-[1000px] h-[200px] bg-white p-4 flex flex-col justify-evenly">
          <strong className="text-2xl">Ganhe mais pontos</strong>
          <span>Continue comprando conosco e ganhe mais pontos!</span>

          <a 
            target="_blank"
            href="https://wa.me/+558596978188"
            className="bg-lime-600 w-[200px] h-[50px] rounded-xl flex justify-center items-center"
          >
            <strong className="text-white">
              Comprar
            </strong>
          </a>
        </div>
      </main>
    </>
  );
}