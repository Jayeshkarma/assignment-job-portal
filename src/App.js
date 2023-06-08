import AppRouter from "./AppRouter";
import { BrowserRouter } from "react-router-dom";
import "./styles.css";

export default function App() {
  return (
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  );
}
