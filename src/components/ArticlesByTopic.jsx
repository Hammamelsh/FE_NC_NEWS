import { useEffect } from "react"
import { useState } from "react"
import { useParams } from "react-router-dom"
import {fetchAllArticles} from "../api"
import ArticleList from "./ArticleList"


const ArticlesByTopic =()=>{

const{topic} = useParams() 

return <div>
    <h3>{topic}</h3>
    <ArticleList topic ={topic} />

</div>
}
  


export default ArticlesByTopic