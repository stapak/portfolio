import ProfileImage from '../../assets/profile pics/profile pic 2.png'
import { Image } from "react-bootstrap";

function ProfilePic(){

  return (

    <div className="profile-pic-wrapper">

      <Image
        src={ProfileImage}
        alt="Sachin Kamat"
        fluid
        className="profile-pic"
      />

    </div>

  )

}

export default ProfilePic;