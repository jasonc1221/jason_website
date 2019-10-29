import React from 'react'
import ReactDOM from 'react-dom';
import { Link } from 'react-scroll'
import { connect } from 'react-redux'
import { setMenuSize } from '../actions/MenuSizeAction'


class MenuBar extends React.Component {
    state = {
        height: 0
    }

    componentDidMount() {
        let height = ReactDOM.findDOMNode(this).offsetHeight
        this.props.setMenuSize(height)
        window.addEventListener("resize", () => {
            this.props.setMenuSize(height)
            this.setState({ height: this.props.menuSize })
        })
    }

    componentWillUnmount() {
        let height = ReactDOM.findDOMNode(this).offsetHeight
        window.removeEventListener("resize", this.props.setMenuSize(height))
    }

    // NEEDED for initial page render
    componentDidUpdate() {
        let height = ReactDOM.findDOMNode(this).offsetHeight
        if (this.state.height !== height) {
            this.props.setMenuSize(height)
            this.setState({ height: this.props.menuSize })
        }
    }

    render() {
        let scrollOffset = -this.state.height
        return (
            <div className='MenuBar'>
                <h4 className='MenuItems'>
                    <Link
                        activeClass="active"
                        to="Banner"
                        spy={true}
                        smooth={true}
                        offset={scrollOffset}
                        duration={500}
                    >
                        Home
                    </Link>
                </h4>
                <h4 className='MenuItems'>
                    <Link
                        activeClass="active"
                        to="AboutMe"
                        spy={true}
                        smooth={true}
                        offset={scrollOffset}
                        duration={500}
                    >
                        About Me
                    </Link>
                </h4>
                <h4 className='MenuItems'>
                    <Link
                        activeClass="active"
                        to="Resume"
                        spy={true}
                        smooth={true}
                        offset={scrollOffset}
                        duration={500}
                    >
                        Resume
                    </Link>
                </h4>
                <h4 className='MenuItems'>
                    <Link
                        activeClass="active"
                        to="ContactInfo"
                        spy={true}
                        smooth={true}
                        offset={scrollOffset}
                        duration={500}
                    >
                        Contact Info
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

export default connect(mapStateToProps, { setMenuSize })(MenuBar)