import React, { Component } from 'react';
import { Breadcrumb, BreadcrumbItem, Card, CardBody, CardHeader, Media } from 'reactstrap';
import { Link } from 'react-router-dom';
import human from '../humanIcon.png'

function RenderContent({ image, name, designation, description }) {
    return (
        <div className="col-md-12 mt-5">
            <Media>
                <Media left middle>
                    <Media object src={image} alt={name} />
                </Media>
                <Media body className="ml-5">
                    <Media heading>{name}</Media>
                    <p>{designation}</p>
                    <p>{description}</p>
                </Media>
            </Media>
        </div>
    )
}

function About() {
    return (
        <div className="container">
            <div className="row">
                <Breadcrumb>
                    <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                    <BreadcrumbItem active>About Us</BreadcrumbItem>
                </Breadcrumb>
                <div className="col-12">
                    <h3>About Us</h3>
                    <hr />
                </div>
            </div>
            <div className="row row-content">
                <div className="col-12 col-md-5">
                    <h2>Our History</h2>
                    <p>Started in 2016, Appzera quickly established itself as a icon par excellence in Bangalore. With its unique ideas and deterministic commitment, it enjoys patronage from clients.</p>
                </div>
                <div className="col-12 col-md-5">
                    <Card>
                        <CardHeader className="bg-primary text-white">Facts At a Glance</CardHeader>
                        <CardBody>
                            <dl className="row p-1">
                                <dt className="col-6">Started</dt>
                                <dd className="col-6">May 2nd 2018</dd>
                                <dt className="col-6">Specialisation</dt>
                                <dd className="col-6">Mobile and Web applications</dd>
                                <dt className="col-6">Projects Completed</dt>
                                <dd className="col-6">250</dd>
                                <dt className="col-6">Employees</dt>
                                <dd className="col-6">x</dd>
                            </dl>
                        </CardBody>
                    </Card>
                </div>
            </div>
            <br></br>
            <div className="row row-content">
                <div className="col-12">
                    <h2>Co Founders</h2>
                </div>
                <br></br>
                <br></br>

                <div className="col-12">
                    <Card>
                        <RenderContent image={human} name="Sridhar" designation="Co-founder" description="..." />
                    </Card>
                </div>

                <div className="col-12">
                    <Card>
                        <RenderContent image={human} name="Shalini" designation="Co-founder" description="..." />
                    </Card>            
                </div>
            </div>

        </div>
    )
}

export default About;