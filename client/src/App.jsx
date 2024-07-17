
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginFinal from '../components/LoginFinal.jsx';
import SignUp from "../components/SignUp.jsx";
import OneProfile from "../components/OneProfile.jsx";
import MediaCard from "../components/MediaCard.jsx";


function App() {



  return (
    <div>   
      

  <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<LoginFinal />} />
          <Route path="Home" element={< MediaCard/>} />
          <Route path="SignUp" element={< SignUp/>} />
          <Route path="myProfile" element={< OneProfile/>} />
          
        </Route>
      </Routes>
  </BrowserRouter>
  


  </div>

  )
}

export default App;
