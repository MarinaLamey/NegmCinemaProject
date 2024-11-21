
import "./App.css"
import "./index.css"
import NavBar from "./Componant/NavBar";
import Landingpage from './Componant/Landingpage';
import Movielist from "./Componant/Movielist";
import Moviedetails from "./Componant/Moviedetails";
import Footer from "./Componant/Footer";
//
import { useRef } from "react";
//
import { BrowserRouter , Routes , Route } from "react-router-dom";



function App() {
//input scroll to section movies 
const Movielistssec = useRef(null);
const Scrolltosection = (elementRef) => {
  window.scrollTo({
    top: elementRef.current.offsetTop,
    behavior:'smooth',
  })
}
  return (
    <div className=" relative App   h-screen  " >
      <div className=" " style={{height:'200px' , position:'absolute' , zIndex:'1' , width:'100%' , borderRadius:'1000px/100px' , backgroundColor:'#2c2c2c',bottom:'0px',left:'0px', transform:'' }}></div>
      <div className="  -z-10  backgroundimg">
      <NavBar Scrolltosection={Scrolltosection} Movielistssec={Movielistssec} />
      <Landingpage/>
      </div>
      <div ref={Movielistssec}>
      <BrowserRouter>
      <Routes>
        <Route  path="" element={<Movielist />}/>
        <Route path="/movie/:id" element={<Moviedetails/>} />
      </Routes>
      </BrowserRouter>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
