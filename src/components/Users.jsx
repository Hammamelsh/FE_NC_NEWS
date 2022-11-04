import { useEffect } from "react"
import { useState } from "react"
import { getUsers } from "../api"

const Users =()=>{
    const[users,setUsers] = useState([])

    useEffect(()=>{
        getUsers().then(({users})=>{
            setUsers(users)
        })
    },[])
    console.log(users)

    return (
        <div className="usernames">   
        <br></br>
                        <h3>All Users</h3>
        <ul > 
        {
            users.map((user)=>{
                
                return (
                    <li key={user.username}>
                        
                     
                        <br></br>
                        <h4 className="name">Name: {user.name}</h4>
                        <li>username: {user.username}
                        
                </li> 
                    <img src={user.avatar_url} alt="" /> </li>
                 
            
            
            )
        
        })
        }
        </ul>
    </div>)
    
}

export default Users