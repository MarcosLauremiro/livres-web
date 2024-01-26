import { differenceInDays } from "date-fns";
import { useEffect, useState } from "react";

interface IClock {
  dataEvento: Date;
}

export const Clock = ({ dataEvento }: IClock) => {
  const [diasRestantes, setDiasRestantes] = useState(0);

  useEffect(() => {
    const calcularDias = () => {
      const agora = new Date();
      const diferença = differenceInDays(dataEvento, agora);
      setDiasRestantes(diferença);
    };
    const intervalId = setInterval(calcularDias, 1000);

    return () => clearInterval(intervalId);
  }, []);
  return (
    <p>{diasRestantes > 0 ? <span>{diasRestantes}</span> : <span>00</span>}</p>
  );
};
