import React from 'react'
import Navbar from '../NAVEBAR/Navbar'
import Colordnav from '../NAVEBAR/Colordnav'
import Footer from '../FOOTER/Footer'
import cardimg from '../PRODUCTS/img/p2.jpg'
import './Booking.css'
export default function Booking() {
    return (
        <>
            <Colordnav />
            <div className='favnavspace'>
                <Navbar />
            </div>
            <div>
                <h2 className='favheddingggg'>Shopping bag</h2>
            </div>
            <div className='container product-card'>
                <div className='row'>
                    <div class="col-md-3">
                        <div class="dress-card">
                            <div class="dress-card-head">
                                <img class="dress-card-img-top" src={cardimg} alt=""></img>
                            </div>
                            <div class="dress-card-body">
                                <h4 class="dress-card-title">Harpa</h4>
                                <p class="dress-card-para">Womans printed clothing</p>
                                <p class="dress-card-para"><span class="dress-card-price">Rs.839 &ensp;</span><span class="dress-card-crossed">Rs.2099</span><span class="dress-card-off">&ensp;(60% OFF)</span></p>
                                <div class="row">
                                    <div class="col-md-6 card-button"><a href=""><div class="card-button-inner remove-button">Remove</div></a></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-md-3">
                        <div class="dress-card">
                            <div class="dress-card-head">
                                <img class="dress-card-img-top" src={cardimg} alt=""></img>
                            </div>
                            <div class="dress-card-body">
                                <h4 class="dress-card-title">Harpa</h4>
                                <p class="dress-card-para">Womans printed clothing</p>
                                <p class="dress-card-para"><span class="dress-card-price">Rs.839 &ensp;</span><span class="dress-card-crossed">Rs.2099</span><span class="dress-card-off">&ensp;(60% OFF)</span></p>
                                <div class="row">
                                    <div class="col-md-6 card-button"><a href=""><div class="card-button-inner wish-button">Favourites</div></a></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-md-3">
                        <div class="dress-card">
                            <div class="dress-card-head">
                                <img class="dress-card-img-top" src={cardimg} alt=""></img>
                            </div>
                            <div class="dress-card-body">
                                <h4 class="dress-card-title">Harpa</h4>
                                <p class="dress-card-para">Womans printed clothing</p>
                                <p class="dress-card-para"><span class="dress-card-price">Rs.839 &ensp;</span><span class="dress-card-crossed">Rs.2099</span><span class="dress-card-off">&ensp;(60% OFF)</span></p>
                                <div class="row">
                                    <div class="col-md-6 card-button"><a href=""><div class="card-button-inner bag-button">Add to Bag</div></a></div>
                                    <div class="col-md-6 card-button"><a href=""><div class="card-button-inner wish-button">Favourites</div></a></div>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div class="col-md-3">
                        <div class="dress-card">
                            <div class="dress-card-head">
                                <img class="dress-card-img-top" src={cardimg} alt=""></img>
                            </div>
                            <div class="dress-card-body">
                                <h4 class="dress-card-title">Harpa</h4>
                                <p class="dress-card-para">Womans printed clothing</p>
                                <p class="dress-card-para"><span class="dress-card-price">Rs.839 &ensp;</span><span class="dress-card-crossed">Rs.2099</span><span class="dress-card-off">&ensp;(60% OFF)</span></p>
                                <div class="row">
                                    <div class="col-md-6 card-button"><a href=""><div class="card-button-inner bag-button">Add to Bag</div></a></div>
                                    <div class="col-md-6 card-button"><a href=""><div class="card-button-inner wish-button">Favourites</div></a></div>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div class="col-md-3">
                        <div class="dress-card">
                            <div class="dress-card-head">
                                <img class="dress-card-img-top" src={cardimg} alt=""></img>
                            </div>
                            <div class="dress-card-body">
                                <h4 class="dress-card-title">Harpa</h4>
                                <p class="dress-card-para">Womans printed clothing</p>
                                <p class="dress-card-para"><span class="dress-card-price">Rs.839 &ensp;</span><span class="dress-card-crossed">Rs.2099</span><span class="dress-card-off">&ensp;(60% OFF)</span></p>
                                <div class="row">
                                    <div class="col-md-6 card-button"><a href=""><div class="card-button-inner bag-button">Add to Bag</div></a></div>
                                    <div class="col-md-6 card-button"><a href=""><div class="card-button-inner wish-button">Favourites</div></a></div>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div class="col-md-3">
                        <div class="dress-card">
                            <div class="dress-card-head">
                                <img class="dress-card-img-top" src={cardimg} alt=""></img>
                            </div>
                            <div class="dress-card-body">
                                <h4 class="dress-card-title">Harpa</h4>
                                <p class="dress-card-para">Womans printed clothing</p>
                                <p class="dress-card-para"><span class="dress-card-price">Rs.839 &ensp;</span><span class="dress-card-crossed">Rs.2099</span><span class="dress-card-off">&ensp;(60% OFF)</span></p>
                                <div class="row">
                                    <div class="col-md-6 card-button"><a href=""><div class="card-button-inner bag-button">Add to Bag</div></a></div>
                                    <div class="col-md-6 card-button"><a href=""><div class="card-button-inner wish-button">Remove</div></a></div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </div>

            <div className='bookingbutton'>
                <div className="book-button"><a href=""><div className="book-button-inner buy-button">book now</div></a></div>
            </div>
            <div>
                <Footer />
            </div>
        </>
    )
}
