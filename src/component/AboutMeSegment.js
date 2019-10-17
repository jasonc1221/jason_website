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
        let picSegment
        if (this.props.aboutMePic !== undefined) {
            picSegment = <img className='AboutMePic' id={this.state.picId} src={this.state.aboutMePic} alt={this.state.aboutMePicDescription} />
        }
        else {
            picSegment = null
        }
        return (
            <ScrollAnimation
                animateIn='fadeIn'
                animateOnce={true}
                animatePreScroll={false}
            >
                <div className='AboutMeSegment' id={this.state.id}>
                    <h2 className='AboutMeHeader'>{this.state.aboutMeHeader}</h2>
                    {picSegment}
                    {this.state.aboutMeDetails}
                </div>
            </ScrollAnimation>
        )
    }
}

export default AboutMeSegment