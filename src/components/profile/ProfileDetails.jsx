import WebsiteProfile from "./WebsiteProfiles";

import LinkedInLogo from '../../assets/websites logos/linkedin logo.png'
import GitHubLogo from '../../assets/websites logos/github logo.png'
import GeeksforGeeksLogo from '../../assets/websites logos/GeeksforGeeks logo.png'
import LeetCodeLogo from '../../assets/websites logos/leetcode logo.png'
import HackerRankLogo from '../../assets/websites logos/hackerrank logo.png'

function ProfileDetails(){

  return (

    <div className="profile-details-box">

      <p className="intro-text">
        Hi, I'm
      </p>

      <h1 className="hero-name">
        SACHIN KAMAT
      </h1>

      <div className="links-row">

        <WebsiteProfile
          name="LinkedIn"
          logo={LinkedInLogo}
          link="https://www.linkedin.com/in/sachin-s-kamat"
        />

        <div className="divider"></div>

        <WebsiteProfile
          name="GitHub"
          logo={GitHubLogo}
          link="https://github.com/stapak"
        />

        <div className="divider"></div>

        <WebsiteProfile
          name="GeeksforGeeks"
          logo={GeeksforGeeksLogo}
          link="https://www.geeksforgeeks.org/profile/stapak"
        />

        <div className="divider"></div>

        <WebsiteProfile
          name="HackerRank"
          logo={HackerRankLogo}
          link="https://www.hackerrank.com/profile/stapak"
        />

        <div className="divider"></div>

        <WebsiteProfile
          name="LeetCode"
          logo={LeetCodeLogo}
          link="https://leetcode.com/u/stapak/"
        />
      </div>

    </div>

  )

}

export default ProfileDetails;