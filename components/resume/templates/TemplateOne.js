import { usePesonalDataStore, useUserDataStore } from "../../../store/store";
import React from 'react'
import { useRouter } from "next/router";
const TemplateOne = () => {

const primary = useUserDataStore(state => state.primary)
const secondary = useUserDataStore(state => state.secondary)
const Image = usePesonalDataStore(state => state.image)
const name = usePesonalDataStore(state => state.name)
const experience = usePesonalDataStore(state => state.experience)
const education = usePesonalDataStore(state => state.education)
const skills = usePesonalDataStore(state => state.skills)
const addExperience = usePesonalDataStore(state => state.addExperience)
const addEducation = usePesonalDataStore(state => state.addEducation)
const objective = usePesonalDataStore(state => state.objective)
const occupation = usePesonalDataStore(state => state.occupation)
const contact = usePesonalDataStore(state => state.contact)
const route = useRouter()

const removeExperiencField = (elementClass) => {
    const element = document.getElementById(elementClass)
    element.removeChild(element.lastChild);
}
const saveAppear = () => {
    const save =   document.querySelector('.save-changes')
    save.classList.remove('hide')
}
    return(
        <div className="template" onInput={() => saveAppear()}>
            <div className="top-header" style={{background: primary}}> 
            <div className="image-container-one" onClick={() => route.push('/main/photo')}>
                <img className="image-one" src={Image} alt='pfp'/>
            </div>
            </div>
            <div className="second-header" style={{background: primary}}>
                <div className="container-one"> 
                     <p contenteditable="true" className="name-one" id='resume-name'> {name} </p>
                        <div className="occupation-container-one" style={{background: primary}}> 
                            <p style={{color: secondary}} contenteditable="true" className="occupation-one">
                                {occupation}
                            </p>
                        </div>
                        <div className="about-container-one">
                            <p contenteditable="true">
                             {objective}
                            </p>
                        </div>          
                </div>
                <div className="contact-container-one">
                    <p contenteditable="true">{contact.location}</p>
                    <p contenteditable="true">{contact.phone}</p>
                    <p contenteditable="true">{contact.email}</p>
                    <p contenteditable="true">{contact.web}</p>
                </div>
            </div>
            <div className="body-one-container">
                <div className="body-one">
                    <div className="experience-heading-one">
                        <div style={{background: primary}} className="heading-container-one">
                            <p contenteditable="true"> experience</p>
                        </div>
                        <div id='experience-body-one'>
                          {experience.map(x => {
                                return(<ExperienceContent key={x.company} x={x} />)
                          })  }
                        </div> 
                <div className="add-field-one" onClick={() => addExperience()}>Add Field</div>
                <div className="add-field-one" onClick={() => removeExperiencField('experience-body-one')}>Remove Field</div>
                    </div>
                </div>
                    <div className="education-skill-container">
                        <div className="body-one-education">
                            <div id="education-body-one">
                                <div style={{background: primary}} className="heading-container-one">
                                <p contenteditable="true"> education</p>
                                </div> 
                              <div id='select-education'>  
                              {education.map(x => {
                                  return(<EducationContent key={x.name} x={x} />)
                              })}
                              </div>
                            </div>
                                <div className="add-education-one" onClick={() => addEducation()}>Add Field</div>
                                <div className="add-education-one" onClick={() => removeExperiencField("education-body-one")}>Remove Field</div>
                        </div>
                        <br />
                        <div className="body-one-skills">
                            <div style={{background: primary}} className="heading-container-one">
                                    <p contenteditable="true"> Skills</p>
                                </div>
                                    <ul contenteditable="true" id="skills-one" className="select-skills">
                                        {skills.map((x, index) => {
                                            return(
                                                <SkillsContent key={index} x={x} />
                                            )
                                        })}
                                    </ul>
                     </div>
                </div>     
            </div>
        </div>
    )
}

const SkillsContent = ({ x }) => {
    return(
        <li >
            {x.name}
        </li>
    )
}

const EducationContent = ({ x }) => {
    return(
        <>
            <div className="experience-tag-one"> <span contenteditable="true">{x.name}</span><br/>
            <div contenteditable="true">{x.school}</div>
            <br />
            <div contenteditable="true" id='sub-head-one'>{x.year}</div>
            </div>
        </>
    )
}

const ExperienceContent = ({ x }) => {
    return(
        <div className='resume-experience'>
            <div className="experience-tag-one"> <span contenteditable="true">{x.head}</span><div contenteditable="true">{x.company}</div></div>
            <div contenteditable="true" id='sub-head-one'>{x.year}</div>
            <div contenteditable="true" id='para-head-one'> {x.body} </div>
        </div> 
    )
}

export default TemplateOne;