import React, { Component } from "react";
import { Jumbotron, Button, Alert } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            number: '+91 7814181366',
            linkedIn: 'www.linkedin.com/in/poorna-varri',
            gmail: 'varrisandeep123@gmail.com',
            HomeAddress: 'Vavilapadu, Vepada, Vizianagaram (535281)',
            officeAddress: 'Hyderabad, Telangana, India',
            alertVisible: false,
        }
        this.handleCopy = this.handleCopy.bind(this)
        this.handleDismiss = this.handleDismiss.bind(this)
    }

    handleCopy(value) {
        navigator.clipboard.writeText(value);
        this.setState({ alertVisible: true })
        setTimeout( this.handleDismiss , 2000);
    }

    handleDismiss() {
        this.setState({ alertVisible: false })
    }
    render() {
        return (
            <div className='container mt-3'>
                <div className='alertFixedPos'>
                    <Alert color='danger' isOpen={this.state.alertVisible} toggle={() => { this.handleDismiss() }}>
                        Copied to clipboard!
                </Alert>
                </div>
                <Jumbotron>
                    <div>
                        <h1 className='display-3 genColor' >Contact me..</h1>
                        <h5>
                            <FontAwesomeIcon icon={['fas', 'mobile-alt']} /> -
                                <span className='ml-1 mr-2'>{this.state.number}</span>
                            <Button onClick={() => this.handleCopy(this.state.number)}><FontAwesomeIcon icon={['fas', 'copy']} /></Button>
                        </h5>
                        <h5>
                            <FontAwesomeIcon icon={['fab', 'linkedin']} color='#0066cc' /> -
                            <a href='https://www.linkedin.com/in/poorna-varri' > {this.state.linkedIn} </a>
                        </h5>
                        <h5>
                            <FontAwesomeIcon icon={['fas', 'envelope']} color='#e60000' /> -
                            <span className='ml-1'>{this.state.gmail} </span>
                            <Button onClick={() => this.handleCopy(this.state.gmail)}><FontAwesomeIcon icon={['fas', 'copy']} /></Button>
                        </h5>

                        <h5>
                            <FontAwesomeIcon icon={['fas', 'building']} color='#0066cc' /> -
                                <span className='ml-1'>{this.state.officeAddress}</span>
                        </h5>
                        <h5>
                            <FontAwesomeIcon icon={['fas', 'home']} color='#996633' /> -
                                <span className='ml-1'>{this.state.HomeAddress} </span></h5>

                    </div>
                </Jumbotron>

            </div>
        )
    }
}

export default Contact;