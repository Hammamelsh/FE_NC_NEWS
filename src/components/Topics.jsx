import { useEffect } from "react"
import { fetchAllTopics } from "../api"

const Topics =()=>{

    useEffect(()=>{
        fetchAllTopics().then((data)=>{
            console.log(data)
        })
    })
}