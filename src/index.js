import ReactDom from "react-dom";
import React from "react";
import InitialPage from "./components/initialPage/InitialPage";
import resetCSS from "./styles/reset.css";
import styleCSS from "./styles/style.css";
import Header from "./components/header/Header";
import Footer from "./components/footer/footer";
import Main from "./components/main/main";
const appHtml = document.getElementById("root");
export default function App() {
    return (
    <div id="app">
        <InitialPage />
        <Header />
        <Main />
        <Footer />
    </div>
    )
}
ReactDom.render(<App />, appHtml);