import React, {Component} from 'react';
import logo from '../assets/images/traffic-cone-orange.png';

class Navbar extends Component{
    
    render(){
        return(
            <nav className="navbar navbar-dark bg-dark">  
                <a className="navbar-brand" href="/">
                    <img src={logo} width="30" height="30" alt="" loading="lazy"/>
                </a> 
               <a className="navbar-brand" href="/">
                    Sistema de Administración de la malla vial
                </a>

                <form className="form-inline my-2 my-lg-0">
                    <input className="form-control mr-sm-2" type="search" placeholder="Search"/>
                    <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                </form>        
            </nav>
        )
    }
};

export default Navbar;