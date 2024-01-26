import { Card } from "./Cards";
import { MinisteryStyle } from "./style";
import livres from "../../assets/GersonMilitao-6.jpg";

export const Ministery = () => {
  return (
    <MinisteryStyle>
      <div className="header">
        <h3>Ministerios</h3>
        <h1>Ministério</h1>
        <p>
          Contudo a Graça de nosso <span>Senhor</span> Transbordou sobre min TM:
          1, 14
        </p>
      </div>
      <div className="cards">
        <Card
          title="Livres - Ministerio de jovens"
          content="Lorem, ipsum doque cum qui laborumLorem, ipsum doque cum qui laborumLorem, ipsum doque cum qui laborum"
          img={livres}
        />
        <Card
          title="New - Ministerio de Adolecentes"
          content="Lorem, ipsum doque cum qui laborumLorem, ipsum doque cum qui laborumLorem, ipsum doque cum qui laborum"
          img={livres}
        />
        <Card
          title="Wey - Ministerio de jovens Casados"
          content="Lorem, ipsum doque cum qui laborumLorem, ipsum doque cum qui laborumLorem, ipsum doque cum qui laborum"
          img={livres}
        />
      </div>
      <p>
        Lorem, ipsum doque cum qui laborum <a href="">sint</a>.
      </p>
    </MinisteryStyle>
  );
};
