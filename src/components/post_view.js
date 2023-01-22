import React, { useEffect, useState } from 'react';
import './post_view.css' ;
import NavBar from './nav-bar/navbar';

// import { useNavigate } from 'react-router-dom';



const PostView = () => {

    const [data, setdata] = useState(null)
    // const navigate = useNavigate()

    useEffect(() => {

        async function datafetch() {

         await  fetch('https://instaclone-f6dq.onrender.com/posts', { method: 'GET' })
                .then(response => response.json())
                .then(postdata => setdata(postdata))
                .catch(error => console.error(error));
        }
        datafetch()
    }, []);
    
    console.log("line 16", data?.posts);
    if (data === null) {

        return (
            <div>
                <h1>Loading.....</h1>
            </div>
        )
    }
    
    return (
        
        <>
            <NavBar/>

            {
                data.posts.map((postdta) => {

                    return (

                        <div key={postdta._id}>
                            <div className='container'>

                                <span className='name'>
                                    {postdta.name}
                                </span>
                                <span>
                                    <img src="images/more_icon.svg" alt="icon" id="more-icon" />

                                </span>


                                <div className='location'> {postdta.location} </div>
                             <img src={`https://instaclone-f6dq.onrender.com/image/${postdta?.postimage}`} alt="postimage" className='postimage'  />
                             <p> </p>
                             <div>
                                <img src="images/heart.png" alt="likeicon" className='like'  />
                                <img src="images/share.png" alt="shareicon" className='share'  />
                                <span className='date'> {postdta.createdAt.split("T")[0]} </span>
                                <div className='likeno'>{postdta.likes} likes </div>
                                <div className='desc'> {postdta.description}</div>
                             </div>


                            </div>
                             

                        </div>
                    )
                })
            }

        </>
    )

}


export default PostView