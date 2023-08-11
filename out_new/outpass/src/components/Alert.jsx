import React from "react";
import axios from "axios";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
  
  
  function Alert(){
    function notify(){
      return(
        <div id="alert">
          {toast.warn("Wow so easy!")}
          <ToastContainer />
        </div>
      );
    }
     const war=()=>{toast.warn("Wow so easy!");window.location.reload(true);}
    async function Clicked(){
      //notify=()=>toast("Wow so easy!");
      try{
        
        /*notify();
        <ToastContainer />*/
        //window.location.reload(true);
        
        await axios.put("http://localhost:5000/d/9");
        
      }
      catch(err){
        console.log("oh no"+err);
      }
    
    }
    

    return (
      <div>
        <button className="btn btn-outline-info" style={{borderColor:"darkblue", color:"darkblue"}} data-bs-target="#alert" onClick={()=>{war();Clicked();}} type="submit"><svg className="Wrong"   xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="Red" class="bi bi-x-circle" viewBox="0 0 16 16" >
  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
  <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
</svg></button>
        <ToastContainer />
      </div>
    );
  }

export default Alert;