import React from 'react'
import { connect } from 'react-redux'
import AboutMeSegment from './AboutMeSegment'
import ProfilePic from '../asset/ProfilePic.jpg'
import TennisPic from '../asset/TennisPicSmall.jpg'
import BBQPic from '../asset/BBQPicSmall.jpg'
import ScrollAnimation from 'react-animate-on-scroll'

class AboutMe extends React.Component {
    render() {
        const style = {
            paddingTop: this.props.menuSize
        }

        return (
            <div className='AboutMe'
                style={style}
            >
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
                        <div className='col'>
                            Hello, my name is Jason Chang, and I am a Software Engineer. My main coding language is Python.
                            I am interested in Machine Learning and would like to pursue a carreer in that field.
                            I am also open to learning and expanding my skills such as HTML, CSS, and ReactJS.
                        </div>
                        <div className='col'>
                            <img
                                id='ProfilePic'
                                src={ProfilePic}
                                alt='A smiling Jason Chang' />
                        </div>
                        <div className='col'>
                            <p>Age: 23 Years<br />Location: Los Angeles, California</p>
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
                        played for my high school and college tennis teams.
                        I enjoy playing doubles because I love the fast pace
                        and quick reactions needed at the net.
                        Even playing for many years, every point is unique and exciting.
                        My blood still gets pumped to hit and chase after every ball.
                        I love playing the sport and always love playing with new people.
                    </p>}
                />

                <AboutMeSegment
                    id='BBQ'
                    aboutMeHeader='Argentine BBQ'
                    picId='BBQPic'
                    aboutMePic={BBQPic}
                    aboutMeDetails={<p className='AboutMeDetails'>
                        I love cooking Argentine BBQ. I have been perfecting my barbecuing skills since high school.
                        I'm experienced in cooking all types of meat such as Asado, Entrana, Mojella, Morcillia, Chorizo, and more!
                        On the side, I help my cousin's business, <a className='App-link' href="https://www.morechimichurri.com">MoreChimichurri</a>,
                        for catering events and food festivals
                    </p>}
                />
                <hr />
                <AboutMeSegment
                    id='FavoriteQuote'
                    aboutMeHeader='Favorite Quote'
                    aboutMeDetails={<div>
                        <h3 className='Quote'>Happiness is not a destination.<br />It is a method of life.<br />
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

const mapStateToProps = state => {
    return {
        menuSize: state.MenuSpecs.menuSize
    }
}

export default connect(mapStateToProps)(AboutMe)