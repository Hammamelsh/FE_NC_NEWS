import axios from "axios"

const ncNewsApi = axios.create({
    baseURL: "https://be-news.herokuapp.com/api/"
})


export const fetchAllArticles =(topic, sort_by, order)=>{
    return ncNewsApi.get("/articles", {params: {topic, sort_by,order}}).then((res)=>{
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

export const getComments = (article_id) =>{
    return ncNewsApi.get(`articles/${article_id}/comments`).then((res)=> {
        return res.data
    })
}

export const postComments = (article_id, body) =>{
    console.log(body)
    return ncNewsApi.post(`articles/${article_id}/comments`, body).then((res)=> {
        return res.data
    })
}

export const getUsers =()=>{
    return ncNewsApi.get(`/users`).then((res)=>{
        return res.data;
    })
}