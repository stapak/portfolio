// importing components.
import SkillList from "./SkillList";

// importing logos.
import reactLogo from '../../assets/skills logo/react logo.svg'
import tailwindcssLogo from '../../assets/skills logo/tailwindcss logo.svg'
import bootstrapLogo from '../../assets/skills logo/bootstrap-logo.svg'

import pythonLogo from '../../assets/skills logo/python logo.png'
import shellLogo from '../../assets/skills logo/shell scripting logo.png'
import javasciptLogo from '../../assets/skills logo/javascript logo.png'

import flaskLogo from '../../assets/skills logo/flask logo.svg'
import nodejsLogo from '../../assets/skills logo/nodejs logo.svg'
import expressLogo from '../../assets/skills logo/expressjs logo.png'

import mysqlLogo from '../../assets/skills logo/mysql logo.png'
import mongodbLogo from '../../assets/skills logo/mongodb logo.png'

import tkinterLogo from '../../assets/skills logo/tkinter logo.jpeg'

import gitLogo from '../../assets/skills logo/git logo.png'
import githubLogo from '../../assets/websites logos/github logo.png'


import { Container } from "react-bootstrap";
import "./skillsPage.css";

// keep ALL your logo imports SAME

function SkillPage(){

  const frontendSkills = [
    { name:"React.js",logo:reactLogo },
    { name:"Bootstrap",logo:bootstrapLogo }
  ]

  const backendSkills =[
    { name:"",logo:flaskLogo },
    { name:"",logo:nodejsLogo },
    { name:"",logo:expressLogo }
  ]

  const programmingLanguage=[
    { name:"Python",logo:pythonLogo },
    { name:"Shell Scripting",logo:shellLogo },
    { name:"JavaScript",logo:javasciptLogo }
  ]

  const database=[
    { name:"MySQL",logo:mysqlLogo },
    { name:"MongoDB",logo:mongodbLogo }
  ]

  const tools=[
    { name:"Git",logo:gitLogo },
    { name:"GitHub",logo:githubLogo }
  ]

  const library=[
    { name:"Tkinter",logo:tkinterLogo }
  ]

  return (

    <section className="skills-section" id="SkillsPage">

      <Container>

        <h1 className="skills-heading">My Skills</h1>

        <div className="skills-glass">

          <div className="skills-grid">

            <SkillList title="Programming" skillsArray={programmingLanguage}/>
            <SkillList title="FrontEnd" skillsArray={frontendSkills}/>
            <SkillList title="BackEnd" skillsArray={backendSkills}/>
            <SkillList title="Database" skillsArray={database}/>
            <SkillList title="Libraries" skillsArray={library}/>
            <SkillList title="Tools" skillsArray={tools}/>

          </div>

        </div>

      </Container>

    </section>

  )
}

export default SkillPage;