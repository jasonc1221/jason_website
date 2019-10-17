import React from 'react'
import ScrollAnimation from 'react-animate-on-scroll'

class ResumeSegment extends React.Component {
    state = {
        id: '',
        resumeHeader: '',
        details: '',
    }

    componentDidMount() {
        this.setState({
            id: this.props.id,
            resumeHeader: this.props.resumeHeader,
            details: this.props.details,
        })
    }

    render() {
        return (
            <ScrollAnimation
                animateIn='fadeIn'
                animateOnce={true}
                animatePreScroll={false}
            >
                <div className='ResumeSegment' id={this.state.id}>
                    <h2 className='ResumeHeader'>{this.state.resumeHeader}</h2>
                    {this.state.details}
                </div>
            </ScrollAnimation>
        )
    }
}

export default ResumeSegment