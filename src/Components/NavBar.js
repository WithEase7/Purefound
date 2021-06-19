import React from "react";
import {Link} from 'react-router-dom'
import "./NavBar.css";


function NavBar() {
  

  // const toggleLinks = document.getElementsByClassName('toggle-btn')[0]
  // const menuLinks = document.getElementsByClassName('menu')[0]

  // toggleLinks.addEventListener('click', ()=> {
  //   menuLinks.classList.toggle('active')
  // })
 
  return (
    <div className="parent-nav">
    <div className="nav">
      <div className="nav-title">Purefound</div>
      <Link href="#" className = "toggle-btn" >
        <span className = "bar"></span>
        <span className = "bar"></span>
        <span className = "bar"></span>
      </Link>
      <div className="nav-links">
        <ul>
          <li><Link className = "link" to ="/">Home</Link></li>
          <li><Link className = "link" to ="/animal">Animal Products</Link></li>
          <li><Link className = "link" to ="/agriculture">Agricultural Products</Link></li>
          <li><Link className = "link" to ="/pure">Why Pure</Link></li>
          <li><Link className = "link" to ="/contact">Contact Us</Link></li>
        </ul>
      </div>
    </div>
    </div>
  );
}

export default NavBar;
