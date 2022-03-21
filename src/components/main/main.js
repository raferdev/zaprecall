import { deck } from "../../data/deck"
import React from "react"
export default function Main() {
    const [actvQuest, setActvQuest] = React.useState(-1)
    return ( 
        <main>
            {
            deck.map((deck,index) => {
             return actvQuest === index? (
                <article key={index}><h2 className="">{deck.pergunta}</h2><ion-icon name="play-outline"></ion-icon></article>
            ) : ( 
                <article key={index} onClick={()=>setActvQuest(index)}><h2 className="">Pergunta {index}</h2><ion-icon name="play-outline"></ion-icon></article>
                )
            })}
        </main>
    )};

    /* <article onClick=""><h2 class="">Pergunta 1</h2><ion-icon name="play-outline"></ion-icon></article>
            <article><h2 class="">Pergunta 2</h2><ion-icon name="play-outline"></ion-icon></article>
            <article><h2 class="">Pergunta 3</h2><ion-icon name="play-outline"></ion-icon></article>
            <article><h2 class="">Pergunta 4</h2><ion-icon name="play-outline"></ion-icon></article> */