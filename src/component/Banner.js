import React from 'react'
import BannerPic from '../asset/Calgary.jpg'
import '../css/Banner.css'

class Banner extends React.Component {
    render() {
        const style = {
            backgroundImage: `url(${BannerPic})`
        }

        return (
            <div className="Banner">
                <div className="parallax" style={style}>
                    <h1 className='parallaxText'>Jason Chang</h1>
                </div>
            </div>
        )
    }
}

export default Banner