import { BrowserRouter, Route, Routes } from "react-router-dom";
import AllPlayers from "./components/AllPlayers";
import SinglePlayer from "./components/SinglePlayer";
import NavBar from "./components/NavBar";
import Logo from "./components/Logo";

function App() {
  return (
    <BrowserRouter>
      <main className="main">
        <Logo />
        <Routes>
          <Route path="/" element={<AllPlayers />} />
          <Route path="/players/:id" element={<SinglePlayer />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
