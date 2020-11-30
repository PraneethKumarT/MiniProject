import React from 'react';
import { Card, CardImg, CardTitle, CardText, CardBody, CardSubtitle, Col, Row, Container } from 'reactstrap';
import weblogo from "../Webapp.jpg"

function RenderCard({ image, title, description }) {
    return (
        <Col>
         <Card sm="6">
            <CardBody>
                <CardImg top width="25%" src={image} />
                <CardTitle>{title}</CardTitle>
                <CardText>{description}</CardText>
            </CardBody>
        </Card>
        </Col>

    )
}


function Home() {
    return(
        <div className = "container">
            <Row>
            <Col>
                <RenderCard image={weblogo}
                    title="WebApplication"
                    description="We make WebApplications!" />
            </Col>
            <Col>
                <RenderCard image={weblogo}
                    title="WebApplication"
                    description="We make WebApplications!" />
            </Col>
        </Row>


        </div>
        
    )
}

export default Home;