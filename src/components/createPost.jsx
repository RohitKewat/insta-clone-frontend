import { useState } from "react"
import { useNavigate } from "react-router-dom";
import './creatpost.css'
import NavBar from "./nav-bar/navbar";
const CreatePost = () => {
  const navigate = useNavigate();
  const [fileimage, setfileimage] = useState();
  const [author, setauthor] = useState();
  const [location, setlocation] = useState();
  const [description, setdescription] = useState();


  const create = () => {
    //   console.log(fileimage ,author,location,description);
    const formdata = new FormData();
    formdata.append("image", fileimage);
    formdata.append("name", author);
    formdata.append("location", location);
    formdata.append("description", description);

    fetch('https://instaclone-f6dq.onrender.com/post', {
      method: 'POST',
      body: formdata
    }).then(res => res.json()).then(data => console.log(data))
    

  }
  
  return (

    <>
  <NavBar/>
      <div id="container">
        <div>
          <input type="file" onChange={(e) => setfileimage(e.target.files[0])} className='uplodedimage'/>

        </div>
        <span className="author">
          <input type="text" placeholder="Author" onChange={(e) => setauthor(e.target.value)} />
        </span>
        <span > <input type="text" placeholder="Location" onChange={(e) => setlocation(e.target.value)} /></span>
        <div > <textarea className="descp" placeholder="Description" onChange={(e) => setdescription(e.target.value)} ></textarea></div>

           
         {fileimage && author &&location &&description ?  <button onClick={create}>Post</button>  :"" }
       <div> <button onClick={() => navigate('/posts')}> Go to home</button>
       </div>
      </div>
  
    </>
  )
}

export default CreatePost