import { useState } from "react";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Page } from "./components/Page";


function App() {

  const [desafio, setDesafio] = useState(0);

  function handleChange(value){
    setDesafio(value);
  }

  return (
  <>
    <Header handleChange={handleChange} />
    <Page desafio={desafio}/>
    <Footer />
  </>
  );
}

export default App;
