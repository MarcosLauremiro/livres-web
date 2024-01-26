import { FaInstagram } from "react-icons/fa"
import { InstaStyle } from "./style"
import { MdVerified } from "react-icons/md"

export const Insta = () => {
    return(
        <InstaStyle>
            <FaInstagram size={25} />
            <a href="">Juventude Livres</a>
            <MdVerified size={20} color="#3742FA"/>
        </InstaStyle>
    )
}