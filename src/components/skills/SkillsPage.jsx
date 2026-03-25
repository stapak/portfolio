// importing components.
import SkillList from "./SkillList";

// importing logos.
import reactLogo from '../../assets/skills logo/react logo.svg'
import tailwindcssLogo from '../../assets/skills logo/tailwindcss logo.svg'

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

function SkillPage(){
    const frontendSkills = [
    { name:"React.js",logo:reactLogo },
    { name:"Tailwind CSS",logo:tailwindcssLogo }
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
    { name:"mongoDB",logo:mongodbLogo }
    ]

    const tools=[
    { name:"Git",logo:gitLogo },
    { name:"GitHub",logo:githubLogo }
    ]

    const library=[
    { name:"Tkinter",logo:tkinterLogo }
    ]
  return (
    <>
    <h1>My Skills</h1>
    <div style={{
        width:"1100px",
        display:"flex",
        flexWrap: "wrap",
        gap: "",
        marginLeft:"150px",
        marginBottom:"50px",
        borderRadius: "20px",
        border: "1px solid rgba(255,255,255,0.06)",
        boxShadow:"0 10px 30px rgba(0,0,0,0.4), 0 40px 80px rgba(0,0,0,0.5)",
        padding: "24px",
        transition: "0.3s"
    }}>

    <SkillList 
    title="Programming"
    skillsArray={programmingLanguage}
    />
    <hr/>

    <SkillList 
    title="FrontEnd"
    skillsArray={frontendSkills}
    />
    <hr/>
    
    <SkillList 
    title="BackEnd"
    skillsArray={backendSkills}
    />
    

    <SkillList 
    title="Database"
    skillsArray={database}
    />

    <hr/>

    <SkillList 
    title="Libraries"
    skillsArray={library}
    />
    
    
    <hr/>

    <SkillList 
    title="Tools"
    skillsArray={tools}
    />
    

    </div>
    </>
    )
}

export default SkillPage;