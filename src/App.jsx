import { useState, useEffect, useRef } from "react";
import BotonPausa from './components/BotonPausa/BotonPausa';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const tiempo = useRef(null);
  
  useEffect(() => {
  tiempo.current = setInterval(() => {
    setCount(count => count + 1);
  }, 1000);
  
  return () => clearInterval(tiempo.current);
  }, []);

  const pausar = () => {
    clearInterval(tiempo.current);
  };

  return (
    <>
      <h1>Cronómetro</h1>
      <p>Segundos: {count}</p>
      <button onClick={pausar}>Pausar</button>
    </>
  )
}

export default App;
