import React, { useEffect, useState } from "react";
import axios from "axios";
function Modals(props){
  const [Out,setOutpass]=useState([]);
        useEffect(()=>{
            
        const ShowOutpass=async (outno)=>{
            try{
                const res=await axios.get("http://localhost:5000/table/"+outno );
                
                setOutpass(res.data);
            }
            catch(err){
                console.log("oh no!"+err);
            }
    
        };
        ShowOutpass(props.outno)},[props]
        );
      
    return(
        
        <div>
            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h1 className="modal-title fs-5" id="exampleModalLabel">Outpass Details</h1>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
      {Out.map(c=>(
        <div className="ModCard">
      <p ><img src={c.image} alt="Student" className="InImg"/></p>
      <h2><p style={{paddingLeft:85}}>{c.name}</p></h2>
      <p className="lower" style={{paddingLeft:85}}>{c.hostel_no+", "+c.room_no}</p>
      <span className={c.type==="Emergency"?"badge":""}>{c.type==="Emergency"?"Emergency":""}</span>
      <hr></hr>
      <p>Reason: {c.reason}</p>
      <p>Going Date: {c.go_date.substring(0,10)}</p>
      <p>Return Date: {c.return_date.substring(0,10)}</p>
      <br></br>
      <p className="lower">{c.email}</p>
      <p className="lower">{c.branch + ", "+c.year +" year"}</p>
      <p className="lower">{c.regno}</p>
      <div className="Stat" style={{backgroundColor:c.status==="Approved"?"#14E04F":(c.status==="Denied"?"red":"darkgray"),fontSize:20}}>
      <p  > {c.status}</p>
      </div>
          
      

      </div>
      ))}
        
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary modbtn" data-bs-dismiss="modal">Close</button>
        
      </div>
    </div>
  </div>
</div>
        </div>
    )
}
export default Modals