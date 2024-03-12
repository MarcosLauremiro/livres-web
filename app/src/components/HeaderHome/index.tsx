import { useContext } from "react";
import { GlobalContext } from "../../providers/GlobalContext";
import { Buttons } from "../Buttons";
import { HeaderStyle } from "./style";

export const HeaderHome = () => {

  const {login} = useContext(GlobalContext)

  return (
    <HeaderStyle>
      <div className="container">
        <Buttons />
      </div>
    </HeaderStyle>
  );
};
