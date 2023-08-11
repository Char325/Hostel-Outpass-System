import React, { useEffect, useState } from "react";
import axios from "axios";
import Modals from "./Modals";



function Table(props){
const [Out,setOutpass]=useState([]);
    const [Data,setData]=useState([]);
    useEffect(()=>{
        
    const ShowOutpass=async ()=>{
        try{
            const res=await axios.get("http://localhost:5000/table/"+props.link );
            
            setOutpass(res.data);
        }
        catch(err){
            console.log("oh no!"+err);
        }

    };
    ShowOutpass(props.link)},[props]
    );
    return(
      Object.keys(Out).length===0?<div className="msg"><h4>{"No outpasses "+props.msg}</h4> </div>:
        <div>
        
        <div className="tab table-responsive">
        
    <table  >
    
  <thead>
    <tr >
      <th scope="col">Outpass No.</th>
      <th scope="col">Name</th>
      <th scope="col">Going Date</th>
      <th scope="col">Return Date</th>
      <th scope="col">Reason</th>
      
      <th scope="col">Status</th>
      <th scope="col" className="None"></th>

    </tr>
  </thead>
  <tbody className="table-group-divider">
    {Out.map(c=>(
      
        <tr>
      <th scope="row">{c.out_no}</th>
      <td style={{padding:50,paddingRight:180}}>

      <div className="InCard">
      <p ><img src={c.image} alt="Student" className="InImg"/></p>
      <p>{c.name}</p>
      <p style={{fontSize:13, color:"#039BE5", fontWeight:"lighter"}}>{c.regno}</p>
      <span className={c.type==="Emergency"?"badge":""}>{c.type==="Emergency"?"Emergency":""}</span>
      </div>
      </td>
      <td >{c.go_date.substring(0,10)}</td>
      <td>{c.return_date.substring(0,10)}</td>
      <td>{c.reason}</td>
      
      <td style={{paddingRight:40}}>
      <button className="btn btn-outline-info " type="button" style={{borderColor:"darkblue", color:"darkblue"}} data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={()=>setData(c.out_no)}>View 
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-right" viewBox="0 0 16 16">
  <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
</svg></button>      
</td>

    
    </tr>
        
  
        
    ))
    }
    </tbody>
        </table>
        <Modals outno={Data} bt="v"/>
        </div>
    <footer style={{opacity:0}}></footer>

    </div>);




}
export default Table;