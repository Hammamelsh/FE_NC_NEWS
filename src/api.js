import axios from "axios"

const ncNewsApi = axios.create({
    baseURL: "https://be-news.herokuapp.com/api/"
})


export const fetchAllArticles =(topic)=>{
    return ncNewsApi.get("/articles", {params: {topic}}).then((res)=>{
        return res.data
    })
}

export const fetchAllTopics =()=>{
    return ncNewsApi.get("/topics").then((res)=>{
        return res.data
    })
}
