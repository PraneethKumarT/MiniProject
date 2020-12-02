import React from 'react';
import { Card, CardImg, CardTitle, CardText, CardBody, CardSubtitle, Col, Row, Container, Button } from 'reactstrap';
import weblogo from "../Webapp.jpg"
import MobileLogo from '../MobileApp.jpg'
import Header from './Header';
import{NavLink} from 'react-router-dom';


function RenderCard({ image, title, description }) {
    return (
        <Col>
         <Card sm="6">
            <CardBody>
            <CardTitle>{title}</CardTitle>
                <CardImg top width="25%" src={image} />
                <CardText>{description}</CardText>
            </CardBody>
        </Card>
        </Col>

    )
}

function AlertMessage(name){
    alert(`Clicked on, ${name}`);
}


function Home() {
    return(
        <div className = "container">
            <Row>
                <Col>
                    <NavLink className="nav-link" to="/webapplication" onClick = {() => AlertMessage("Web App Card")}>
                        <RenderCard image={weblogo}
                            title="WebApplication"
                            description="We make WebApplications!" />
                    </NavLink>
                </Col>
                <Col>
                    <NavLink className="nav-link" to="/mobileapplication" onClick = {() => AlertMessage("Mobile App Card")}>
                        <RenderCard image={MobileLogo}
                            title="Mobile Application"
                            description="We make Mobile Applications!" />
                    </NavLink>
                </Col>
            </Row>


        </div>
        
    )
}

export default Home;