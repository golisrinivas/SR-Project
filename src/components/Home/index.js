import {Component} from 'react';

import Register from '../Register';

import {BiSolidHandRight} from "react-icons/bi"

import "./index.css"

class Home extends Component{
    render(){
        return(
            <>
            <div className='home-main-container'>
                <img src = "https://i.postimg.cc/XqH7wSrt/sr-image-1.jpg" alt = "banner" className='banner-image'/>   
                <h1 className='home-heading'>Welcome to Sudharsan Resources Pvt. Ltd.</h1>
                <hr className='hr-line'/>
                <p className='description'>
                    At Sudharsan Resources, we excel in HR, IT, Finance, and Payroll Outsourcing, and we are constantly adapting to the fast-changing global landscape. As a dedicated organization, we strive to set and maintain new industry standards in Human Resources, Consulting, and Business Process Outsourcing. Our solutions are designed to create sustainable financial impact, optimizing resource utilization while minimizing ownership costs.
                </p>
                <p className='description'>
                Our clientele spans diverse industries such as IT, ITES Telecom, FMCG, Food and Beverages, and Manufacturing, catering to a broad spectrum of client requirements. Our success lies in empowering top management to outperform their competition, achieving substantial financial growth through:
                </p>
                <ul>
                    <li className='list-items'>
                        <BiSolidHandRight/>
                        <p className='list-item-content'>Gaining an in-depth understanding of client requirements from their perspective.</p>
                    </li>
                    <li className='list-items'>
                        <BiSolidHandRight/>
                        <p className='list-item-content'>Fine-tuning products and solutions with meticulous attention to detail.</p>
                    </li>
                    <li className='list-items'>
                        <BiSolidHandRight/>
                        <p className='list-item-content'>Cultivating an environment of accountability, ownership, and effective problem-solving.</p>
                    </li>
                    <li className='list-items'>
                        <BiSolidHandRight/>
                        <p className='list-item-content'>Achieving cost optimization through strategic outsourcing and process improvement.</p>
                    </li>
                </ul>
                <p className='description'>Choose Sudharsan Resources for unmatched expertise and transformative solutions that drive your business forward. Together, we'll conquer challenges and embrace opportunities in this dynamic business landscape.</p>
                
            </div>
            <Register/>
            </>
        )
    }
}

export default Home;