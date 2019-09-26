import React from 'react'
import ContentSegment from './ContentSegment'
import ProfilePic from '../asset/ProfilePic4.jpg'
import TennisPic from '../asset/TennisPic3.JPG'
import BBQPic from '../asset/BBQPic.jpg'

class Content extends React.Component{
    render (){
        return(
            <div className='Content'>
                <img 
                id = 'ProfilePic'
                src= {ProfilePic}
                alt='A smiling Jason Chang'/>

                <ContentSegment 
                id = 'AboutMe'
                contentHeader = 'About Me'
                contentDetails = {<p className='ContentDetails'>Hi, my name is Jason Chang and I am a software Engineer for Tata Consultancy Agency.
                    I am currently working on automation projects using Selenium to check servers' status and peformance.
                    My main language is Python and have created machine learning projects using TensorFlow.
                    I am interested in Machine Learning and would like to pursue a carreer in that field.
                    My main language is Python and have created machine learning projects using TensorFlow.
                    I am open to learning and expanding my skills such as HTML, CSS, and React. </p>}
                />
                <ContentSegment 
                id = 'Tennis'
                contentHeader = 'Tennis'
                picId = 'TennisPic'
                contentPic = {TennisPic}
                contentPicDescription = 'Jason Playing Tennis'
                contentDetails = {<p className='ContentDetails'>One of my greatest passion in life is tennis. 
                    I have been playing tennis since 2010 and have played for my high school (Crescenta Valley High School) and for my college tennis club (Cal Poly Pomona). 
                    </p>}
                />
                <ContentSegment 
                id = 'BBQ'
                contentHeader = 'Argentine BBQ'
                picId = 'BBQPic'
                contentPic = {BBQPic}
                contentDetails = {<p className='ContentDetails'>
                    I also love cooking Argentine BBQ. I have been cooking it since high school and have been pefecting my skills. 
                    In the side, I help my cousin's business, <a className='App-link' href="https://www.morechimichurri.com">MoreChimichurri</a>, for catering events.</p>}
                />
            </div>
        )
    }
}

export default Content