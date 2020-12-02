import React, {Component} from 'react';
import {Progress, Card, CardTitle, CardBody, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';



class Client extends Component{
    render(){
        return(
            <div className = "container">

                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                        <BreadcrumbItem active>Client</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>Progress of your Project</h3>
                        <hr />
                    </div>
                </div>
            
                <Card>
                    <CardBody>
                        <CardTitle>Project Id : 126547825</CardTitle>
                        <Progress multi>
                            <Progress bar color="success"  value="15">Requirement Specification</Progress>
                        </Progress>
                    </CardBody>
                </Card>
                <br></br>

              


                <Card>
                    <CardBody>
                        <CardTitle>Project Id : 15515515</CardTitle>
                        <Progress multi>
                            <Progress bar color="success" value="15">Requirement Specification</Progress>
                            <Progress bar color="success"  value="35">Development</Progress>
                        </Progress>
                    </CardBody>
                </Card>
                <br></br>
                <Card>
                    <CardBody>
                        <CardTitle>Project Id : 12239756</CardTitle>
                        <Progress multi>
                            <Progress bar color="success" value="15">Requirement Specification</Progress>
                            <Progress bar color="success"  value="35">Development</Progress>
                            <Progress bar color="success" value="25">Validation</Progress>
                        </Progress>
                    </CardBody>
                </Card>
                <br></br>

               

            </div>
        )
    }
}

export default Client;