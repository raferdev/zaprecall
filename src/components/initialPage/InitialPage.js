import logoImg from "../../assets/images/logo.svg";
import React from "react"
export default function InitialPage() {
  const [visible, setVisible] = React.useState(true);
  return ( visible? (
  <div className="content">
    <img className="logo" src={logoImg} alt="logo-light"></img>
    <h1>ZapRecall</h1>
    <div className="initial-buttom" onClick={() => setVisible(false)}>
    <p>Iniciar Recall!</p>
    </div>
  </div>
  ): <></> 
  )
}
