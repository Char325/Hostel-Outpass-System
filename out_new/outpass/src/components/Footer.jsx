import React from "react";
function Footer(){
    const date= new Date();
        let year= date.getFullYear();
    return(<div className="foot">

        <footer >
        
                <ul >
                <div  style={{textDecoration:'underline',fontSize:'large',color:'skyblue'}}>Visit us:</div>
                    <li><a href="https://www.snuchennai.edu.in/" >Website: www.snuchennai.edu.in</a></li>
                    <li><p>Address:</p>
                        <p> Shiv Nadar University Chennai,</p>
                        <p>Rajiv Gandhi Salai (OMR),</p>
                        <p>Kalavakkam – 603 110,</p>
                        <p>Chengalpattu (Dt), </p>
                        <p>Tamil Nadu, India.</p></li>
                </ul>
                <ul >
                <div  style={{textDecoration:'underline',fontSize:'large',color:'skyblue'}}>Contact us:</div>
                    <li>Phone No: +12345678</li>
                    <li>Email: snuhostel@snuchennai.edu.in</li>
                <div  style={{textDecoration:'underline',fontSize:'large',color:'skyblue',paddingTop:50}}>Help Desk:</div>
                <li>Phone No: +12345678</li>
                <li>Email: snuhostel@snuchennai.edu.in</li>

                </ul>
                
                
            </footer>
            <div style={{textAlign:'center',padding:30,backgroundColor:'#074698',color:'skyblue',backgroundImage:'URL(https://images.pexels.com/photos/5412/water-blue-ocean.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)'}}>
                Copyright © {year}
                </div>
    </div>);
}
export default Footer;
