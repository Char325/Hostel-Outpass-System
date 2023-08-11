import React from "react";



function Navbar(props){
    
return(<div>
<nav className="navbar sticky-top navbar-expand-md" >
  <div className="container-fluid">
    <a className="navbar-brand" href="/"><b>Outpass</b></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon">
      </span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav ms-auto">
        <li className="nav-item">
          <a className="nav-link " aria-current="page" href={"/"+props.it1}>{props.it1}</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href={"/"+props.it2}>{props.it2}</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href={"/"+props.it3}>{props.it3}</a>
        </li>
        <li className="nav-item" >
          <a className="nav-link"  href={"/"+props.it4} >{props.it4}</a>
        </li>
        <li className="nav-item" >
          <a className="nav-link"  href={"/"} style={{fontWeight:"bolder"}}>{props.it5}</a>
        </li>
        
      </ul>
    </div>
  </div>
</nav>
</div>)};
export default Navbar;