/* eslint-disable no-undef */
import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import {Sections} from './sections'
class Header extends Component{
    hei = window.innerHeight;
    state = {
        he:{
            height :  this.hei,
        }
        
    }
    Handle_menu=(e)=>{
        let show=document.getElementById("menu")
         show.classList.toggle("openmenu");
    }
    
    
    
    render(){
        return(
        <div>
        <div    className="header">
            <nav className="navbar fixed-top-nav">
              <a href='/' className="navbar-brand"><img src="../assets/imgs/logo/logo.PNG" alt="logo"/></a>
              <ul className="navbar">
                    <li className="nav-item">
                    <form className="form-inline">
                        <input className="form-control" type="search" placeholder="اكتب شيئا للبحث عنه " aria-label="Search"/>
                        <button className="btn  " type="submit"><img src="../assets/imgs/icons/search.PNG" alt="search"/></button>
                     </form>
                    </li>
                    
              </ul>
              <span className="nav-item menu-icon">
                  <Link to="/" className="btn" onClick={this.Handle_menu} >
                  <img src="../assets/imgs/icons/logo-2.png" alt="menu" />
                  </Link>
             </span>
            </nav>
            
        </div>
        <div id="menu" className="menu " style={this.state.he}>
                <ul>
                    {Sections.map(
                        (sections)=>{
                            return(
                                <li  key={sections.id}>
                                <Link to={sections.name} onClick={this.Handle_menu}>{sections.ar}</Link>
                                </li>
                            )
                        }
                    )}
                </ul>
                
                <button className="btn" onClick={this.Handle_menu} title="عودة"><img src="assets/imgs/icons/back.png" alt="back"/></button>
                <img src="../assets/imgs/icons/sun.png" alt="sun" className="moving-imgs"/>
                <img src="../assets/imgs/icons/earth.png" alt="earth" className="moving-imgs"/>
                <img src="../assets/imgs/background/cloud13.png" alt="cloud" className="moving-imgs"/>
                <img src="../assets/imgs/icons/palace.png" alt="palace" className="moving-imgs"/>
                <img src="../assets/imgs/icons/fairy.png" alt="fairy" className="moving-imgs"/>
                <img src="../assets/imgs/background/bookgirl.png" alt="ballon" className="moving-imgs"/>
                <img src="../assets/imgs/background/mom.png" alt="reading" className="moving-imgs"/>
                <img src="../assets/imgs/background/boyandgirl.png" alt="reading" className="moving-imgs"/>
                <img src="../assets/imgs/icons/smballon.png" alt="reading" className="moving-imgs"/>
            </div>
        </div>
        );
    }
}
export default Header;