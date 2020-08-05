import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


const myfirstelement = 


<html lang="en">
<head>
    <meta charset="UTF-8"></meta>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
    <title>Road less travelled</title>

</head>
<body id="page-top">
    <nav class="navbar navbar-expand-lg bg-white navbar-light fixed-top py-0" id="mainNav">
        <div class="container">
            <a class="navbar-brand js-scroll-trigger" href="#page-top"><img src="assets/img/logo.png" alt="logo"></img></a><button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
            <div class="collapse navbar-collapse" id="navbarResponsive">
                <ul class="navbar-nav ml-auto my-2 my-lg-0">
                    <li class="nav-item"><a class="nav-link js-scroll-trigger" href="#page-top">Home</a></li>
                    <li class="nav-item"><a class="nav-link js-scroll-trigger" href="#services">Services</a></li>
                    <li class="nav-item"><a class="nav-link js-scroll-trigger" href="#faq">FAQ</a></li>
                    <li class="nav-item"><a class="nav-link js-scroll-trigger" href="#contacts">Contacts</a></li>
                </ul>
            </div>
        </div>
    </nav>
    <header class="masthead">
        <div class="container h-100">
            <div class="row h-100 align-items-left justify-left-center text-left">
                <div class="col-lg-10 align-self-start">
                    <h3 class="font-weight-bold">The road less travelled</h3>
                </div>
                 <div class="start col-lg-3 col-md-3 ">
                     <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure, expedita.</p>
                        <a class="btn btn-primary btn" href="#services">Start my journey</a>
                    </div>
            </div>
            </div>
    </header>
    <section class="page-section" id="services">
        <div class="container">
            <div class="row">
                <div class="col-lg-4 col-md-6 text-center">
                    <div class="mt-5">
                       <img src="assets/img/list.png" alt="list icon"></img>
                        <h3 class="h4 mb-2">Things to do</h3>
                        <p class="text-muted mb-0">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis, rerum!</p>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6 text-center">
                    <div class="mt-5">
                        <img src="assets/img/thumb.png" alt="thumb icon"></img>
                        <h3 class="h4 mb-2">Like and share</h3>
                        <p class="text-muted mb-0">Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, aut.</p>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6 text-center">
                    <div class="mt-5">
                        <img src="assets/img/padlock.png" alt="padlock icon"></img>
                        <h3 class="h4 mb-2">Done so far</h3>
                        <p class="text-muted mb-0">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci, voluptatibus!</p>
                    </div>
                </div>
               
            </div>
        </div>
    </section>
    <section class="page-section" id="testimonials">
        <div class="container">
            <h2 class="text-left mt-0">Testimonials</h2>
            <div class="col-lg-3 ">
                <hr class="divider" />
            </div>
            <div class="row">
                <div class="col-lg-5 col-md-6 text-center">
                    <div class="mt-5">
                        <i class="fas fa-4x fa-gem text-primary mb-4"></i>
                        <h3 class="h4 mb-2">Another XD project come to life</h3>
                        <p class="text-muted mb-0">Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis velit, distinctio iusto et maiores similique quod consectetur dignissimos quasi placeat?</p>
                    <h6>John Doe, 2020</h6>
                    </div>
                </div>
               
                <div class="col-lg-7 col-md-5 text-center">
                    <div class="man">
                        <img src="assets/img/man.jpg" alt="man pic"></img>
                    </div>
                </div>
            </div>
        </div>
    </section>
</body>
</html>



ReactDOM.render(myfirstelement, document.getElementById('root'));

