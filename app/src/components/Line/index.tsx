import { LineStyle } from "./style"

interface ILine {
    name?: string
}

export const Line = ({name}:ILine) => {
    return(
        <LineStyle>
            <p>{name}</p>
            <div></div>
        </LineStyle>
    )
}