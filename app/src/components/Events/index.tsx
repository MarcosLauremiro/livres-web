import { Card } from "./Card";
import { EventStyle } from "./style";
import confetence from "../../assets/louvor.jpg"

export const Events = () => {
  return (
    <EventStyle>
      <div className="header">
        <h3>Eventos</h3>
        <h1>Eventos</h1>
        <p>Nosso calendario de eventos deste ano</p>
      </div>
      <div className="card-event">
        <Card
          data={new Date(2024, 3, 1)}
          name="Conferencia"
          title="Conferencia Livres"
          valor="40R$"
          img={confetence}
        />
        <Card
          data={new Date(2024, 9, 1)}
          name="Conferencia"
          title="Conferencia New"
          valor="40R$"
          img={confetence}
        />
      </div>
      <p>
        Lorem, ipsum doque cum qui laborum <a href="">sint</a>.
      </p>
    </EventStyle>
  );
};
