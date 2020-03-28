import React from 'react'
import { connect } from 'react-redux'
import ContactSegment from './ContactSegment'
import MailLogo from '../asset/mail-logo.png'
// import PhoneLogo from '../asset/phone-logo.png'
import GithubLogo from '../asset/GitHub-Mark-Light-64px.png'
import LinkedinLogo from '../asset/LI-In-Bug-White.png'

class ContactInfo extends React.Component {
    render() {
        const style = {
            paddingTop: this.props.menuSize
        }

        return (
            <div className='ContactInfo'
                style= {style}
            >
                <h2>Contact Information</h2>
                <ContactSegment
                    id='MailInfo'
                    contactPicId='MailPic'
                    contactPic={MailLogo}
                    contactPicDescription='Mail Logo'
                    contactDetails={<p className='ContactDetails'>Email: jasonc1221@gmail.com</p>}
                />

                {/* <ContactSegment
                    id='PhoneInfo'
                    contactPicId='PhonePic'
                    contactPic={PhoneLogo}
                    contactPicDescription='Phone Logo'
                    contactDetails={<p className='ContactDetails'>Phone Number: NEED TO ADD PHONE #</p>}
                /> */}

                <ContactSegment
                    id='GithubInfo'
                    contactPicId='GithubPic'
                    contactPic={GithubLogo}
                    contactPicDescription='Github Logo'
                    contactDetails={<p className='ContactDetails'>GitHub: <a className='App-link' href='https://www.github.com/jasonc1221'>https://www.github.com/jasonc1221</a></p>}
                />

                <ContactSegment
                    id='LinkedinInfo'
                    contactPicId='LinkedinPic'
                    contactPic={LinkedinLogo}
                    contactPicDescription='Linkedin Logo'
                    contactDetails={<p className='ContactDetails'>LinkedIn: <a className='App-link' href='https://www.linkedin.com/in/jasonc1221/'>https://www.linkedin.com/in/jasonc1221/</a></p>}
                />
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        menuSize: state.MenuSpecs.menuSize
    }
}

export default connect(mapStateToProps)(ContactInfo)