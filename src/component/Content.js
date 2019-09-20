import React from 'react'
import ContentSegment from './ContentSegment'

class Content extends React.Component{
    render (){
        return(
            <div className='Content'>
                <ContentSegment 
                id = 'AboutMe'
                contentHeader = 'About Me'
                contentDetails = {<p className='ContentDetails'>Hello my name is Jason Chang. I am a software Engineer for Tata Consultancy Agency.
                    I am interested in Machine Learning and would like to pursue a carreer in that field.
                    My main language is Python and have created machine learning projects using TensorFlow.
                    My current work projects are automatation where I automate websites to check servers' status and peformance. 
                    I am open to learning and expanding my skills such as HTML, CSS, and React. </p>}
                />
                <ContentSegment 
                id = 'Hobbies'
                contentHeader = 'Hobbies'
                contentDetails = {<p className='ContentDetails'>One of my greatest passion in life is tennis. 
                    I have been playing tennis since 2010 and have played for my high school (Crescenta Valley High School) and for my college tennis club (Cal Poly Pomona). 
                    I also love cooking Argentine BBQ. I have been cooking it since high school and have been pefecting my skills. 
                    In the side, I help my cousin's business, <a className='App-link' href="https://www.morechimichurri.com">MoreChimichurri</a>, for catering events.</p>}
                />
            </div>
        )
    }
}

export default Content