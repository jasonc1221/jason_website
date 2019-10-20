import React from 'react'

class ContactSegment extends React.Component {
    state = {
        id: '',
        contactPicId: '',
        contactPic: '',
        contactPicDescription: '',
        contactDetails: '',
    }

    componentDidMount() {
        this.setState({
            id: this.props.id,
            contactPicId: this.props.contactPicId,
            contactPic: this.props.contactPic,
            contactPicDescription: this.props.contactPicDescription,
            contactDetails: this.props.contactDetails,
        })
    }

    render() {
        let segment
        if (this.props.contactPic !== undefined) {
            segment = <img className='ContactPic' id={this.state.contactPicId} src={this.state.contactPic} alt={this.state.contactPicDescription} />
        }
        else {
            segment = null
        }

        return (
            <div className='ContactSegment' id={this.state.id}>
                {segment}
                {this.state.contactDetails}
            </div>
        )
    }
}

export default ContactSegment