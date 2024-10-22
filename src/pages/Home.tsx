import { UserCard } from "../components/UserCard";
import ZeluxImage from "../assets/images/zelux-removebg-preview.png"

export function Home() {
  return (
    <>
      <header className="fixed top-0 bg-lime-600 w-screen h-[100px] flex items-center justify-center">
        <div className="w-3/4">
          <img 
            src={ZeluxImage} 
            alt="Logo Zelux Estética Automotiva com fundo verde"  
            className="size-[100px]"
          />
        </div>
      </header>
      <main className="bg-gray-100 h-screen flex flex-col items-center justify-center">
        <div className=" w-[1000px] h-[700px] flex flex-col items-center justify-center gap-3 relative">
          <UserCard />
          <UserCard />
          <UserCard />
          <UserCard />
          <UserCard />
          <button className="bg-lime-600 w-[200px] h-[50px] rounded-3xl items-center">
            <strong className="text-white">
              Adicionar Cliente
            </strong>
          </button>
        </div>
      </main>
    </>
  );
}