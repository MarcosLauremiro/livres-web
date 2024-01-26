import { Card } from "./Cards";
import { PgmStyle } from "./style";
import livres from "../../assets/GersonMilitao-6.jpg";

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
        Lorem, ipsum doque cum qui laborum <a href="">sint</a>.
      </p>
    </PgmStyle>
  );
};
