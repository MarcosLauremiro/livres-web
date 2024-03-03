import { IoMdClose } from "react-icons/io";
import { LoginStyle } from "./style";
import emoj from "./../../assets/emoj.svg";
import { useContext } from "react";
import { GlobalContext } from "../../providers/GlobalContext";
import { Input } from "../../components/input";
import { useForm } from "react-hook-form";
import { LoginFormValue, loginShema } from "./LoginShema";
import { zodResolver } from "@hookform/resolvers/zod";
import { AuthContext } from "../../providers/AuthContext";

export const Login = () => {
  const { setLoginModal } = useContext(GlobalContext);
  const { singIn } = useContext(AuthContext)

  const {
    register,
    handleSubmit,
  } = useForm<LoginFormValue>({
    resolver: zodResolver(loginShema),
  });

  const submit = (formData: LoginFormValue) => {
    console.log("foi")
    singIn(formData);
  };

  return (
    <LoginStyle>
      <div className="login-box">
        <div className="side-left">
          <h1>Bem Vindo</h1>
          <div className="img">
            <img src={emoj} alt="emoj" />
          </div>
          <p>
            Não é cadastrado? <span>Registre-se agora</span>
          </p>
        </div>
        <div className="side-right">
          <div className="header_container">
            <h1>Log in</h1>
            <button
              onClick={(e) => {
                e.preventDefault, setLoginModal(false);
              }}
            >
              <IoMdClose />
            </button>
          </div>
          <form onSubmit={handleSubmit(submit)}>
            <Input {...register("email")} placeholder="Email"></Input>
            <Input {...register("password")} placeholder="Senha"></Input>
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
