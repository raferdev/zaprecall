import { deck } from "../../data/deck"
import React from "react"
import turn from "../../assets/images/turn.svg"
export default function Main() {
    const [actvQuest, setActvQuest] = React.useState(-1);
    const [answare, setAnsware] = React.useState(false);
    return ( 
        <main>
            {
            deck.map((deck,index) => {
            const  conteudo = answare? deck.answare:deck.quest
             return actvQuest === index? (
                <article key={index} className="quest" onClick={() => setAnsware(()=>answare?false:true)}><h2>{conteudo}</h2><img className="turn" src={turn} alt="turn"/></article>
           ) : ( 
                <article key={index} className="initial-quest" onClick={()=>setActvQuest(index)}><h2>Pergunta {index + 1}</h2><ion-icon name="play-outline"></ion-icon></article>
                )
            })}
        </main>
    )};

    /* <article onClick=""><h2 class="">Pergunta 1</h2><ion-icon name="play-outline"></ion-icon></article>
            <article><h2 class="">Pergunta 2</h2><ion-icon name="play-outline"></ion-icon></article>
            <article><h2 class="">Pergunta 3</h2><ion-icon name="play-outline"></ion-icon></article>
            <article><h2 class="">Pergunta 4</h2><ion-icon name="play-outline"></ion-icon></article> */