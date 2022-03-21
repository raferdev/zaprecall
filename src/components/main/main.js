import { deck } from "../../data/deck"
import { Render } from "./render"
export default function Main(props) {
    const {redActv,setPoints} = props
    function func(a, b) {  
        return 0.5 - Math.random();
      }  
    return ( 
        <main>
            {
            deck.sort(func).map((deck,index) => <Render key={index} deck={deck}index={index} redActv={redActv} setPoints={setPoints}/>)
            }
        </main>
    )};