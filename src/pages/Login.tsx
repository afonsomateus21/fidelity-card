import { Link } from "react-router-dom";
import ZeluxImage from "../assets/images/zelux-removebg-preview.png"
import { UserInput } from "../components/Input";

export function Login() {
  return (
    <div className="bg-white w-[600px] h-[500px] flex flex-col gap-3 items-center justify-center">
      <img 
        src={ZeluxImage} 
        alt="Logo Zelux Estética Automotiva com fundo verde"  
        className="size-[150px]"
      />
      <UserInput placeholder="Digite seu login" />
      <UserInput 
        placeholder="Digite sua senha" 
        type="password"
      />

      <Link 
        to="/home"
        className="bg-lime-600 w-[200px] h-[50px] rounded-3xl flex justify-center items-center">
        <strong className="text-white">
          Entrar
        </strong>
      </Link>
    </div>
  );
}