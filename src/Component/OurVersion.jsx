import React from 'react'
import './OurVersion.css'
import OurVersionimg from './Img/s7.png'
function OurVersion() {
    return (
        <>
            <div className='OurVersion'>
                <div class="contaiiiner">
                    <h1>Our Vision</h1>
                    <div class="content">
                        <img src={OurVersionimg} alt="Person reading a book" />
                        <div>  <p>Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry's standard dummy text ever since the 1500s...</p>
                            <div>
                                <p > 1. Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry's standard dummy text ever since the 1500s...</p>
                                <p > 2. Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry's standard dummy text ever since the 1500s...</p>
                                <p > 3. Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry's standard dummy text ever since the 1500s...</p>
                                <p > 4. Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry's standard dummy text ever since the 1500s...</p>
                                <p > 5. Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry's standard dummy text ever since the 1500s...</p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default OurVersion
