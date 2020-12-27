import React, { Component } from 'react';
import { Card, CardBody, CardHeader, Collapse } from 'reactstrap';
import { PROFILE } from '../data/profile';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function RenderCard(props) {
    return (
        <Card>
            <CardHeader onClick={props.handleAccordion} >
                <h4>
                    <span className="fa-layers fa-fw mr-2">
                        <FontAwesomeIcon icon={['fas', 'circle']} size='lg' color='#713e9c' />
                        <FontAwesomeIcon icon={['fas', props.inFont]} size='sm' inverse />
                    </span>
                    {props.heading}
                    <span className='float-right'>
                        <FontAwesomeIcon icon={['fas', props.isCollapse? 'caret-up':'caret-down']} size='lg' color='#713e9c' />
                    </span>
                </h4>
            </CardHeader>
            <Collapse isOpen={props.isCollapse}>
                <CardBody >
                    {props.body}
                </CardBody>
            </Collapse>

        </Card>
    )
}

class Resume extends Component {
    constructor(props) {
        super(props);
        this.state = {

            isOpen: [true, false, false, false, false]
        }
    }

    handleAccordion(val) {
        var isOpen = this.state.isOpen;
        isOpen = isOpen.map(bool => false)
        isOpen[val] = !this.state.isOpen[val]
        this.setState({ isOpen });
    }

    render() {
        const profile = PROFILE;

        const education = profile.education.map((edu, index) => {
            return (
                <div key={index}>
                    <h6><span className='genColor'>{edu.degree}</span> | {edu.school}</h6>
                    <div>{edu.startYear} - {edu.endYear}</div>
                    {edu.stream && <div>{edu.stream}</div>}
                    {edu.marks.CGPA && <div>CGPA : {edu.marks.CGPA}</div>}
                    {edu.marks.percentage && <div>Percentage : {edu.marks.percentage}%</div>}
                    {(index + 1) !== profile.education.length && <hr />}
                </div>
            )
        });

        const skills = profile.skills.map((skill,index) => {
            return (
                <div className="col-1" key={index}>
                    <div className="row  justify-content-center">
                        <FontAwesomeIcon icon={['fab', skill.logo]} size='3x' color={skill.color} />
                    </div>
                    <div className="row justify-content-center">
                        <p >{skill.name} </p>
                    </div>
                </div>
            )
        })

        const professionalExperience = profile.proExp.map((exp, index) => {
            return (
                <div key={index}>
                    <h5><span className='genColor'>{exp.name}</span> | {exp.startDate.month},{exp.startDate.year} - {exp.endDate.month},{exp.endDate.year}</h5>
                    <h6>Project summary: </h6><div>{exp.summary}</div>
                    <br />
                    <h6>Roles and Responsibilities: </h6>
                    <ul>
                        {exp.rolesAndResp.map(rr => <li>{rr.role}</li>)}
                    </ul>
                    {(index + 1) !== profile.proExp.length && <hr />}
                </div>
            )
        });

        const certifications = profile.certifications.map((certificate,index) => {
            return (
            <div key={index}>
                <h6>{certificate.name} - {certificate.school}</h6>
            </div>
            )
        })

        return (
            <div className='container'>
                <div className='row'>
                    <div className='offset-3 col-9 offset-md-8 col-md-4'>
                        <a href='/Resume.pdf' rel="noreferrer" className='btn btn-primary mt-2 mb-2 resumeDnld' download>
                            <FontAwesomeIcon icon={['fas', 'download']} className='mr-1' />
                            Download Resume
                        </a>
                    </div>
                </div>
                <div>
                    <RenderCard heading='Objective' handleAccordion={() => this.handleAccordion(0)} isCollapse={this.state.isOpen[0]}
                        inFont='bars' body={profile.objective} />
                    <RenderCard heading='Education' handleAccordion={() => this.handleAccordion(1)} isCollapse={this.state.isOpen[1]}
                        inFont='graduation-cap' body={education} />
                    <RenderCard heading='Skills' handleAccordion={() => this.handleAccordion(2)} isCollapse={this.state.isOpen[2]}
                        inFont='tools' body={
                            <div className='row justify-content-around'>
                                {skills}
                            </div>
                        } />
                    <RenderCard heading='Professional Experience' handleAccordion={() => this.handleAccordion(3)} isCollapse={this.state.isOpen[3]}
                        inFont='user-tie' body={professionalExperience} />
                    <RenderCard heading='Certifications' handleAccordion={() => this.handleAccordion(4)} isCollapse={this.state.isOpen[4]}
                        inFont='file-alt' body={certifications} />

                </div>
            </div>
        )
    }
}

export default Resume;