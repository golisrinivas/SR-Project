import {Component} from "react";

import "./index.css"

import {BiSolidPhoneCall} from "react-icons/bi";

import {AiFillHome, AiOutlineRight} from "react-icons/ai";

import {MdEmail} from "react-icons/md";




class Footer extends Component{
    render(){
        return(
            <div>
            <h1 className="main-heading">Reach Out To Us</h1>
            <hr className="hr-line"/>
            <div className="main-container">
                <div className="container">
                    <h1 className="heading">HEAD OFFICE</h1>
                    <div className="icon-content">
                        <p><BiSolidPhoneCall/></p>
                        <p className="content">+91 7386272829</p>
                    </div>
                    <div className="icon-content">
                        <p><AiFillHome/></p>
                        <p className="content">G3, Sri Sai Residency, RajivGandhi Nagar, Hyderabad, Telangana-500019</p>
                    </div>
                    <div className="icon-content">
                        <p><MdEmail/></p>
                        <p className="content">mail@sudharsanresources.in</p>
                    </div>
                </div>
                <div className="container">
                    <h1 className="heading">OUR SERVICES</h1>
                    <div className="icon-content">
                        <AiOutlineRight/>
                        <p className="content">Permanent Staffing</p>
                    </div>
                    <div className="icon-content">
                        <AiOutlineRight/>
                        <p className="content">Contract Staffing</p>
                    </div>
                    <div className="icon-content">
                        <AiOutlineRight/>
                        <p className="content">Payroll Management</p>
                    </div>
                    <div className="icon-content">
                        <AiOutlineRight/>
                        <p className="content">Training And Placement</p>
                    </div>
                </div>
            </div>
            </div>
            
        )
    }
}

export default Footer;