import React from 'react'
import LinkedInProfilePic from '../asset/LinkedinPic.jpg'

class ProfilePic extends React.Component {
    render() {
        return (
            <div className="ProfilePic">
              <img 
                  id = 'LinkedInProfilePic'
                  src= {LinkedInProfilePic}
                  alt='Jason Chang'/>
            </div>
        )
    }
}
  
  export default ProfilePic
  