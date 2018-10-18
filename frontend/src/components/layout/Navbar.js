import React, { Component } from "react";
// import logo-white from '../../../public/assets/img/logo-white.png';

class Navbar extends Component {
  
  render() {
    return (
      <nav class="navbar navbar-expand-lg navbar-dark fixed-top bg-red" id="mainNav">
        <div class="container">
            <a class="navbar-brand js-scroll-trigger" href="#page-top"></a>
            <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                
            <i class="fas fa-bars"></i>
            </button>
            <div class="collapse navbar-collapse" id="navbarResponsive">
            <ul class="navbar-nav text-uppercase ml-auto">
                <li class="nav-item">
                <a class="nav-link js-scroll-trigger" href="/start">INITIATE</a>
                </li>
                {/* <li class="nav-item">
                <a class="nav-link js-scroll-trigger" href="/process">ADD PRODUCTS</a>
                </li> */}
                <li class="nav-item">
                <a class="nav-link js-scroll-trigger" href="/final">CHECK</a>
                </li>
                
            </ul>
            </div>
        </div>
    </nav>
    );
  }
}
export default Navbar;
