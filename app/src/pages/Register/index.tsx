import { Input } from "../../components/input";
import { RegisterStyle } from "./style";
import { useNavigate } from "react-router-dom";

export const Register = () => {
  const navigate = useNavigate();
  return (
    <RegisterStyle>
       <form>
        <div className="form-container">
          <h1>Log in</h1>
          <Input placeholder="Nome Completo" type="text"></Input>
          <Input placeholder="Data de Nascimento" type="date"></Input>
          <Input placeholder="Email" type="email"></Input>
          <Input placeholder="Telefone" type="tel"></Input>
          <Input placeholder="Senha" type="password"></Input>
          <Input placeholder="Repita a Senha" type="password"></Input>
          <div className="conect">
            <input type="checkbox" placeholder="manter conectado"></input> 
            <p>Manter conectado</p>
          </div>
          <div className="buttons">
            <button className="register">Registre-se</button>
            <button className="login">Log in</button>
          </div>
        </div>
      </form>
    </RegisterStyle>
  );
};
