import { Outlet } from "react-router-dom";

function App() {
  return (
    <main className="bg-gray-100 h-screen flex flex-col items-center justify-center">
      <Outlet />
    </main>
  );
}

export default App
