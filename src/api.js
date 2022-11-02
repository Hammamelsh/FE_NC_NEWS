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

export const fetchArticleById = (article_id)=>{

    return ncNewsApi.get(`articles/${article_id}`).then((res)=> {
        return res.data
    })
}

export const incrementArticleById =(article_id) =>{
    return ncNewsApi.patch(`articles/${article_id}`,{inc_votes : 1}).then((res)=> {
        return res.data
    })

}

export const DecrementArticleById =(article_id) =>{
    return ncNewsApi.patch(`articles/${article_id}`,{inc_votes : -1}).then((res)=> {
        return res.data
    })

}