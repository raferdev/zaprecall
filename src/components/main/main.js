import { deck } from "../../data/deck"
import { Render } from "./render"
export default function Main(props) {
    const {redActv} = props
    return ( 
        <main>
            {
            deck.map((deck,index) => <Render deck={deck}index={index} redActv={redActv}/>)
            }
        </main>
    )};