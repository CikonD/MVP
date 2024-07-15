
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginFinal from '../components/LoginFinal.jsx';
import MenuAppBar from '../components/MenuAppBar.jsx';
import SignUp from "../components/SignUp.jsx";


function App() {



  return (
    <div>   
      

  <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<LoginFinal />} />
          <Route path="Home" element={< MenuAppBar/>} />
          <Route path="SignUp" element={< SignUp/>} />
        </Route>
      </Routes>
  </BrowserRouter>
  


  </div>

  )
}

export default App;
