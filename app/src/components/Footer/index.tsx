import { FooterStyle } from "./style";
import livres from "../../assets/LIVRES.png"


export const Footer = () => {
  return (
    <FooterStyle>
      <div className="container">
        <div className="logo">
            <img src={livres} alt="" />
        </div>
        <div className="redes">
          <a href=""> Instagram</a>
          <a href="">Facebook</a>
          <a href="">TikTok</a>
          <a href="">YouTub</a>
        </div>
      </div>
        <div className="brand">
          <p>Miro ©2024</p>
        </div>
    </FooterStyle>
  );
};
