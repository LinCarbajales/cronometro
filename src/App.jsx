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

    changeState(true);
  
    return () => clearInterval(tiempo.current);

  }

  useEffect(() =>  {
    arrancarCronometro();
    
    return () => {
      if (tiempo.current) {
        clearInterval(tiempo.current);
      }
    };
    }, []);

  const pausar = () => {
    clearInterval(tiempo.current);
    changeState(false);
  };

  const reiniciar = () => {
    setCount(0);
  };

  const colores =
        count < 10 ? 'base' :
        count >= 10 && count <= 20 ? 'aqua' :
        'verde';

  const mensaje = 
        count < 10 ? 'Pausa de 10 segundos.' :
        count >= 10 && count <= 20 ? 'Ya queda menos.' :
        'Ya te puedes ir a casa.';

  return (
    <>
      <h1>Cronómetro</h1>
      <p>{mensaje}</p>
      <p className={colores}>Segundos: {count}</p>
      <button onClick={state ? pausar : arrancarCronometro}>{state ? 'Pausar' : 'Reanudar'}</button>
      <button onClick={reiniciar}>Reiniciar</button>
    </>
  )
}

export default App;
