import { useState } from "react"
import { Form, useParams } from "react-router-dom"
import { postComments } from "../api"

const PostComment =({setComments})=>{

    const[postedComment, setPostedComment] = useState({})
    const[commentBody, setCommentBody]= useState("")
    const [newComment,setNewComment] = useState({body: "", author: "grumpy19"})

    const{article_id} = useParams()
   
    
    // postComments(article_id, newComment).then((data)=>{


    // })

    const handleChange = (event) => {
        setNewComment((currNewComment)=>{
            const copiedComment = {...currNewComment}
            copiedComment.body = event.target.value
            return copiedComment
        });
      };


   const handleSubmit = (event)=>{
    event.preventDefault()
    
    postComments(article_id, newComment).then((addedComment)=>{
        console.log(addedComment)
        setComments((currComments)=>{
            return [addedComment.comments, ...currComments]
        })
    })
    

   }
   return (
    <div>
<form onSubmit={handleSubmit}>
    <textarea
    type="text"
    name="body"
    id="newComment"
    placeholder="New comment ..."
    value={newComment.body}
    onChange={handleChange}
    required>

    </textarea>
    <button type="submit">Add a comment</button>

</form>
    </div>
   )
}


export default PostComment
