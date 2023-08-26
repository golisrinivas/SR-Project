import {Component} from 'react';

import "./index.css"

import {FaBars} from "react-icons/fa"

class Navbar1 extends Component{
    render(){
        const myFunction = () => {
    
    }
        return(
            <div class="topnav" id="myTopnav">
                <a href="#home" class="active">Home</a>
                <a href="#news">News</a>
                <a href="#contact">Contact</a>
                <div class="dropdown">
                    <button class="dropbtn">Dropdown
                    <i class="fa fa-caret-down"></i>
                    </button>
                    <div class="dropdown-content">
                    <a href="#">Link 1</a>
                    <a href="#">Link 2</a>
                    <a href="#">Link 3</a>
                    </div>
                </div>
                <a href="#about" >About</a>
                <FaBars onClick={myFunction}/>
            </div>

        )
    }
}

export default Navbar1;