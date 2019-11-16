import React from 'react'
import ScrollAnimation from 'react-animate-on-scroll'

class AboutMeSegment extends React.Component {
    state = {
        id: '',
        aboutMeHeader: '',
        aboutMePic: '',
        picId: '',
        aboutMePicDescription: '',
        aboutMeDetails: '',
    }

    componentDidMount() {
        this.setState({
            id: this.props.id,
            aboutMeHeader: this.props.aboutMeHeader,
            picId: this.props.picId,
            aboutMePic: this.props.aboutMePic,
            aboutMePicDescription: this.props.aboutMePicDescription,
            aboutMeDetails: this.props.aboutMeDetails,
        })
    }

    render() {
        const style = {
            backgroundImage: `url(${this.state.aboutMePic})`,
            width: '100%',
            height: '90vh',
        }

        let picSegment
        if (this.props.aboutMePic !== undefined) {
            picSegment = 
                <div className='AboutMePic'>
                    <div className="parallax" style={style}>
                        <h1 className='parallaxText'>{this.state.aboutMeHeader}</h1>
                    </div>
                </div>
        }
        else {
            picSegment = 
            <h2 className='AboutMeHeader'>{this.state.aboutMeHeader}</h2>
        }
        return (
            <ScrollAnimation
                animateIn='fadeIn'
                animateOnce={true}
                animatePreScroll={false}
            >
                <div className='AboutMeSegment' id={this.state.id}>
                    {picSegment}
                    {this.state.aboutMeDetails}
                </div>
            </ScrollAnimation>
        )
    }
}

export default AboutMeSegment