import { HeaderStyle } from "./style";

export const Header = () => {
  return (
    <HeaderStyle>
      <h1>Juventude livres</h1>
      <div className="rol">
        <div>
          <p>
            — Nossos cultos — Todos os <span>Sábados</span> — 19:00 — Auditório
            da <span>primeira igreja batista</span> de imperatriz — Nossos
            cultos — Todos os <span>Sábados</span> — 19:00 — Auditório da{" "}
            <span>primeira igreja batista</span> de imperatriz — 
          </p>
        </div>
      </div>
    </HeaderStyle>
  );
};
