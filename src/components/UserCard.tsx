import { Link } from "react-router-dom";

export function UserCard() {
  return (
    <div className="w-full h-[80px] rounded-xl bg-white flex items-center justify-evenly">
      <strong>
        Joana Costa
      </strong>

      <strong>
        (85) 99999-9999
      </strong>

      <strong>
        8 estrelas
      </strong>

      <strong className="text-lime-600">
        <Link to="/fidelity-card">Acessar</Link>
      </strong>
    </div>
  );
}