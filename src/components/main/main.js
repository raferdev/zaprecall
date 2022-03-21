import { deck } from "../../data/deck"
import { Render } from "./render"
export default function Main(props) {
    const {redActv,setPoints} = props;
    return ( 
        <main>
            {
            deck.sort().map((deck,index) => <Render key={index} deck={deck}index={index} redActv={redActv} setPoints={setPoints}/>)
            }
        </main>
    )};