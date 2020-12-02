import React, {Component} from 'react';
import {Navbar, NavbarBrand,Nav, NavbarToggler, Collapse, NavItem, Jumbotron,
    Button, Modal, ModalHeader, ModalBody, Label, Form, FormGroup, Input, ButtonGroup} from 'reactstrap';
import{NavLink} from 'react-router-dom';
import './Header.css'

class Header extends Component{

    constructor(props){
        super (props);
        this.state = {
            isNavOpen : false,
            isModalOpen : false
        };
        this.toggleNav = this.toggleNav.bind(this);
        this.toggleModal = this.toggleModal.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
    }

    toggleNav(){
        this.setState(
            {
                isNavOpen : !this.state.isNavOpen
            });
    }

    toggleModal(){
        this.setState({
            isModalOpen : !this.state.isModalOpen
        });
    }

    handleLogin(event){
        this.toggleModal();
        event.preventDefault();

    }

    render(){
        return(
            <React.Fragment>

                <Navbar dark expand="md">
                    <div className = 'container'>
                    <NavbarToggler onClick = {this.toggleNav} />    
                    <Collapse isOpen = {this.state.isNavOpen} navbar>
                         <Nav navbar>
                             <NavItem>
                                <NavLink className = "nav-link" to="/home">
                                    <Button>
                                        <span color = "black" className = "fa fa-home fa-lg"></span>Home
                                    </Button>
                                </NavLink>
                             </NavItem>
                             <NavItem>
                                <NavLink className = "nav-link" to="/aboutus">
                                    <Button>
                                        <span className = "fa fa-info fa-lg"></span>aboutus
                                    </Button>
                                </NavLink>
                             </NavItem>
                             <NavItem>
                            
                                 <NavLink className = "nav-link" to="/contactus">
                                 <Button>
                                    <span className = "fa fa-address-card fa-lg"></span>Contact Us
                                    </Button>
                                </NavLink>
                             </NavItem>

                             <NavLink className = "nav-link" to="/Client">
                            <Button>Client Login</Button>
                            </NavLink>
                         </Nav>

                         <Nav className = "ml-auto" navbar>
              

                             <NavItem>
                                 <Button onClick = {this.toggleModal}>
                                     <span className = "fa fa-sign-in fa-lg"></span>Login
                                 </Button>
                             </NavItem>
                         </Nav>
                         </Collapse>
                    </div>
                </Navbar>

                <Jumbotron>
                    <div className='container'>
                        <div className='row row-header'>
                            <div className ="col-12 col-sm-6">
                                 <h1>Appzera</h1>
                            </div>
                        </div>
                    </div>
                </Jumbotron>
                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}>Login</ModalHeader>
                    <ModalBody>
                        <Form onSubmit={this.handleLogin}>
                            <FormGroup>
                                <Label htmlFor="username">Username</Label>
                                <Input type = "text" id = "username" name="username"
                                innerRef = {(input) => this.username = input}/>
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="password">Password</Label>
                                <Input type = "password" id = "password" name="password"
                                innerRef = {(input) => this.password = input}/>
                            </FormGroup>
                            <FormGroup check>
                                <Label check>
                                    <Input type = "checkbox" name="remember"
                                    innerRef = {(input) => this.remember = input}/>
                                    Remember me
                                </Label>
                            </FormGroup>
                            <NavLink className = "nav-link" to="/Admin">
                                    <Button type="submit" value="submit" color="primary">Admin Login</Button>{" "}
                            </NavLink>
                        </Form>
                    </ModalBody>
                </Modal>
            </React.Fragment>
        );
    }
}

export default Header;
