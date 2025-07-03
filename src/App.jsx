import { useState, useEffect, useRef } from "react";
import BotonPausa from './components/BotonPausa/BotonPausa';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const [state, changeState] = useState(true);

  const tiempo = useRef(null);
  
  const arrancarCronometro = () => {
    
  tiempo.current = setInterval(() => {
    setCount(count => count + 1);
    }, 1000);
  
    return () => clearInterval(tiempo.current);
  }

  useEffect(() => arrancarCronometro() , []);

  const pausar = () => {
    clearInterval(tiempo.current);
    changeState(false);
  };

  const reiniciar = () => {
    setCount(0);
  }

  return (
    <>
      <h1>Cronómetro</h1>
      <p>Segundos: {count}</p>
      <button onClick={pausar}>{state ? 'Pausar' : 'Reanudar'}</button>
      <button onClick={reiniciar}>Reiniciar</button>
    </>
  )
}

export default App;
