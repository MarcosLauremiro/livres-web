import { CardStyle } from "./style"

interface ICard {
    title?: string
    img?: string
}

export const Card = ({title, img}:ICard) => {
    return(
        <CardStyle img={img!} >
            <div className="img">

            </div>
            <div className="content">
                <h1>{title}</h1>
            </div>
        </CardStyle>
    )
}