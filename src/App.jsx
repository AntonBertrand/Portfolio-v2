import { useState } from "react";
import "./App.css";
import LoadingScreen from "./components/LoadingScreen";
import "./index.css";

function App() {
  const onComplete = () => {
    setIsLoaded(true);
  };
  const [isLoaded, setIsLoaded] = useState(false);
  return (
    <div>
      {!isLoaded && <LoadingScreen onComplete={onComplete} />}
      <div
        className={`min-h-screen transition-opacity duration-700 ${
          isLoaded ? "opacity-100" : "opacity-0"
        } bg-black text-gray-100`}
      ></div>
    </div>
  );
}

export default App;
