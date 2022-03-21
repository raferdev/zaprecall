import { deck } from "../../data/deck"
import check from "../../assets/images/checkmark-circle.svg"
import help  from "../../assets/images/help-circle.svg"
import close from "../../assets/images/close-circle.svg"
export default function Footer(props) {
    const {activity} = props;
    const images = [{class:"close",src:close,alt:"close"},
    {class:"help",src:help,alt:"help"},
    {class:"check",src:check,alt:"check"}]
    return (
        <footer>
            <h2>{activity.length}/{deck.length} CONCLUÍDOS</h2>
            <div>
                {activity.map(img => (
                    <img class={images[img].class} src={images[img].src} alt={images[img].alt} /> 
                ))}
            </div>
        </footer>
    )
}