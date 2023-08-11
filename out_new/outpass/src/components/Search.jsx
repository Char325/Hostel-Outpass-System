import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
function Search(props){
   
   
    return(<div>
       <form class="d-flex search" role="search" action={"http://localhost:5000/"+ props.link} method="POST">
        <input class="form-control me-2 s" type="search" placeholder="Search" name="search" aria-label="Search"></input>
        <button class="btn btn-outline-info" style={{borderColor:"darkblue", color:"darkblue"}} type="submit">Search</button>
      </form>
      </div>
      );
    
}
export default Search;