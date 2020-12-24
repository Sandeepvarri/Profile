import React, { Component } from 'react';
import { Navbar, Nav, NavItem, NavbarBrand, Collapse, NavbarToggler } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isNavOpen: false
        }
        this.toggleNav = this.toggleNav.bind(this);
    }

    toggleNav() {
        this.setState({ isNavOpen: !this.state.isNavOpen });
    }

    render() {
        return (
            <React.Fragment>
                <Navbar dark expand='md'>
                    <div className='container'>
                        <NavbarToggler onClick={this.toggleNav} />
                        <NavbarBrand className='mr-5' href='/'>
                            <img src='/PoornaVarriProfileImage.jpg' className='rounded-circle border' height='40' width='40' alt='Restorante con Fusion' />
                        </NavbarBrand>
                        <Collapse isOpen={this.state.isNavOpen} navbar >
                            <Nav navbar>
                                <NavItem>
                                    <NavLink className='nav-link mr-5' to='/home'>
                                        <h6><FontAwesomeIcon icon={['fas', 'home']} /> Home </h6>
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className='nav-link mr-5' to='/resume'>
                                        <h6> <FontAwesomeIcon icon={['fas', 'file']} /> Resume </h6>
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className='nav-link mr-5' to='/contact'>
                                        <h6> <FontAwesomeIcon icon={['fas', 'address-card']} /> Contact </h6>
                                    </NavLink>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </div>
                </Navbar>
            </React.Fragment>
        )
    }
}

export default Header;