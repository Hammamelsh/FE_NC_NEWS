import { useState } from "react"
import { useEffect } from "react"
import { fetchAllTopics } from "../api"
import { Link } from "react-router-dom"

const Topics =()=>{
    const[topics, setTopics] = useState([])

    useEffect(()=>{
        fetchAllTopics().then((data)=>{
            setTopics(data.topics)
        })
    }, [])
    

    return (
        <div className="topics">
            <ul>
                {topics.map((topic)=>{
                return(<li key={topic.slug} className="topic-card"><h3></h3><Link to = {`/articles/${topic.slug}`}><h3>{topic.slug}</h3></Link>

                <h4>...{topic.description}</h4>
                <br></br>
                </li>
                )

            })}</ul>
        </div>
    
    
    )
}

export default Topics