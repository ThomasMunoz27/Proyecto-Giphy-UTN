import { CardGift } from "../Ui/CardGift/CardGift"
import { useAppSelector } from "../../redux/hooks/redux"




export const GifList = ({}) => {
    
    const gif = useAppSelector((state) => state.gif.gif)
  
  
  
    return (
    <div style={{
        display:"grid",
        gridTemplateColumns:"repeat(3, 1fr)",
        gap:"2vh"
    }}>
        {gif.map((el)=>(
                <CardGift gif={el} key={el.id}/>
            ))}
    </div>
  )
}
