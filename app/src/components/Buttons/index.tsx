import { useNavigate } from "react-router-dom";
import { ButtonsStyled } from "./style";
import { useContext } from "react";
import { GlobalContext } from "../../providers/GlobalContext";

export const Buttons = () => {
  const navigate = useNavigate();

  const { setLoginModal } = useContext(GlobalContext);

  return (
    <ButtonsStyled>
      <button className="login" onClick={() => setLoginModal(true)}>
        Login
      </button>
      <button className="register" onClick={() => navigate("/registro")}>
        Quero ser familia
      </button>
    </ButtonsStyled>
  );
};
