import React from 'react'
import ContactSegment from './ContactSegment'
import GithubLogo from '../asset/GitHub-Mark-Light-64px.png'

class ContactInfo extends React.Component{
    render (){
        return(
            <footer className='ContactInfo'>
                <h2>Contact Information</h2>
                <ContactSegment 
                // contactPic = {GithubLogo}
                // picDescription = 'Github Logo'
                contactDetails = {<p>Email: jasonc1221@gmail.com</p>}
                />
                <ContactSegment 
                // contactPic = {GithubLogo}
                // picDescription = 'Github Logo'
                contactDetails = {<p>Phone Number: (213)235-7144</p>}
                />
                <ContactSegment 
                contactPic = {GithubLogo}
                picDescription = 'Github Logo'
                contactDetails = {<p>GitHub: <a className='App-link' href='https://www.github.com/jasonc1221'>https://www.github.com/jasonc1221</a></p>}
                />
                <ContactSegment 
                // contactPic = {GithubLogo}
                // picDescription = 'Github Logo'
                contactDetails = {<p>LinkedIn: <a className='App-link' href='https://www.linkedin.com/in/jasonc1221/'>https://www.linkedin.com/in/jasonc1221/</a></p>}
                />
            </footer>
        )
    }
}

export default ContactInfo