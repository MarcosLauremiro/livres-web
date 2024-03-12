import { createContext, useState } from "react";

interface IGlobalContextProps{
    children: React.ReactNode
}

interface IGlobalContext{
    login: boolean
    setLogin: React.Dispatch<React.SetStateAction<boolean>>
}

export const GlobalContext = createContext({} as IGlobalContext);

export const GlobalProvider = ({children}: IGlobalContextProps) => {
    // ...variaveis
    const [login, setLogin] = useState(false)

    return(
        <GlobalContext.Provider value={{login, setLogin}}>
            {children}
        </GlobalContext.Provider>
    )
}