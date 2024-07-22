import React from 'react'
import './Sectiontwo.css'
import './Navtwo.css';

// import Sectionimg from './Img/s2.png'
function Sectiontwo() {
    return (
        <div> <div id='center' className='acenter'>

            <div className="banner-container" id='reverce'>

                <div className="banner-image">
                    <img src="https://www.panggilin.com/assets/jumbotron.png" alt="Child Reading" />
                </div>
                <div className="banner-content">
                    <h1>About Us.</h1>
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry's standard dummy text ever since the
                        1500s, when an unknown printer took a galley of type and scrambled it to
                        make a type specimen book. It has survived not only five centuries, but also
                        the leap into electronic typesetting, remaining essentially unchanged.
                    </p>
                    <button className="read-more-btn">Read More  &gt;  &gt;  &gt;</button>
                </div>

            </div>
        </div>
        </div>
    )
}

export default Sectiontwo
