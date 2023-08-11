
import React from "react";

const date= new Date();
let hour = date.getHours();
let wish="";
function WelcText(){
    
    if(hour<12){
        wish="Morning.";
    }
    else if(hour>=12 && hour<16){
        wish="Afternoon.";
    }
    else{
        wish="Evening."
    }
 
    return(<div >
        <h1 className="txt">{"Good " + wish}</h1>
        <h3 className="txt" style={{fontSize:'4vw',fontWeight:'lighter'}}>User@something.com</h3>
           
    </div>);
}
export default WelcText;