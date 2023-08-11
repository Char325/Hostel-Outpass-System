import React from "react";
import Navbar from "./Navbar";
import Table from "./Table";

function Approved(){
    return(<div>
           <Navbar it1="Home" it2="View" it3="Denied" it4="Return" it5="Logout"/>
           <h1 style={{textAlign:"center",padding:30,color:"darkblue"}}><svg xmlns="http://www.w3.org/2000/svg" style={{padding:10,width:50,height:50}} fill="currentColor" class="bi bi-check2-circle" viewBox="0 0 16 16">
  <path d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0z"/>
  <path d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l7-7z"/>
</svg>Approved</h1>
           <Table link="a" msg="approved !"/>
    </div>);
}

export default Approved;