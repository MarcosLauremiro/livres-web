import { Events } from "../../components/Events";
import { Footer } from "../../components/Footer";
import { History } from "../../components/History";
import { Ministery } from "../../components/Ministery";
import { Pgm } from "../../components/Pgm";
import { SectionBanner } from "../../components/SectionBanner";
import { HomeStyle } from "./style";

export const Home = () => {
  return (
    <HomeStyle>
      <SectionBanner />
      <History />
      <Pgm />
      <Ministery />
      <Events />
      <Footer />
    </HomeStyle>
  );
};
