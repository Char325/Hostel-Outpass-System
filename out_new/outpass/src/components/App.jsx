import React from "react";
import { BrowserRouter,Route,Routes } from "react-router-dom";
import Home from "./Home";
import View from "./View";
import Denied from "./Denied";
import Approved from "./Approved";
import Pending from "./Pending";
import Alert from "./Alert";
function App(){
    return(<div>
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/View" element={<View/>} />
            <Route path="/Denied" element={<Denied/>} />
            <Route path="/Home" element={<Home/>} />
            <Route path="/Approved" element={<Approved/>} />
            <Route path="/Pending" element={<Pending/>} />
            <Route path="/Alert" element={<Alert/>} />

            

        </Routes>
    </BrowserRouter>

    


    </div>);
    
}
export default App;