import {Component} from 'react'

import "./index.css"

class Register extends Component{
    render(){
        return(
            <div className='register-main-container'>
                <a className='container1' href = "https://forms.gle/2vkDuhhVCZ5WMT2Z8" target='_blank' rel='noreferrer'>
                    <img src='https://i.postimg.cc/7Zq4fz9b/corporate-business-handshake-partners.jpg' alt = "Register a vacancy" className='register-image'/>
                    <h1 className='register-heading'>Register a Vacancy</h1>
                    <p className='register-content'>Sudharsan Resources works together with industry and top tier talent to find the right recruitment solutions for your business.</p>                    
                </a>
                <a className='container2' href='https://forms.gle/x5i4wHWgyS2wdkFp6' target= "_blank" rel='noreferrer'>
                    <img src='https://i.postimg.cc/mrJ2zDhq/corporate-businessmen-working-tablet-office.jpg' alt='Upload your CV' className='register-image'/>
                    <h1 className='register-heading'>Upload your CV</h1>
                    <p className='register-content'>Register with us to receive job alerts or contact a Sudharsan Resources career consultant to help you take the next step</p>
                </a>
                <a className='container3' href='https://forms.gle/wq4CK7rBwmJWD1Xa7' target='_blank' rel='noreferrer'>
                    <img src='https://i.postimg.cc/zf5yD3bk/medium-shot-woman-working-laptop.jpg' alt = 'Work with us' className='register-image'/>
                    <h1 className='register-heading'>Work with us</h1>
                    <p className='register-content'>Develop a career as a consultant in a global recruitment company</p>
                </a>
                

            </div>
        )
    }
}

export default Register;