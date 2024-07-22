import React from 'react'
import "./Vidio.css"
import Vidioimg from './Img/s4.png'
function Vidio() {
  return (
    <div className='sa1'>
    <div className='lalala'>
      <div class="banner">
        <div class="text-content">
          <h1>Trust of 100% Students and Parents</h1>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
        </div>
        <div class="media-content">
          <img src={Vidioimg} alt="Media Placeholder" />
          <button class="play-button">▶</button>

        </div>
      </div>
      <br />
      <div className='bannerrr'>
        <div className='achivmenet'>
          <h1>Our Achivements</h1>
        </div>
        <div class="containeeer">
          <div class="achievement">
            <div class="icon">
              <div class="number">04+</div>
            </div>
            <div class="description">Every year AI in GSEB</div>
          </div>
          <div class="achievement">
            <div class="icon">
              <div class="number">01</div>
            </div>
            <div class="description">Vedic Maths</div>
          </div>
          <div class="achievement">
            <div class="icon">
              <div class="number">20+</div>
            </div>
            <div class="description">Specialized Team</div>
          </div>
        </div></div></div>
    </div>
  )
}

export default Vidio
