
import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import FriendDetail from './components/FriendDetail/FriendDetail';
import Friends from './components/Friends/Friends';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import NotFound from './components/NotFound/NotFound';
import PostDetail from './components/PostDetail/PostDetail';
import Posts from './components/Posts/Posts';

function App() {
  return (
    <div className="App">
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/friends' element={<Friends/>}></Route>
      <Route path='/about' element={<About/>}/>
      <Route path='/friend/:friendId' element={<FriendDetail/>}></Route>
      <Route path='/posts' element = {<Posts/>}>
        <Route path=':postId' element={<PostDetail/>}></Route>
      </Route>
      <Route path='*' element={<NotFound/>}/>
    </Routes>
    </div>
  );
}

export default App;
