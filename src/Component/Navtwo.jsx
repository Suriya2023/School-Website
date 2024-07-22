import React from 'react'
import './Navtwo.css';
import Logo from './Img/s2.png'

function Navtwo() {
    return (
        <div id='Navtwo'>
            <nav class="navbar  fixed-top" >
                <div class="container-fluid">
                    <img id='fivevmin' src={Logo} alt="Logo" />
                    <a class="navbar-brand" href="#"></a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="offcanvas offcanvas-end  bg-#f9f1e4" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                        <div class="offcanvas-header">
                            <img id='fivevmin' src={Logo} alt="Logo" />

                            <h5 class="offcanvas-title" id="offcanvasNavbarLabel"></h5>
                            <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <div class="offcanvas-body">
                            <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
                                <li class="nav-item">
                                    <a class="nav-link active text-#663300" aria-current="page" href="#" >Home</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#">About Us</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#">Vision</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#">My Gallery</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#">My Study</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#">Admission</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#">Achievement</a>
                                </li>
                            </ul>
                            <form class="d-flex mt-3" role="search">
                                <button id='aassasa' class="btn btn-outline-success" type="submit">Log In </button>
                            </form>
                        </div>
                    </div>
                </div>
            </nav>
            <br /><br />
        </div>
    )
}

export default Navtwo
