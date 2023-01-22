import React from 'react';
import { useNavigate } from 'react-router-dom';


export default function LandingPage() {

     const navigate = useNavigate()


  return (

     <>
        <div className='landing'>
        <img src='images/insta.webp' alt='instalogo' height={200} className='instalogo'/>        
        <div>
        <button onClick={()=>navigate('/posts')} className='loginbtn'>
             Login
         </button>
        </div>
        </div>
     </>
  );
}
