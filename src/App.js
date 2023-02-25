
import './App.css';

import PostView from './Components/PostView';
import {
  BrowserRouter,
  Routes,
  Route,
  
} from "react-router-dom";
import Home from './Components/Home';
import NewPost from './Components/NewPost';

function App() {
  return (
  <>
  <BrowserRouter>
  <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/post-view' element={<PostView/>}/>
    <Route path='/new-post' element={<NewPost/>}/>
  </Routes>
  </BrowserRouter>
  </>
    
  );
}

export default App;
