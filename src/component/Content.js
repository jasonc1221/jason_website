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
                contentDetails = {<p className='ContentDetails'>
                    Hi, my name is Jason Chang and I am a Software Engineer for Tata Consultancy Agency.
                    I am currently working on automation, monitoring, and self healing projects.
                    My main coding language is Python and have experience using Selenium and Pyautogui.
                    I am interested in Machine Learning and would like to pursue a carreer in that field.
                    I am also open to learning and expanding my skills such as HTML, CSS, and React.
                    </p>}
                />
                <ContentSegment 
                id = 'Tennis'
                contentHeader = 'Tennis'
                picId = 'TennisPic'
                contentPic = {TennisPic}
                contentPicDescription = 'Jason Playing Tennis'
                contentDetails = {<p className='ContentDetails'>
                    One of my greatest passion in life is tennis.
                    I have been playing tennis since 2010 and have  
                    for my high school tennis team and college tennis club.
                    I enjoy playing doubles because I love the fast pace
                    and quick reactions needed at the net.
                    Every point is unique and exciting that even playing for many years,
                    my blood still gets pumped to hit and run after every ball.
                    Love playing the sport and always love playing with new people.
                    </p>}
                />
                <ContentSegment 
                id = 'BBQ'
                contentHeader = 'Argentine BBQ'
                picId = 'BBQPic'
                contentPic = {BBQPic}
                contentDetails = {<p className='ContentDetails'>
                    I love cooking Argentine BBQ. I have been cooking it since 
                    high school and have been pefecting my skills. 
                    I'm experienced in cooking all types of meat such as 
                    Asado, Entrana, Mojella, Morcillia, Chorizo, and more!
                    In the side, I help my cousin's business, <a className='App-link' href="https://www.morechimichurri.com">MoreChimichurri</a>, 
                    for catering events and food festivals
                    </p>}
                />
                <ContentSegment 
                id = 'FavoriteQupte'
                contentHeader = 'Favorite Quote'
                contentDetails = {<div>
                        <h3 className='Quote'>Happiness is not a destination<br/>It is a method of life<br/>
                            <div id='Author'>- Burton Hills</div></h3>
                        <p className='ContentDetails'>
                            This quote inspires me to live everyday happily.
                            I believe that if you live joyfully, then your day will 
                            become interesting, fun, productive, and stress free.
                            Your enthusiasm would also spread to others and make everyone happier.
                        </p>
                    </div>}
                />
            </div>
        )
    }
}

export default Content