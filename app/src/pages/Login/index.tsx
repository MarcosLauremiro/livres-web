import { LoginStyle } from "./style";
import { useContext } from "react";
import { Input } from "../../components/input";
import { useForm } from "react-hook-form";
import { LoginFormValue, loginShema } from "./LoginShema";
import { zodResolver } from "@hookform/resolvers/zod";
import { AuthContext } from "../../providers/AuthContext";

export const Login = () => {
  const { singIn } = useContext(AuthContext);

  const { register, handleSubmit } = useForm<LoginFormValue>({
    resolver: zodResolver(loginShema),
  });

  const submit = (formData: LoginFormValue) => {
    console.log("foi");
    singIn(formData);
  };

  return (
    <LoginStyle>
      <form onSubmit={handleSubmit(submit)}>
        <div className="form-container">
          <h1>Log in</h1>
          <Input {...register("email")} placeholder="Email"></Input>
          <Input {...register("password")} placeholder="Senha"></Input>
          <div className="conect">
            <input type="checkbox" placeholder="manter conectado"></input> 
            <p>Manter conectado</p>
          </div>
          <div className="button-login">
            <button className="login">Fazer Log in</button>
            <button className="register">Registre-se</button>
          </div>
        </div>
      </form>
    </LoginStyle>
  );
};
