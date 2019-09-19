import React from 'react'
import LinkedinPic from '../asset/LinkedinPic.jpg'

class ProfilePic extends React.Component {
    render() {
        return (
            <div className="ProfilePic">
              <img 
                  id = 'LinkedinPic'
                  src= {LinkedinPic}
                  alt='Jason Chang'/>
            </div>
        )
    }
}
  
  export default ProfilePic
  