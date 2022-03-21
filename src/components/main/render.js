import turn from "../../assets/images/turn.svg";
import check from "../../assets/images/checkmark-circle.svg"
import help  from "../../assets/images/help-circle.svg"
import close from "../../assets/images/close-circle.svg"
import play from "../../assets/images/play-outline.svg"
import React from "react";
export function Render(props) {
    const {deck,index, redActv} = props
    const [actvQuest, setActvQuest] = React.useState(-1);
    const [answare, setAnsware] = React.useState(false);
    const [rate, setRate] = React.useState("");
    const [icon, setIcon] = React.useState(0)
    const images = [{class:"play",src:play,alt:"play"},
    {class:"close",src:close,alt:"close"},
    {class:"help",src:help,alt:"help"},
    {class:"turn",src:turn,alt:"turn"},
    {class:"check",src:check,alt:"check"}]
    const conteudo = answare? deck.answare : deck.quest;
  return actvQuest === index ? (
    <article
      key={index}
      className="quest"
      onClick={() => setAnsware(() => (answare ? false : true))}
    >
      <h2>{conteudo}</h2>
      {answare ? (
        <div className="answare-rate" onClick={() => setActvQuest(-1)}>
          <div className="dont-remember" onClick={() => setRate("red")-setIcon(1)-redActv(0)}>
            <h2>Não lembrei</h2>
          </div>
          <div className="dont-know" onClick={() => setRate("orange")-setIcon(2)-redActv(1)}>
            <h2>Quase não lembrei</h2>
          </div>
          <div className="remember" onClick={() => setRate("green")-setIcon(4)-redActv(2)}>
            <h2>Zap!</h2>
          </div>
        </div>
      ) : (
        <img className={images[3].class} src={images[3].src} alt={images[3].alt} />
      )}
    </article>
  ) : (
    <article
      key={index}
      className="initial-quest"
      onClick={() => setActvQuest(index) - setAnsware(false)}
    >
      <h2 className={rate}>Pergunta {index + 1}</h2>
      <img className={images[icon].class} src={images[icon].src} alt={images[icon].alt} />
    </article>
  );
}
