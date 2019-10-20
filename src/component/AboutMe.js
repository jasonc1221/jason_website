import React from 'react'
import AboutMeSegment from './AboutMeSegment'
import ProfilePic from '../asset/ProfilePic4.jpg'
import TennisPic from '../asset/TennisPic3.JPG'
import BBQPic from '../asset/BBQPic.jpg'
import ScrollAnimation from 'react-animate-on-scroll'

class AboutMe extends React.Component {
    render() {
        return (
            <div className='AboutMe'>
                {/* About Me MenuHeader*/}
                <ScrollAnimation
                    animateIn='fadeIn'
                    animateOnce={true}
                    animatePreScroll={false}
                >
                    <h1 className='MenuHeader' id='AboutMe'>About Me</h1>
                </ScrollAnimation>

                <AboutMeSegment
                    id='Profile'
                    aboutMeHeader='Profile'
                    aboutMeDetails={<div className='AboutMeDetails' id='ProfileDetails'>
                        <div className='row'>
                            <div className='col-4'>
                                Hi,I am a Software Engineer. My main coding language is Python.
                                I am interested in Machine Learning and would like to pursue a carreer in that field.
                                I am also open to learning and expanding my skills such as HTML, CSS, and React.
                            </div>
                            <div className='col-4'>
                                <img
                                    id='ProfilePic'
                                    src={ProfilePic}
                                    alt='A smiling Jason Chang' />
                            </div>
                            <div className='col-4'>
                                <p>Age: 22 Years</p>
                                <p>Location: Los Angeles, California</p>
                            </div>
                        </div>
                    </div>}
                />

                <AboutMeSegment
                    id='Tennis'
                    aboutMeHeader='Tennis'
                    picId='TennisPic'
                    aboutMePic={TennisPic}
                    aboutMePicDescription='Jason Playing Tennis'
                    aboutMeDetails={<p className='AboutMeDetails'>
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

                <AboutMeSegment
                    id='BBQ'
                    aboutMeHeader='Argentine BBQ'
                    picId='BBQPic'
                    aboutMePic={BBQPic}
                    aboutMeDetails={<p className='AboutMeDetails'>
                        I love cooking Argentine BBQ. I have been cooking it since
                        high school and have been pefecting my skills.
                        I'm experienced in cooking all types of meat such as
                        Asado, Entrana, Mojella, Morcillia, Chorizo, and more!
                        In the side, I help my cousin's business, <a className='App-link' href="https://www.morechimichurri.com">MoreChimichurri</a>,
                        for catering events and food festivals
                    </p>}
                />

                <AboutMeSegment
                    id='FavoriteQupte'
                    aboutMeHeader='Favorite Quote'
                    aboutMeDetails={<div>
                        <h3 className='Quote'>Happiness is not a destination<br />It is a method of life<br />
                            <div id='Author'>- Burton Hills</div></h3>
                        <p className='AboutMeDetails'>
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

export default AboutMe