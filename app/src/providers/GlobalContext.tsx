import { createContext, useState } from "react";

interface IGlobalContextProps{
    children: React.ReactNode
}

interface IGlobalContext{
    loginModal: boolean
    setLoginModal: React.Dispatch<React.SetStateAction<boolean>>
}

export const GlobalContext = createContext({} as IGlobalContext);

export const GlobalProvider = ({children}: IGlobalContextProps) => {
    // ...variaveis
    const [loginModal, setLoginModal] = useState(false)

    return(
        <GlobalContext.Provider value={{loginModal, setLoginModal}}>
            {children}
        </GlobalContext.Provider>
    )
}