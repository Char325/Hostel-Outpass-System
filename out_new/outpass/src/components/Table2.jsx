import React, { useEffect, useState } from "react";
import axios from "axios";
import Modals from "./Modals";
import Modals2 from "./Modals2";
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';


function Table2(props){
    
  async function Clickedg(out_no){
    try{
      await axios.put("http://localhost:5000/a/"+out_no);
      
    }
    catch(err){
      console.log("oh no"+err);
    }
  
  }
  
    async function Clickeda(){
      try{
        await axios.put("http://localhost:5000/app");
        
      }
      catch(err){
        console.log("oh no"+err);
      }
    
    }
    const ops={
      onHidden:()=>window.location.reload(true),
      onClose:()=>window.location.reload(true),
      position: toast.POSITION.TOP_CENTER,
      autoClose:2000,
      theme:"colored"

    }
    
    const notify1 = (c) => {toast.success("Outpass Number: "+c+" is Approved.",ops)};
    const note= () => {toast.success("All outpasses are approved.",ops)};
    
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
      Object.keys(Out).length===0?<div className="msg"><h4>No outpasses pending!</h4> </div>:
        <div>
        
        <form className="d-flex">
<button type="button" className="apbtn btn btn-outline-success" style={{fontWeight:"bold"}} onClick={()=>{Clickeda();note();}}>Approve all</button></form>
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
      <th scope="col" className="None"></th>
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
      <td>
      <div>
      <button class="btn btn-outline-info" style={{border:"none", color:"darkblue"}}  type="submit" data-bs-toggle="modal" data-bs-target="#exampleModal2" onClick={()=>setData(c.out_no)}><svg className="Wrong"   xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="Red" class="bi bi-x-circle" viewBox="0 0 16 16" >
  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
  <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
</svg></button>
<ToastContainer />
      </div>
      
      
      </td>
      <td>
      <div>
      <button class="btn btn-outline-info" style={{border:"none", color:"darkblue"}} onClick={()=>{Clickedg(c.out_no);notify1(c.out_no);}} type="submit">
      <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="green" class="bi bi-check-circle" viewBox="0 0 16 16">
  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
  <path d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z"/>
</svg></button>
<ToastContainer />
</div>
      </td>

    
    </tr>
        
  
        
    ))
    }
    </tbody>
        </table>
        <Modals outno={Data} bt="v"/>
        <Modals2 outno={Data} />

        </div>
    <footer style={{opacity:0}}></footer>

    </div>);




}
export default Table2;
