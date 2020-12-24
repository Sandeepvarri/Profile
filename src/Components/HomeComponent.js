import React, { Component } from 'react';
import { Jumbotron } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class Home extends Component {
    constructor(props){
        super(props);
        this.state = {
            firstname : 'Poorna Chandra Rao',
            lastname : 'Varri',
            currentPos : 'Senior Software Engineer at Capgemini',
            currentPosLoc : 'Hyderabad, Telangana, India',
            intro : 'I am having profound knowledge in Web development and Database management. I am having advanced proficiencies in React.JS, JavaScript, MongoDB and having solid foundation in HTML, CSS, Bootstrap and SQL. I am a quick learner and self-motivated',
            totalProExp : {
                years : '2',
                months: '6'
            },
            goal : 'Full Stack Developer',
            lastUpdated : '12th Dec, 2020',
        }
    }
    render() {
        return (
            <div className='container mt-3'>
                <Jumbotron>
                    <div className='row'>
                        <div className='col-md-4'>
                            <img className='profileImage img-thumbnail' src='/PoornaVarriProfileImage.jpg' alt='profile' />
                        </div>
                        <div className='col-md-8'>
                        <h3 className='genColor'><FontAwesomeIcon icon={['fas', 'user-tie']} size='1x'/> {this.state.firstname} {this.state.lastname}</h3>
                            <div className='genColor'><FontAwesomeIcon icon={['fas', 'briefcase']} size='1x'/> <strong >{this.state.currentPos}</strong>
                            <p className="blockquote-footer">{this.state.currentPosLoc} <FontAwesomeIcon icon={['fas', 'map-marker-alt']}/> </p></div>
                            <p><strong className='genColor'> Total Experience : </strong>{this.state.totalProExp.years} Years, {this.state.totalProExp.months} Months</p>
                            <p><strong className='genColor'>About:</strong> {this.state.intro} </p>
                            <p><strong className='genColor'>Goal:</strong> {this.state.goal} </p>
                            <p><strong className='genColor'>Last Updated:</strong> {this.state.lastUpdated} </p>
                        </div>
                    </div>
                </Jumbotron>
            </div>
        )
    }
}

export default Home;