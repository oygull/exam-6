import './App.css';
import React,{ useState} from 'react';
import Navbar from './Components/Navbar';
import { Routes, Route} from "react-router-dom";
import List from './Components/List';
import Home from './Components/Home';
import Notifications from './Components/Notifications';
import Stories from './Components/Stories';
import Write from './Components/Write';
import Aside from './Components/Aside';
import Post from './Components/Post';
import ReadingList from './Components/ReadingList';
import SignUp from './Components/SignUp';
import data from './Data';
import userImg from './images/user-img.jpeg'

function App() {

  const[postArr,setPostArr]=useState(data);
  const[postObj, setPostObj]=useState({ 
  user: 'Oygul Ibrokhimova',
  data: 'today',
  desc: null,
  accImg:{userImg},
  title: null})


  return (
    <div className="App">
      <Navbar/>
      <Aside/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="signup" element={<SignUp/>} />
        <Route path="list" element={<List />} />
        <Route path="notifications" element={<Notifications />} />
        <Route path="stories" element={<Stories 
            postArr={postArr}
        />} />
        <Route path="write" element={<Write 
          postArr={postArr}
          setPostArr={setPostArr}
          postObj={postObj}
          setPostObj={setPostObj}
        />} />
        <Route path="/post/:id" element={<Post />} />
        <Route path="readinglist" element={<ReadingList />} />
  
      </Routes>

    </div>
  );
}

export default App;
