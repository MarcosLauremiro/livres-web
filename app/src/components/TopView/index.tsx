import { ViewStyled } from "./style";

export const TopView = () => {
  return (
    <ViewStyled>
      <button className="login">
        Login
      </button>
      <button className="register">
        Quero ser familia
      </button>
    </ViewStyled>
  );
};
