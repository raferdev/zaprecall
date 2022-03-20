import logoImg from "../../assets/images/logo.svg"
export default function Header() {
    return (
        <header>
        <img src={logoImg} alt="logo ligth"/>
        <h1>ZapRecall</h1>
        </header>
    )
}