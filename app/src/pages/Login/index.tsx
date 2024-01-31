import { LoginStyle } from "./style";
import manutenção from "../../assets/manutenção.svg";
import { useNavigate } from "react-router-dom";
import { FaHome } from "react-icons/fa";

export const Login = () => {
  const navigate = useNavigate();
  return (
    <LoginStyle>
      <h1>Estamos em Obras</h1>
      <span>
        fique ligado em nossas redes para ficar por dentro de todas as
        atualizaçãoes
      </span>
      <div>
        <img src={manutenção} alt="" />
      </div>
      <button onClick={() => navigate("/")}>
        <FaHome size={30} />
      </button>
    </LoginStyle>
  );
};
