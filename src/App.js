import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage";
import "./css/app.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <MainPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
