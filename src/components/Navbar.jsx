import {Link} from "react-router-dom"

const Navbar =()=>{
    return(
    <div className="Navbar">
        <ul>
       <li> <Link to ={"/about"}>About</Link></li>
        <li><Link to ={"/articles"}>Articles</Link></li>
    </ul></div>
    )
}

export default Navbar