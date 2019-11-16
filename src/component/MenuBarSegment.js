import React from 'react'
import { Link } from 'react-scroll'
import { connect } from 'react-redux'

class MenuBarSegment extends React.Component {
    state = {
        activeClass: 'active',
        to: '',
        spy: true,
        smooth: true,
        offset: 0,
        duration: 500,
        text: ''
    }

    componentDidMount() {
        this.setState({
            to: this.props.to,
            offset: this.props.offset,
            text: this.props.text,
        })
    }

    componentDidUpdate() {
        if (this.state.offset !== this.props.menuSize) {
            this.setState({ offset: this.props.menuSize })
        }
    }
    render() {
        return (
            <div className='MenuBarSegment'>
                <h4 className='MenuItems'>
                    <Link
                        activeClass={this.state.activeClass}
                        to={this.state.to}
                        spy={this.state.spy}
                        smooth={this.state.smooth}
                        offset={this.state.offset}
                        duration={this.state.duration}
                    >
                        {this.state.text}
                    </Link>
                </h4>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        menuSize: state.MenuSpecs.menuSize
    }
}

export default connect(mapStateToProps)(MenuBarSegment)