import React from 'react'
import ContactSegment from './ContactSegment'
import MailLogo from '../asset/mail-logo.png'
import PhoneLogo from '../asset/phone-logo.png'
import GithubLogo from '../asset/GitHub-Mark-Light-64px.png'
import LinkedInLogo from '../asset/LI-In-Bug-White.png'

class ContactInfo extends React.Component{
    render (){
        return(
            <div className='ContactInfo'>
                <h2>Contact Information</h2>
                <ContactSegment 
                id = 'MailLogo'
                contactLogo = {MailLogo}
                logoDescription = 'Mail Logo'
                contactDetails = {<p className='ContactDetails'>Email: jasonc1221@gmail.com</p>}
                />
                <ContactSegment 
                id = 'PhoneLogo'
                contactLogo = {PhoneLogo}
                logoDescription = 'Phone Logo'
                contactDetails = {<p className='ContactDetails'>Phone Number: (213)235-7144</p>}
                />
                <ContactSegment 
                id = 'GithubLogo'
                contactLogo = {GithubLogo}
                logoDescription = 'Github Logo'
                contactDetails = {<p className='ContactDetails'>GitHub: <a className='App-link' href='https://www.github.com/jasonc1221'>https://www.github.com/jasonc1221</a></p>}
                />
                <ContactSegment 
                id = 'LinkedInLogo'
                contactLogo = {LinkedInLogo}
                logoDescription = 'LinkedIn Logo'
                contactDetails = {<p className='ContactDetails'>LinkedIn: <a className='App-link' href='https://www.linkedin.com/in/jasonc1221/'>https://www.linkedin.com/in/jasonc1221/</a></p>}
                />
            </div>
        )
    }
}

export default ContactInfo