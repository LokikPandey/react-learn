import { BrowserRouter as Router,Route,Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import "./style/App.scss"
import "./style/Header.scss"
import "./style/Home.scss"
import Footer from "./components/Footer"
import Contact from "./components/Contact";
import "./style/Footer.scss"
import "./style/Contact.scss"
import Services from "./components/Services.jsx";
import "./style/Services.scss"
import "./style/media.scss"
function App() {
  return(<Router>
    <Header/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/Contact" element={<Contact/>}/>
      <Route path="/Services" element={<Services/>}></Route>
    </Routes>
    <Footer/>
  </Router>)

}

export default App
