import React from 'react'
import imgcard from '../Home/imgvid/p1.jpg'
export default function Viewproduct() {
    return (
        <>
            <div className='container'>
                <div className='contview'>
                    <div className='imgview'>

                        <img src={imgcard}></img>
                        <img src={imgcard}></img>
                        <img src={imgcard}></img>
                    </div>
                    <div className='textcontentttt'>
                        <h1 className='heddingggg123'>Product name</h1>
                        <p class="dress-card-para">Womans printed clothing</p>
                        <p class="dress-card-para"><span class="dress-card-price">Rs.839 &ensp;</span><span class="dress-card-crossed">Rs.2099</span><span class="dress-card-off">&ensp;(60% OFF)</span></p>

                        <h5>Size</h5>
                        <div>
                            
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}
