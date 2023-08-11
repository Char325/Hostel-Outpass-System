import React, { useState } from "react";
import axios from "axios";
function Modals2(props){
    async function Clicked(out_no,data){
        try{
          await axios.put("http://localhost:5000/r/"+out_no,data);
          
        }
        catch(err){
          console.log("oh no"+err);
        }
      
      }
    const [Data,setData]=useState([]);
 
    return(
        
        <div>
            <div className="modal fade" id="exampleModal2" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header" style={{backgroundColor:"red",color:"white"}}>
        <h1 className="modal-title fs-5" id="exampleModalLabel">Reason for Outpass Denial</h1>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
      <form >
        <h3 style={{fontSize:"20px"}}>Reason:</h3>
        <input placeholder="Type here..." style={{height:140,width:300}}  onInput={setData} name="info"></input>
        
      </form>
      </div>
     
      
      <div className="modal-footer">
      <button type="button" class="btn btn-primary"  onClick={()=>{Clicked(props.outno, Data.target.value);window.location.reload(true)}}>Save changes</button>
        <button type="submit" className="btn btn-secondary modbtn" data-bs-dismiss="modal">Close</button>
      </div>  
      </div>
      </div>
    </div>
  </div>

        
    )
}
export default Modals2