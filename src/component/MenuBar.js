import React from 'react'
import { Link } from 'react-scroll'


class MenuBar extends React.Component {
    state = {
        height: 0
    }

    updateHeight = this.updateHeight.bind(this)

    componentDidMount() {
        this.updateHeight()
        window.addEventListener("resize", this.updateHeight)
    }
   
    componentWillUnmount() {
        window.removeEventListener("resize", this.updateHeight)
    }
   
    componentDidUpdate() {
        this.updateHeight()
    }

    updateHeight() {
        if (this.state.height !== this.MenuBar.clientHeight)
          this.setState({ height: this.MenuBar.clientHeight })
    }

    render() {
        let scrollOffset = -this.state.height
        return (
            <div className='MenuBar' ref={(MenuBar) => this.MenuBar = MenuBar}>
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

export default MenuBar