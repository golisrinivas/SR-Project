import { Component } from "react";

import "./index.css";

class AboutUs extends Component{
    render(){
        return(
            <>
            <img src = "https://i.postimg.cc/mDRjw47X/business-people-partnership-support-team-urban-scene-concept.jpg" alt = "about" className="about-image"/>
            <h1 className="about-heading">About Us</h1>
            <hr className="hr-line"/>
            <p className="about-description">
                Sudharsan Resources is a boutique recruitment that specializes in
                matching the right talent to the right job opportunities across Pan India.
                We are a preferred Recruitment Partner as we a have the Knack of
                finding right talent for your organization.
                We work on exclusive assignments as we are a Preferred Recruitment
                Business Partner for our clients.
                Our primary activity is permanent placements and temporary staffing for
                either single, large volume or ongoing staffing requirements.
                We recruit at all levels from junior to senior and across a broad range of
                employee categories and sector.
                Headed by a strong management team and backed by skilled professionals,
                our approach is an amalgam of relationship building, meeting targets,
                providing quality service and creating tailor-made solutions
            </p>
            </>
        )
    }
}

export default AboutUs;