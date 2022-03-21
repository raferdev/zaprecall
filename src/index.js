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
    const [activity,setActivity] = React.useState([]);
    function redActv(type) {
        setActivity(act => [...act,type])
    }
    return (
    <div id="app">
        <InitialPage />
        <Header />
        <Main redActv={redActv}/>
        <Footer activity={activity} />
    </div>
    )
}
ReactDom.render(<App />, appHtml);