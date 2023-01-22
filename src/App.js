
import LandingPage from './components/landing_page';
import PostView from './components/post_view';
import CreatePost from './components/createPost';
import {BrowserRouter,Route,Routes} from 'react-router-dom'
function App() {
  return (
    <div >
      <BrowserRouter>
      
       <Routes>

        <Route path='/' element={<LandingPage/>}/>
        <Route path='/posts' element={<PostView/>} />
        <Route path='/createpost' element={<CreatePost/>} />

       </Routes>
      
      </BrowserRouter>
     
    </div>
  );
}

export default App;
