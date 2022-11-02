import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { fetchArticleById } from "../api"

const SingleArticle = () =>{
    const [articleCard, setArticleCard] =useState({})
    const[isLoading, setIsLoading] = useState(true)
    const{article_id} = useParams()

    useEffect(()=>{
        setIsLoading(true)
        fetchArticleById(article_id).then(({article})=>{
            setArticleCard(article)
             setIsLoading(false) 
        })
    }, [article_id])
    console.log(articleCard.created_at)
    
    const splitDate =(string)=>{
        
       let newDate = string.split("T")[0];
    
       return newDate
    }
    

    return (
        <div>{isLoading ? <p> ...loading </p> : <section className="article">
         <h3>{articleCard.title}</h3>
        <h4>Topic: {articleCard.topic}</h4>
        <p>{articleCard.body}</p>
        <h4>Posted by {articleCard.author}</h4>
        <p> Date : {splitDate(articleCard.created_at)}</p>

        </section>}</div>
        
        
       
    )
}
export default SingleArticle