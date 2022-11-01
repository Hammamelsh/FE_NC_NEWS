import Header from "./components/Header"
import Navbar from "./components/Navbar"
import ArticleList from "./components/ArticleList"
import About from "./components/About"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';


function App() {
  return (
    <BrowserRouter>  
    <div className="App">
      <Header />
      <Navbar />
      <Routes>
        <Route path = "/" element = {<About />}/>
        <Route path = "/about" element = {<About />}/>
        <Route path = "/articles" element = {<ArticleList />}/>
        
      </Routes>

     
    </div>
    </BrowserRouter>
  
  );
}

export default App;
