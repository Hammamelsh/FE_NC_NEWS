import { useEffect } from "react"
import { useState } from "react"
import { useParams } from "react-router-dom"
import { getComments } from "../api"
import PostComment from "./PostComment"

const ViewComments =()=>{
const[comments, setComments] = useState([])
const[isLoading, setIsLoading] = useState(true)

const {article_id} = useParams()

const splitDate =(string)=>{ 
    let newDate = string.split("T")[0];
 
    return newDate
 }

useEffect(()=>{
    setIsLoading(true)
    getComments(article_id).then(({comments})=>{
        setComments(comments)
        setIsLoading(false)
    })
},[article_id])

if (isLoading) return <p>Loading...</p>;

return (
   
    <div className="commentSection"> <PostComment setComments = {setComments} />
        <ul > 
            <br></br>
            <h3 className="comment-header">Comment Section:</h3>
            {comments.map((comment)=>{
                return (
                    
                    <li className="comment"
                    key={comment.comment_id}
                    >
                   <br></br>
                    
                    <h4>{comment.author} commented</h4>
                   
                    <p>{comment.body}</p>
                    <p>Date: {splitDate(comment.created_at)}</p>
                    <br></br>

                    </li>
                )
            })}
        </ul>
    </div>
)
}

export default ViewComments