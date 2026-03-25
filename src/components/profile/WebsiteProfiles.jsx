function WebsiteProfile({name,logo,link}){

  return(

    <div
      style={{
        display:"flex",
        alignItems:"center",
        gap:"5px"
      }}
    >

      <img
        src={logo}
        alt={name}
        style={{width:"50px"}}
      />

      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          fontFamily:"Poppins",
          fontSize:"20px",
          color:"white",
          textDecoration:"none"
        }}
      >
        {name}
      </a>

    </div>

  )

}

export default WebsiteProfile;