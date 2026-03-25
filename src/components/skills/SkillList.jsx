import Skills from "./Skill"

function SkillList({title,skillsArray}){
    return(
        <div style={{
            width:"300px",
            height:"600px",
            border:"",
            margin:"10px"
        }}>
        
            <h1 style={{
                fontSize: "50px",
                fontWeight: "700",
                color: "#4386e9"
            }}>
                {title}
            </h1>
            
           <div style={{
            marginTop:"20px"
           }}>
            {skillsArray.map((arrayElement)=>(
                <Skills 
                    logo={arrayElement.logo}
                    name={arrayElement.name}
                />
            ))}

            </div>
        </div>
    )
}

export default SkillList;