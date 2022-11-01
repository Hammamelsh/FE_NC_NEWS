import { useEffect, useState } from "react"
import { fetchAllArticles } from "../api"
import {Link} from "react-router-dom"

const ArticleList =()=>{
    const[articles, setArticles] = useState([])


    useEffect(()=>{
        fetchAllArticles().then((data)=>{
            setArticles(data.articles)
        })
    }, [])
    
    return (
        <div className="Articles">
            <ul>
                {articles.map((article)=>{
                return(<li key={article.article_id} className="articleCard"><Link to = {`/articles/${article.article_id}`}><h3>{article.title}</h3></Link>
                <h4>Posted by {article.author}</h4>
                <h4>Topic: {article.topic}</h4>
                </li>
                )

            })}</ul>
        </div>
    
    
    )

}
export default ArticleList