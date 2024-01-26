import { CardStyle } from "./style"

interface ICard {
    title?: string
    img?: string
    content?:string
}

export const Card = ({title, img, content}:ICard) => {
    return(
        <CardStyle img={img!} >
            <div className="img">

            </div>
            <div className="content">
                <h1>{title}</h1>
                <p>{content}</p>
            </div>
        </CardStyle>
    )
}