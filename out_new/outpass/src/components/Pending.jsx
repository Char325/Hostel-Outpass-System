import React from "react";
import Navbar from "./Navbar";
import Table2 from "./Table2";
function Pending(){
    return(
        <div>
            <Navbar it1="Home" it2="View" it3="Denied" it4="Returns" it5="Logout"/>
            <h1 style={{textAlign:"center",padding:30,color:"darkblue"}}><svg xmlns="http://www.w3.org/2000/svg" style={{padding:10,width:50,height:50}} fill="currentColor" className="bi bi-clock" viewBox="0 0 16 16">
  <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z"/>
  <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z"/>
</svg>Pending</h1>

<Table2 link="p"/>
        </div>
    )
    
}

export default Pending;