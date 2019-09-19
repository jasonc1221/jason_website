import React from 'react'

class ContactSegment extends React.Component{
    state = {
        contactPic: '',
        picDescription: '',
        contactDetails: '',
    }

    componentDidMount() {
        this.setState({
            contactPic: this.props.contactPic,
            picDescription: this.props.picDescription,
            contactDetails: this.props.contactDetails,
        })
    }

    render (){
        let segment
        if (this.props.contactPic !== undefined){
            segment = <img className = 'ContactPic' src = {this.state.contactPic} alt = {this.state.picDescription}/>
        }
        else{
            segment = null
        }


        return(
            <div className='ContacSegment'>
                {segment}
                {this.state.contactDetails}
            </div>
        )
    }
}

export default ContactSegment