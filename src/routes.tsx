import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import { Login } from "./pages/Login";
import { Home } from "./pages/Home";
import { FidelityCard } from "./pages/FidelityCard";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Login />
      },
    ]
  },
  {
    path: "/home",
    element: <Home />
  },
  {
    path: "/fidelity-card",
    element: <FidelityCard />
  },
]);