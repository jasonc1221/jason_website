import React from 'react'

class ContactSegment extends React.Component{
    state = {
        id: '',
        contactLogo: '',
        logoDescription: '',
        contactDetails: '',
    }

    componentDidMount() {
        this.setState({
            id: this.props.id,
            contactLogo: this.props.contactLogo,
            logoDescription: this.props.logoDescription,
            contactDetails: this.props.contactDetails,
        })
    }

    render (){
        let segment
        if (this.props.contactLogo !== undefined){
            segment = <img className = 'contactLogo' id = {this.state.id} src = {this.state.contactLogo} alt = {this.state.logoDescription}/>
        }
        else{
            segment = null
        }

        return(
            <div className='ContactSegment'>
                {segment}
                {this.state.contactDetails}
            </div>
        )
    }
}

export default ContactSegment