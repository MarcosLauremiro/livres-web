import { useNavigate } from "react-router-dom";
import { ButtonsStyled } from "./style";

export const Buttons = () => {

  const navigate = useNavigate()

  return (
    <ButtonsStyled>
      <button className="login" onClick={()=>navigate("/login")}>
        Login
      </button>
      <button className="register" onClick={()=>navigate("/registro")}>
        Quero ser familia
      </button>
    </ButtonsStyled>
  );
};
