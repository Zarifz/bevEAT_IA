import React from "react";

class Home extends React.Component{
    render() {
        return(
            <div>

    {/* <!-- ***** Preloader Start ***** --> */}
    <div id="preloader">
        <div class="jumper">
            <div></div>
            <div></div>
            <div></div>
        </div>
    </div>  
    {/* <!-- ***** Preloader End ***** --> */}

    {/* <!-- Header --> */}
    <header class="">
      <nav class="navbar navbar-expand-lg">
        <div class="container">
          <a class="navbar-brand" href="index.html">
            <img src="assets/images/BevEatLogo2.png" alt="" width="260" height="64"/>
          </a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarResponsive">
            <ul class="navbar-nav ml-auto">
              <li class="nav-item">
                <a class="nav-link" href="index.html">Home
                  <span class="sr-only">(current)</span>
                </a>
              </li> 
              <li class="nav-item active">
                <a class="nav-link" href="products.html">Products</a>
              </li>

              <li class="nav-item">
                <a class="nav-link" href="checkout.html">Checkout</a>
              </li>

              <li class="nav-item dropdown">
                  <a class="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">About</a>
                  
                  <div class="dropdown-menu">
                    <a class="dropdown-item" href="about.html">About Us</a>
                    <a class="dropdown-item" href="testimonials.html">Testimonials</a>
                    <a class="dropdown-item" href="terms.html">Terms</a>
                  </div>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="contact.html">Contact Us</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>

    {/* <!-- Page Content --> */}
    {/* <!-- Banner Starts Here --> */}
    <div class="heading-page header-text">
      <section class="page-heading">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <div class="text-content">
                <h4>Products</h4>
                <h2>Choose the best product for you!</h2>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
    
    {/* <!-- Banner Ends Here --> */}

    <div class="topnav">
      <a class="active" href="#home">Home</a>
      <a href="#news">News</a>
      <a href="#contact">Contact</a>
      <a href="#about">About</a>
    </div>
    <section class="blog-posts grid-system">
      <div class="container"/>
        <div class="all-blog-posts"/>
          <div class="row">
            <div class="col-md-4 col-sm-6">
              <div class="blog-post">
                <div class="blog-thumb">
                  <img src="assets/images/product-1-720x480.jpg" alt=""/>
                </div>
                <div class="down-content">
                  <span> <del>$500.00</del>  $700.00 </span>
                  <a href="product-details.html"><h4>Lorem ipsum dolor sit amet, consectetur</h4></a>
                  <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non harum deserunt, obcaecati!</p>
                  <div class="post-options">
                    <div class="row">
                      <div class="col-lg-12">
                        <ul class="post-tags">
                          <li><i class="fa fa-bullseye"></i></li>
                          <li><a href="product-details.html">View Product</a></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-4 col-sm-6">
              <div class="blog-post">
                <div class="blog-thumb">
                  <img src="assets/images/product-2-720x480.jpg" alt="">
                </img>
                <div class="down-content">
                  <span> <del>$500.00</del>  $700.00 </span>
                  <a href="product-details.html"><h4>Lorem ipsum dolor sit amet, consectetur</h4></a>
                  <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero in, asperiores iste.</p>
                  <div class="post-options">
                    <div class="row">
                      <div class="col-lg-12">
                        <ul class="post-tags">
                          <li><i class="fa fa-bullseye"></i></li>
                          <li><a href="product-details.html">View Product</a></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-4 col-sm-6">
              <div class="blog-post"/>
                <div class="blog-thumb">
                  <img src="assets/images/product-3-720x480.jpg" alt=""/>
                </div>
                <div class="down-content">
                  <span> <del>$500.00</del>  $700.00 </span>
                  <a href="product-details.html"><h4>Lorem ipsum dolor sit amet, consectetur</h4></a>
                  <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum vero qui, reprehenderit.</p>
                  <div class="post-options">
                    <div class="row">
                      <div class="col-lg-12">
                        <ul class="post-tags">
                          <li><i class="fa fa-bullseye"></i></li>
                          <li><a href="product-details.html">View Product</a></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-4 col-sm-6">
              <div class="blog-post">
                <div class="blog-thumb">
                  <img src="assets/images/product-4-720x480.jpg" alt="">
                </img>
                <div class="down-content">
                  <span> <del>$500.00</del>  $700.00 </span>
                  <a href="product-details.html"><h4>Lorem ipsum dolor sit amet, consectetur</h4></a>
                  <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi totam magni facilis.</p>
                  <div class="post-options">
                    <div class="row">
                      <div class="col-lg-12">
                        <ul class="post-tags">
                          <li><i class="fa fa-bullseye"></i></li>
                          <li><a href="product-details.html">View Product</a></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-4 col-sm-6">
              <div class="blog-post">
                <div class="blog-thumb">
                  <img src="assets/images/product-5-720x480.jpg" alt="">
                </img>
                <div class="down-content">
                  <span> <del>$500.00</del>  $700.00 </span>
                  <a href="product-details.html"><h4>Lorem ipsum dolor sit amet, consectetur</h4></a>
                  <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut neque blanditiis, doloremque.</p>
                  <div class="post-options">
                    <div class="row">
                      <div class="col-lg-12">
                        <ul class="post-tags">
                          <li><i class="fa fa-bullseye"></i></li>
                          <li><a href="product-details.html">View Product</a></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-4 col-sm-6">
              <div class="blog-post">
                <div class="blog-thumb">
                  <img src="assets/images/product-6-720x480.jpg" alt=""/>
                </div>
                <div class="down-content">
                  <span> <del>$500.00</del>  $700.00 </span>
                  <a href="product-details.html"><h4>Lorem ipsum dolor sit amet, consectetur</h4></a>
                  <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat sint harum suscipit?</p>
                  <div class="post-options">
                    <div class="row">
                      <div class="col-lg-12">
                        <ul class="post-tags">
                          <li><i class="fa fa-bullseye"></i></li>
                          <li><a href="product-details.html">View Product</a></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    
    <footer>
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <ul class="social-icons">
              <li><a href="#">Facebook</a></li>
              <li><a href="#">Twitter</a></li>
              <li><a href="#">Behance</a></li>
              <li><a href="#">Linkedin</a></li>
            </ul>
          </div>
          <div class="col-lg-12">
            <div class="copyright-text">
              <p>
                Copyright © 2020 Company Name
                | Template by: <a href="https://www.phpjabbers.com/">PHPJabbers.com</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>

            </div>
        );
    }
}

export default Home;