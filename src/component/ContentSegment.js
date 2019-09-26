import React from 'react'

class ContentSegment extends React.Component{
    state = {
        id: '',
        contentHeader: '',
        contentPic: '',
        picId: '',
        contentPicDescription: '',
        contentDetails: '',
    }

    componentDidMount() {
        this.setState({
            id: this.props.id,
            contentHeader: this.props.contentHeader,
            picId: this.props.picId,
            contentPic: this.props.contentPic,
            contentPicDescription: this.props.contentPicDescription,
            contentDetails: this.props.contentDetails,
        })
    }

    render (){
        let picSegment
        if (this.props.contentPic !== undefined){
            picSegment = <img className = 'ContentPic' id = {this.state.picId} src = {this.state.contentPic} alt = {this.state.contentPicDescription}/>
        }
        else{
            picSegment = null
        }
        return(
            <div className='ContentSegment' id={this.state.id}>
                <h2>{this.state.contentHeader}</h2>
                {picSegment}
                {this.state.contentDetails}
            </div>
        )
    }
}

export default ContentSegment