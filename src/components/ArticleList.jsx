import { useEffect, useState } from "react"
import { fetchAllArticles } from "../api"
import {Link} from "react-router-dom"
import SortOrderBy from "./SortOrderBy"

const ArticleList =({topic})=>{
    const[sortBy, setSortBy] =useState("created_at")
    const[orderBy, setOrderBy] =useState("DESC")
    const[articles, setArticles] = useState([])



    useEffect(()=>{
        fetchAllArticles(topic, sortBy, orderBy).then((data)=>{
            setArticles(data.articles)
        })
    }, [topic, sortBy, orderBy])
  
    return (
        <div className="Articles">
            <SortOrderBy setSortBy={setSortBy} setOrderBy ={setOrderBy}/>
            <ul>
                {articles.map((article)=>{
                return(<li key={article.article_id} className="articleCard"><Link to = {`/articles/article/${article.article_id}`}><h3>{article.title}</h3></Link>
                <h4>Posted by {article.author}</h4>
                <h4>Topic: {article.topic}</h4>
                </li>
                )

            })}</ul>
        </div>
    
    
    )

}
export default ArticleList