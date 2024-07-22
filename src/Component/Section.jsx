import React from 'react'
import './Navbar.css';
import Sectionimg from './Img/s6.png'

function Section() {
    return (
        <>   
             <div id='center' className='acenter'>
            <div className="banner-container" >
                <div className="banner-content">
                    <h1>Best Education School for your Children's Future.</h1>
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry's standard dummy text ever since the
                        1500s, when an unknown printer took a galley of type and scrambled it to
                        make a type specimen book. It has survived not only five centuries, but also
                        the leap into electronic typesetting, remaining essentially unchanged.
                    </p>
                    <button className="read-more-btn">Read More  &gt;  &gt;  &gt;</button>
                </div>
                <div className="banner-image">
                    <img src={Sectionimg} alt="Child Reading" />
                </div>

            </div>
<br /><br />

        </div>
        </>


    )
}

export default Section
