import { deck } from "../../data/deck";
import check from "../../assets/images/checkmark-circle.svg";
import help from "../../assets/images/help-circle.svg";
import close from "../../assets/images/close-circle.svg";
import happy from "../../assets/images/party.svg";
import sad from "../../assets/images/sad.svg";
export default function Footer(props) {
  const { activity, points } = props;
  const images = [
    { class: "close", src: close, alt: "close" },
    { class: "help", src: help, alt: "help" },
    { class: "check", src: check, alt: "check" },
  ];
  const advertise = [
    {
      src: happy,
      alt: "happy",
      class: "happy",
      title: "Parabéns!",
      msg: "Você não esqueceu de nenhum flashcard!",
    },
    {
      src: sad,
      alt: "sad",
      class: "sad",
      title: "Putz...",
      msg: "Ainda faltam alguns...Mas não desanime!",
    },
  ];
  function refreshPage() {
    window.scroll(0, 0)
    window.location.reload(false);
  }
  return (
    <footer className={activity.length === deck.length ? "final-footer":"footer"}>
      {activity.length === deck.length ? (
        <div className="final-game">
          <header className="adv-title">
            <img class={advertise[points].class} src={advertise[points].src} alt={advertise[points].alt}/>
            <h2>{advertise[points].title}</h2>
          </header>
          <p>{advertise[points].msg}</p>
        </div>
      ) : (
        <></>
      )}
      <h2>
        {activity.length}/{deck.length} CONCLUÍDOS
      </h2>
      <div>
        {activity.map((img) => (
          <img
            class={images[img].class}
            src={images[img].src}
            alt={images[img].alt}
          />
        ))}
      </div>
      {activity.length === deck.length ? (
        <div className="button" onClick={()=>refreshPage()}>
          <h2>REINICIAR RECALL</h2>
        </div>
      ) : (
        <></>
      )}
    </footer>
  );
}
