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
        setTimeout(this.handleDismiss, 2000);
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
                    <div className='container'>
                        <h1 className='display-4 genColor' >Contact me..</h1>
                        <div className='row mb-2'>
                            <div className=' col-3'>
                                <h5 >
                                    Mobile <FontAwesomeIcon icon={['fas', 'mobile-alt']} /> :
                            </h5>
                            </div>
                            <div className=' col-9'>
                                <span className='ml-1 mr-2'>{this.state.number}</span>
                                <Button onClick={() => this.handleCopy(this.state.number)}><FontAwesomeIcon icon={['fas', 'copy']} /></Button>
                            </div>
                        </div>
                        <div className='row mb-2'>
                            <div className=' col-3 '>
                                <h5 >
                                    LinkedIn <FontAwesomeIcon icon={['fab', 'linkedin']} color='#0066cc' /> :
                                </h5>
                            </div>
                            <div className=' col-9'>
                                <a href='https://www.linkedin.com/in/poorna-varri' > {this.state.linkedIn} </a>
                            </div>
                        </div>
                        <div className='row mb-2'>
                            <div className=' col-3'>
                                <h5 >
                                    Email <FontAwesomeIcon icon={['fas', 'envelope']} color='#e60000' /> :
                            </h5>
                            </div>
                            <div className=' col-9'>
                                <span className='ml-1'>{this.state.gmail} </span>
                                <Button onClick={() => this.handleCopy(this.state.gmail)}><FontAwesomeIcon icon={['fas', 'copy']} /></Button>
                            </div>
                        </div>

                        <div className='row mb-2'>
                            <div className=' col-3'>
                                <h5 >
                                    Company Address <FontAwesomeIcon icon={['fas', 'building']} color='#0066cc' /> :
                                 </h5>
                            </div>
                            <div className=' col-9'>
                                <span className='ml-1'>{this.state.officeAddress}</span>
                            </div>
                        </div>
                        <div className='row mb-2'>
                            <div className=' col-3'>
                                <h5 >
                                    Home Address <FontAwesomeIcon icon={['fas', 'home']} color='#996633' /> :
                                 </h5>
                            </div>
                            <div className=' col-9'>
                                <span className='ml-1'>{this.state.HomeAddress} </span>
                            </div>
                        </div>

                    </div>
                </Jumbotron>

            </div >
        )
    }
}

export default Contact;