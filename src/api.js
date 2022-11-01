import axios from "axios"

const marketApi = axios.create({
    baseURL: "https://be-news.herokuapp.com/api/"
})


export const fetchAllArticles =()=>{
    return marketApi.get("/articles").then((res)=>{
        return res.data
    })
}

export const fetchAllTopics =()=>{
    return marketApi.get("/topics").then((res)=>{
        return res.data
    })
}