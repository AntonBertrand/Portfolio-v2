import { useState } from "react";
import "./App.css";
import LoadingScreen from "./components/LoadingScreen";
import "./index.css";
import Navbar from "./components/Navbar";
import MobileMenu from "./components/MobileMenu";

function App() {
  const onComplete = () => {
    setIsLoaded(true);
  };
  const [isLoaded, setIsLoaded] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div>
      {!isLoaded && <LoadingScreen onComplete={onComplete} />}
      <div
        className={`min-h-screen transition-opacity duration-700 bg-red-500${
          isLoaded ? "opacity-100" : "opacity-0"
        } bg-black text-gray-100`}
      ></div>
      <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
    </div>
  );
}

export default App;
