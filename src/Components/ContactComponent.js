import React, {Component} from 'react';
import {Breadcrumb, BreadcrumbItem ,Button, Form, FormGroup, Label, Input, FormText, Col, Row } from 'reactstrap';
import { Link } from 'react-router-dom';

class Contact extends Component{
    render(){
        return(
            <div className = "container">
            <div className="row">
                <Breadcrumb>
                    <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                    <BreadcrumbItem active>About Us</BreadcrumbItem>
                </Breadcrumb>
                <div className="col-12">
                    <h3>Contact Us</h3>
                    <hr />
                </div>
            </div>
                <Form>
                    <Row className="form-group">
                        <Label for="username" md={2}>Name</Label>
                        <Col md={10}>
                            <FormGroup>
                                <Input type="username" name="username" id="username" placeholder="Enter your name" />
                            </FormGroup>
                        </Col>
                    </Row>

                    <Row className="form-group">
                        <Label for="email" md={2}>Email</Label>
                        <Col md={10}>
                        <FormGroup>
                            <Input type="email" name="email" id="email" placeholder="Enter your email" />
                        </FormGroup>
                        </Col>
                    </Row>

                    <Row className="form-group">
                        <Label for="timeSelection" md = {2}>Book your slot</Label>
                        <Col md={10}>
                            <FormGroup>
                                <Input type="select" name="timeSelection" id="timeSelection" placeholder = "Book your time slot">
                                    <option>10:00 am - 12:00 am</option>
                                    <option>1:30 pm - 2:30 pm</option>
                                    <option>2:30 pm - 3:30 pm</option>
                                    <option>3:30 pm - 4:30 pm</option>
                                    <option>4:30 pm - 5:30 pm</option>
                                </Input>
                            </FormGroup>
                        </Col>
                    </Row>

                    <Row className="form-group">
                        <Label md={2}>Services desired</Label>
                        <FormGroup>
                            <FormGroup check>
                                <Label check>
                                    <Col md={2}>
                                        <Input type="radio" name="radio1" />{'     '}
                                    </Col>
                                    <Col >
                                        Mobile Application
                                    </Col>
                                </Label>
                            </FormGroup>
                            <FormGroup check>
                                <Label check>
                                    <Col md={1}>
                                        <Input type="radio" name="radio1" />{'     '}
                                    </Col>
                                    <Col >
                                        Mobile Application
                                    </Col>
                                </Label>
                            </FormGroup>

                            <FormGroup check>
                                <Label check>
                                    <Col md={2}>
                                        <Input type="radio" name="radio1" />{'     '}
                                    </Col>
                                    <Col >
                                        Mobile and Web Application
                                    </Col>
                                </Label>
                            </FormGroup>
                        </FormGroup>
                    </Row>

                    <Row className="form-group">
                        <Col md={2}>
                            <div className="form-check">
                                <Label check>
                                    May we contact you?
                                </Label>
                            </div>
                        </Col>
                        <Col md={1}>
                            <Input type="checkbox" />{'   '}
                        </Col>
                    </Row>


                    

                </Form>
                <Button md={{size:10, offset: 2}}>Submit</Button>
            </div>
        )

    }
}


export default Contact;