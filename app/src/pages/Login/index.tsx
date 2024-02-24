import { IoMdClose } from "react-icons/io";
import { LoginStyle } from "./style";
import emoj from "./../../assets/emoj.svg";

export const Login = () => {
  return (
    <LoginStyle>
      <div className="login-box">
        <div className="side-left">
          Bem Vindo de Volta
          <img src={emoj} alt="emoj" />
          <p>
            Não é cadastrado? <span>Registre-se agora</span>
          </p>
        </div>
        <div className="side-right">
          <div>
            <IoMdClose />
            <h1>Log in</h1>
          </div>
          <form>
            <input 
            type="email" 
            name="email" 
            id="" 
            placeholder="Seu Email" />
            <input
              type="password"
              name="password"
              id=""
              placeholder="Sua Senha"
            />
            <input 
            type="select" 
            name="" 
            id="" />
            <div>
              <button>Fazer Log in</button>
              <span>Esqueci minha senha</span>
            </div>
          </form>

          <span>Ou faça o login com</span>
          <div>
            <button>Google</button>
            <button>Facebook</button>
            <button>Twitter</button>
          </div>
        </div>
      </div>
    </LoginStyle>
  );
};
