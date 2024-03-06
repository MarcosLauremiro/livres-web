import { createContext, useContext } from "react";
import { LoginFormValue } from "../pages/Login/LoginShema";
import { api } from "../service/api";
import { toast } from "react-toastify";
import { GlobalContext } from "./GlobalContext";

interface IAuthContextProps{
    children: React.ReactNode
}

interface IAuthContext{
    singIn: (data: LoginFormValue) => void;
}

export const AuthContext = createContext({} as IAuthContext);

export const AuthProvider = ({children}: IAuthContextProps) => {

    const { setLoginModal } = useContext(GlobalContext);

    const singIn = async (data: LoginFormValue) => {
        try{
            const response = await api.post("/login", data);
            const {token} = response.data

            api.defaults.headers.common.Authorization = `Bearer ${token}`

            console.log("sucesso")

            localStorage.setItem('userEmail', data.email)
            localStorage.setItem("token", token);

            toast.success("Login realizado com sucesso", {
                position: "top-right",
                autoClose: 1000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
              });
              setTimeout(() => {
                setLoginModal(false)
              }, 500)
        }catch(error){
            toast.error("Não foi possível realizar o login", {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
              });
              console.log(error);
        }
    }

    return(
        <AuthContext.Provider value={{singIn}}>
            {children}
        </AuthContext.Provider>
    )
}