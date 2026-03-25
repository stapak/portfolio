import ProfileImage from '../../assets/profile pics/profile pic 2.png'
import { Image } from "react-bootstrap";

function ProfilePic(){

  return (

    <div
      style={{
        width:"100%",
        maxWidth:"400px",
        padding:"15px",
        margin:"10px",
        borderRadius:"25px"
      }}
    >

      <Image
        src={ProfileImage}
        alt="Sachin Kamat"
        fluid
        style={{
          width:"100%",
          height:"auto",
          objectFit:"contain",
          borderRadius:"25px"
        }}
      />

    </div>

  )

}

export default ProfilePic;