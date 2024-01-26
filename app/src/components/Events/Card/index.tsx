import { Clock } from "../Clock";
import { CardStyled } from "./style";

interface ICard {
  img?: string;
  name?: string;
  title?: string;
  valor?: string;
  data?: Date;
}

export const Card = ({ img, name, title, valor, data }: ICard) => {
  return (
    <CardStyled img={img!}>
      <div className="img">
        <div className="img-bc"></div>
      </div>
      <div className="content">
        <div className="content-container">
          <div className="title">
            <div className="name">
              <h3>{name}</h3>
              <h1>{title}</h1>
            </div>
            <div className="date">
              <p>Dias</p>
              <Clock dataEvento={data!} />
            </div>
          </div>
          <div className="detail">
            <span>inscrições</span>
            <span>{valor}</span>
          </div>
        </div>
      </div>
    </CardStyled>
  );
};
