import React from "react";
function BackImg(){
    const date=new Date()
    let day= date.getDate();
    let month=date.getMonth()+1;
    let year=date.getFullYear();
    let days=date.getDay();
    const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

    return(
        <div>
         <img className="images" src="https://images.pexels.com/photos/5412/water-blue-ocean.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"  height="550px" width="100%" alt="Welcome"/>
         <h1 className="cal"> <svg xmlns="http://www.w3.org/2000/svg" style={{paddingRight:"10px", width:40 ,height:24}} fill="currentColor" className="bi bi-calendar" viewBox="0 0 16 16">
  <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z"/>
</svg>{day+"/"+month+"/"+ year+", " +weekday[days]}</h1>
        </div>
    );
    
}
export default BackImg ;