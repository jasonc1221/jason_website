import React from 'react'

class ContentSegment extends React.Component{
    state = {
        id: '',
        contentHeader: '',
        contentDetails: '',
    }

    componentDidMount() {
        this.setState({
            id: this.props.id,
            contentHeader: this.props.contentHeader,
            contentDetails: this.props.contentDetails,
        })
    }

    render (){
        return(
            <div className='ContentSegment'>
                <h2>{this.state.contentHeader}</h2>
                {this.state.contentDetails}
            </div>
        )
    }
}

export default ContentSegment