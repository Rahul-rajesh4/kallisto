import React, { useEffect, useState } from 'react'
import imgcard from '../Home/imgvid/p1.jpg'
import Footer from '../FOOTER/Footer'
import Colordnav from '../NAVEBAR/Colordnav'
export default function Viewproduct() {

    const [selectedSize, setSelectedSize] = useState(null);

    const handleChange = (event) => {
        const selectedButton = event.target.closest('.size-button').querySelector('.selectt-button');
        const allButtons = document.querySelectorAll('.size-button .selectt-button');

        setSelectedSize(event.target.value);

        allButtons.forEach((button) => {
            button.classList.remove('hovered');
        });

        selectedButton.classList.add('hovered');
        console.log('Selected Size:', event.target.value);
    };

    useEffect(() => {
        const radioButtons = document.querySelectorAll('input[type="radio"]');

        radioButtons.forEach((radioButton) => {
            radioButton.addEventListener('change', handleChange);

            return () => {
                radioButton.removeEventListener('change', handleChange);
            };
        });

        return () => {
            radioButtons.forEach((radioButton) => {
                radioButton.removeEventListener('change', handleChange);
            });
        };
    }, []);




    return (
        <>
            <Colordnav />
            <div className='productspaceeee'>
                <div className='container'>
                    <div className='contview'>
                        <div className='imgview'>
                            <img src={imgcard} alt="Image 1" />
                            <img src={imgcard} alt="Image 2" />
                            <img src={imgcard} alt="Image 3" />
                            <img src={imgcard} alt="Image 4" />
                        </div>
                        <div className='textcontentttt'>
                            <h1 className='heddingggg123'> </h1>
                            <p className="dress-card-para">Womans printed clothing</p>
                            <p className="dress-card-para">
                                <span className="dress-card-price">Rs.839 &ensp;</span>
                                <span className="dress-card-crossed">Rs.2099</span>
                                <span className="dress-card-off">&ensp;(60% OFF)</span>
                            </p>

                            <h5 className='sizehedding'>Size</h5>

                            <div className='row'>
                                <div className={`col-md-2 size-button ${selectedSize === 'S' ? 'selected' : ''}`}>
                                    <label>
                                        <input type="radio" name="size" value="S" className="visually-hidden" />
                                        <div className="size-button-inner selectt-button">S</div>
                                    </label>
                                </div>
                                <div className={`col-md-2 size-button ${selectedSize === 'M' ? 'selected' : ''}`}>
                                    <label>
                                        <input type="radio" name="size" value="M" className="visually-hidden" />
                                        <div className="size-button-inner selectt-button">M</div>
                                    </label>
                                </div>
                                <div className={`col-md-2 size-button ${selectedSize === 'L' ? 'selected' : ''}`}>
                                    <label>
                                        <input type="radio" name="size" value="L" className="visually-hidden" />
                                        <div className="size-button-inner selectt-button">L</div>
                                    </label>
                                </div>
                            </div>
                            <div class="row mt-3">
                                <div class="col-md-6 card-button"><a href=""><div class="card-button-inner bag-button">Add to Bag</div></a></div>
                                <div class="col-md-6 card-button"><a href=""><div class="card-button-inner wish-button">Favourites</div></a></div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            <div>
                <Footer />
            </div>
        </>
    )
}
