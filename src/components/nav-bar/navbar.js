import { useNavigate } from "react-router-dom"
// import './navbarstyle.css'
import './navbarstyle.css'

const NavBar=()=>{

    const navigate = useNavigate();

    return(

        <>
         <nav className="navbar">
           <img src="images/icon.svg" alt="icon" id="icon" /> <span id="instalogo">Instaclone</span>

           <img src="images/camera.png" alt="camera"  onClick={()=>navigate('/createpost')} className='camera'/>

         </nav>
        </>
    )
}

export default NavBar