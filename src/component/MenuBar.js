import React from 'react'
import { Link } from 'react-scroll'


class MenuBar extends React.Component {
    state = {
        height: 0
    }
    
    componentDidMount() {
        const height = this.MenuBar.clientHeight
        this.setState({
            height: height
        });
        
    }

    render() {
        let scrollOffset = -this.state.height
        return (
            <div className='MenuBar'
                ref={ (MenuBar) => this.MenuBar = MenuBar}>
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