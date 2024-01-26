import { Banner } from "../Banner";
import { Header } from "../Header";
import { Insta } from "../Insta";
import { SectionStyle } from "./style";

export const SectionBanner = () => {
  return (
    <SectionStyle>
      <div className="container">
        <Header />
        <Banner />
        <Insta />
      </div>
    </SectionStyle>
  );
};
