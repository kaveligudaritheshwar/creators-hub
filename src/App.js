
import './index.css'
import "./ecom.css"
import {useState} from "react"
import { Routes,Route } from 'react-router-dom';
import {Home,History,PlayLists,PlayList,Saved,VideoPlayer,LikedVideos,Channel} from "./pages/indexOfPages.jsx"
import {NavLink,useNavigate} from "react-router-dom"
import {SideBar} from "./components/sideBar"


function App() {

  const navigate=useNavigate()
  const [sideBarDisplay,setSideBarDisplay]=useState(false)



return (<div className="App">
    {sideBarDisplay&& <SideBar setSideBarDisplay={setSideBarDisplay}/>}

    <div className={sideBarDisplay?"App-blur":"App"}>

        <nav className="nav">
          <div className="logo-wrapper">
            <div className="burger-btn-nav" onClick={()=>{setSideBarDisplay(true)}}><i className="fas fa-bars fa-2x " ></i></div> 
            <div className="white-font nav-logo" onClick={()=>{navigate("/")}}>Creators Hub</div>
          </div>
          <div>
              <NavLink to="/user"  activeClassName="active-btn" className="btn" ><i className="fas fa-user text-sm "></i></NavLink>
          </div>
        </nav>

      
   
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/channel/:name" element={<Channel/>}/>
          <Route path="/history" element={<History/>}/>
          <Route path="/playLists" element={<PlayLists/>}/>
          <Route path="/playLists/:name" element={<PlayList/>}/>
          <Route path="/saved" element={<Saved/>}/>
          <Route path="/video/:id" element={<VideoPlayer/>}/>
          <Route path="/liked" element={<LikedVideos/>}/>
        </Routes>
    </div>

  </div>
  );
}

export default App;
