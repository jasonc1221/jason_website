import React from 'react'
import ScrollAnimation from 'react-animate-on-scroll'

class ResumeSegment extends React.Component {
    state = {
        id: '',
        title:'',
        company:'',
        location:'',
        date:'',
        details: '',
    }

    componentDidMount() {
        this.setState({
            id: this.props.id,
            title: this.props.title,
            company: this.props.company,
            location: this.props.location,
            date: this.props.date,
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
                    <div className='row'>
                        <div className='col-3'>
                            <p className='ResumeTitle'>{this.state.title}</p>
                            <p className='ResumeCompany'>{this.state.company}</p>  
                            <p className='ResumeLocation'>{this.state.location}</p>
                            <p className='ResumeDate'>{this.state.date}</p>
                        </div>
                        <div className='col-9'>
                            {this.state.details}
                        </div>
                    </div>
                    <br/>
                </div>
            </ScrollAnimation>
        )
    }
}

export default ResumeSegment