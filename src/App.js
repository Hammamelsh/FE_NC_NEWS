import Header from "./components/Header"
import Navbar from "./components/Navbar"
import ArticleList from "./components/ArticleList"
import About from "./components/About"
import Topics from "./components/Topics"
import ArticlesByTopic from "./components/ArticlesByTopic"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import SingleArticle from "./components/SingleArticle"


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
        <Route path = "/topics" element = {<Topics />}/>
        <Route path="/articles/:topic" element= {<ArticlesByTopic />} />
        <Route path="/articles/article/:article_id" element= {<SingleArticle />} />
      </Routes>

     
    </div>
    </BrowserRouter>
  
  );
}

export default App;
