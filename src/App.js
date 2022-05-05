import { useState } from "react";
import { Footer } from "./components/Footer";
import { GamePage } from "./components/GamePage";
import { Header } from "./components/Header";


function App() {

  const [desafio, setDesafio] = useState(0);

  function handleChange(value){
    setDesafio(value);
  }

  return (
  <>
    <Header handleChange={handleChange} />
    <GamePage desafio={desafio}/>
    <Footer />
  </>
  );
}

export default App;
