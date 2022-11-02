import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { fetchArticleById, incrementArticleById, DecrementArticleById } from "../api"

const SingleArticle = () =>{
    const [articleCard, setArticleCard] =useState({})
    const[isLoading, setIsLoading] = useState(true)
    const[votes,setVotes] = useState(0)
    const[upVoted, setUpVoted] = useState(false)
    const[downVoted, setDownVoted] = useState(false)
    
    const{article_id} = useParams()


    
   
    const voteCount =()=>{
        incrementArticleById(article_id)
        setVotes(Number(votes+1))
    }
    const decVote = () => {

        DecrementArticleById(article_id)
        setVotes(votes - 1);
     
    }
    let handleChange = (e)=>{
        setVotes(e.target.value);
       }

    useEffect(()=>{
        setIsLoading(true)
        fetchArticleById(article_id).then(({article})=>{
            setArticleCard(article)
             setIsLoading(false) 
        })
    }, [article_id])
    console.log(articleCard.created_at)
    console.log(articleCard.votes)
    
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
        <h5>Votes: {votes+articleCard.votes}</h5>
        <button className="btn" type="button" onClick={decVote}>-</button>
    
       
        <button className="btn" type="button" onChange={handleChange} onClick={voteCount}>+</button>

        </section>}</div>
        
        
       
    )
}
export default SingleArticle