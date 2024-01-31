import { RegisterStyle } from "./style";
import manutenção from "../../assets/manutenção.svg";
import { FaHome } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export const Register = () => {
  const navigate = useNavigate();
  return (
    <RegisterStyle>
      <h1>Estamos em Obras</h1>
      <span>
        fique ligado em nossas redes para ficar por dentro de todas as
        atualizaçãoes
      </span>
      <div>
        <img src={manutenção} alt="home" />
      </div>
      <button onClick={() => navigate("/")}>
        <FaHome size={30} />
      </button>
    </RegisterStyle>
  );
};
