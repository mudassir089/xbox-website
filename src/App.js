import React,{useState} from "react";
import Home from "./pages/home";
import Globalstyles from "./globalstyles";
import './styles'
import Navbar from "./components/nav";
import Consolespage from "./pages/consoles";
import Controllerspage from "./pages/controllers";
import {Switch,Route,useLocation} from 'react-router-dom'
import consolesdata from "./components/consolesdata";
import Controllerdata from "./components/controllerdata";
import {AnimatePresence} from 'framer-motion';
import Consoledetails from "./pages/consoledetails";
import Consolesstate from "./components/consolesextradata";
import Controllerextradata from "./components/controllerextradata";
import Controllerdetails from "./pages/controllerdetails";



function App() {

  //states
   const [consoles,setconsoles] = useState(consolesdata())
   const location = useLocation()
   const [controller,setcontroller] = useState(Controllerdata())
   const [consoledetail,setconsoledetail] = useState(Consolesstate)
   const [controllerdetail,setcontrollerdetail] = useState(Controllerextradata)




  return (
    <div className="App">
      <Globalstyles/>
      <Navbar />
      <AnimatePresence exitBeforeEnter>
      <Switch location={location} key={location.pathname}>
       <Route path='/' exact>
       <Home />
      </Route>
      <Route path='/consoles' exact>
       <Consolespage consoles={consoles}  consoledetail={consoledetail} setconsoledetail={setconsoledetail}/>
      </Route>
      <Route path="/consoles/:id">
        <Consoledetails consoledetail={consoledetail} setconsoledetail={setconsoledetail}/>
      </Route>
      <Route path='/controllers' exact>
       <Controllerspage controller={controller} />
      </Route>
      <Route path="/controllers/:id">
        <Controllerdetails controllerdetail={controllerdetail} setcontrollerdetail={setcontrollerdetail}/>
        </Route>
      </Switch>
      </AnimatePresence>

    </div>
  );
}

export default App;
