import { FC } from "react"
import { Card } from "react-bootstrap"

interface IGif {
    id:string,
    urlGif:string,
    title:string
  }

interface IPropsCardGif {
    gif: IGif
}


export const CardGift: FC<IPropsCardGif> = ({gif}) => {
  return (
    
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={gif.urlGif} />
      <Card.Body>
        <Card.Title>{gif.title}</Card.Title>
      </Card.Body>
    </Card>

  )
}
