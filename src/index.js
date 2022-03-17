import ReactDom from "react-dom";
import React from "react";
const appHtml = document.getElementById("root");
export default function App() {
   const [visible, setVisible] = React.useState(true);
    return (
        <div id="app">
            {visible? (
                  <main>
                  <div className="content">
                      <img className="logo" src="./svg/logo.svg" alt="logo-light"></img>
                      <h1>ZapRecall</h1>
                      <div className="initial-buttom" onClick={() => setVisible(false)}><p>Iniciar Recall!</p></div>
                  </div>
              </main>
            ): <></>}
        </div>
    )
}
ReactDom.render(<App />, appHtml)