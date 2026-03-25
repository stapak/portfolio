function Skills({logo,name,height="50px"}){
    return(
    <div style={{ 
    width:"300px",
    height:"60px", 
    display:"flex", 
    gap: "10px",
    alignItems: "center",
    justifyContent:"center",
    marginTop:"20px",
    border:""
    }}>
   
    <img src={logo}
         alt={name}
         style={{height:height}}
    />
    <p
       style={{
        alignItems:"center",
        fontFamily: "Poppins",
        fontSize: "20px",
    }}>
        {name}
    </p>
    </div>

    

)

}

export default Skills;