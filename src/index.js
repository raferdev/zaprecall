import ReactDom from "react-dom";
const appHtml = document.querySelector(".root")
function App() {
    return (
        <div className="app">
        <h1>HELLO WORLD!</h1>
        </div>
    )
}
ReactDom.render(<App />, appHtml)