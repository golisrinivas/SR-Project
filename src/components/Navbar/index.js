import {Component} from 'react'

import { Outlet, Link } from 'react-router-dom';

import "./index.css"

import {FaBars} from "react-icons/fa"

import {MdCancel} from "react-icons/md";

import {AiFillCaretDown} from "react-icons/ai"



class Navbar extends Component{
    state = {
        toggleIcon: false
    }

    onToggleIcon = () => {
        this.setState(prevState => ({
            toggleIcon: !prevState.toggleIcon
        }))
    }

    render(){
        const {toggleIcon} = this.state
        return(
            <>
                <nav className='nav-con'>
                    <h1 className='logo'>SR</h1>
                    <ul className='nav-item-con'>
                        <li>
                            <Link to = "/" className='nav-link'>Home</Link>
                        </li>
                        <li>
                            <Link to = "/about" className='nav-link'>About Us</Link>
                        </li>
                        <li className='dropdown'>
                            <div className='services-icon'>
                                <Link className='nav-link'>Services</Link>
                                <AiFillCaretDown className='down-icon'/>
                            </div>
                            <ul className='dropdown-content'>
                                <li><Link className='dropdown-item'>Permanent Staffing</Link></li>
                                <li><Link className='dropdown-item'>Contract Staffing</Link></li>
                                <li><Link className='dropdown-item'>Payroll Management</Link></li>
                                <li><Link className='dropdown-item'>Training And Placement</Link></li>
                            </ul>
                        </li>
                        <li>
                            <Link to = "/contact" className='nav-link'>Contact Us</Link>
                        </li>
                    </ul>
                    <button className='nav-icon' type = "button" onClick={this.onToggleIcon}>{toggleIcon ? <MdCancel/> : <FaBars/>}</button>
                    
                </nav>
                <nav className={toggleIcon ? "nav-mobile-con" : "nav-mobile-con-close"}>
                    <ul className='nav-mobile-list-con'>
                        <li><Link to = "/" className='nav-link-mobile'>Home</Link></li>
                        <li><Link to = "/about" className='nav-link-mobile'>About Us</Link></li>
                        <li className='dropdown-mobile'>
                            <div>
                                <Link className='nav-link-mobile'>Services</Link>
                                <AiFillCaretDown className='down-icon'/>
                            </div>
                            <ul className='dropdown-content-mobile'>
                                <li><Link className='dropdown-item-mobile'>Permanent Staffing</Link></li>
                                <li><Link className='dropdown-item-mobile'>Contract Staffing</Link></li>
                                <li><Link className='dropdown-item-mobile'>Payroll Management</Link></li>
                                <li><Link className='dropdown-item-mobile'>Training And Placement</Link></li>
                            </ul>
                        </li>
                        <li><Link to = "/contact"className='nav-link-mobile' >Contact</Link></li>
                    </ul>
                </nav>
                <Outlet/>
            </>
        )
    }
}

export default Navbar;