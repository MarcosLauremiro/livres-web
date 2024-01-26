import { Card } from "./Cards";
import { PgmStyle } from "./style";
import livres from "../../assets/GersonMilitao-6.jpg";
import { FaArrowRight } from "react-icons/fa";

export const Pgm = () => {
  return (
    <PgmStyle>
      <div className="header">
        <h3>Pequenos Grupos</h3>
        <h1>família</h1>
        <p>Vamos ser familia, conheça nossos PGM's</p>
      </div>
      <div className="cards">
        <Card title="Livres - PGM de jovens" img={livres} />
        <Card title="New - PGM de Adolecentes" img={livres} />
        <Card title="Wey - PGM de jovens Casados" img={livres} />
      </div>
      <p>
        Confira todos nossos pequenos grupos <a href=""><FaArrowRight /> Ver PGM's</a>.
      </p>
    </PgmStyle>
  );
};
