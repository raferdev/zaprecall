import ReactDom from "react-dom";
const appHtml = document.getElementById("root")
function App() {
    return (
        <div id="app">
            <main>
                <div className="content">
                <img className="logo" src="./svg/logo.svg" alt="logo-light"></img>
                <h1>ZapRecall</h1>
                <div className="initial-buttom"><p>Iniciar Recall!</p></div>
                </div>
            </main>
        </div>
    )
}
ReactDom.render(<App />, appHtml)