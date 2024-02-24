import { useContext } from "react";
import { Events } from "../../components/Events";
import { Footer } from "../../components/Footer";
import { HeaderHome } from "../../components/HeaderHome";
import { History } from "../../components/History";
import { Line } from "../../components/Line";
import { Ministery } from "../../components/Ministery";
import { Pgm } from "../../components/Pgm";
import { SectionBanner } from "../../components/SectionBanner";
import { HomeStyle } from "./style";
import { GlobalContext } from "../../providers/GlobalContext";
import { Login } from "../Login";

export const Home = () => {

  const {loginModal} = useContext(GlobalContext)

  return (
    <HomeStyle>
      <HeaderHome/>
      <SectionBanner />
      <History />
      <Line name="Atividade"/>
      <Pgm />
      <Line/>
      <Ministery />
      <Line />
      <Events />
      <Footer />
      {loginModal ? <Login/> : null}
    </HomeStyle>
  );
};
