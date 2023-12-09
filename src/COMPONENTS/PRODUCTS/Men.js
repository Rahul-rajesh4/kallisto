import React, { useEffect, useState } from 'react'
import './product.css'
import cardimg from './img/p2.jpg'
import Navbar from '../NAVEBAR/Navbar'
import Colordnav from '../NAVEBAR/Colordnav'
import Footer from '../FOOTER/Footer'
import { useNavigate, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { filterrr } from '../REDUX/SLICE/eventslice'
import axios from 'axios'
import { event } from 'jquery'
export default function Men() {



  const [state, setState] = useState()

  const [category,setCategory] = useState()

  const Navigate = useNavigate()
  const { filter } = useParams()
  console.log(filter, 'kjjj');


  useEffect(() => {
    axios.post('http://127.0.0.1:8000/api/filtermethod', { "gender": filter,"category":category }).then((res) => {
      setState(res.data.data)
      console.log(res, 'dsjsjk');
    }).catch((error) => {
      console.log(error);
    })
  }, [filter,category])


  const Catogoryyy = (event)=>{
    const {name,value}=event.target
    // console.log(name,value);
    setCategory(value)
  }
  console.log(category,'dksfks');


  // const { data } = useSelector((state) => state.event)
  // console.log(data,'hhhh');

  // const [input, setInput] = useState()


  // useEffect(() => {
  //   dispatch(filterrr(filter))
  // },[])



  console.log(state, 'sdklfj');

  const viewproduct = () => {
    Navigate('/viewproduct')
  }
  return (
    <>
      <Colordnav />
      <div className={`container ${filter == "men" ? 'menbgimg' : filter == "women" ? 'womenbgimg' : filter == "kids" ? "kidsbgimg" : filter == "home" ? "Accessoriesbgimg" : null}`}>
        <h1 className='heddinggg'>{filter} Collections</h1>
      </div>
      <div className='productnavspace'>
        <Navbar />
      </div>

      <div className='container product-card'>
        <div className='products-category-right' style={{ textAlign: 'right' }}>
          <label class="name" style={{ display: 'inline-block', marginRight: '10px' }}>Category</label>
          <select class="form-select" aria-label="Default select example" onChange={Catogoryyy} name='category' style={{ width: '250px', display: 'inline-block' }}>
            <option name="category" value="" selected>Open this select menu</option>
            <option name="category" value="Trousers">Trousers</option>
            <option name="category" value="jeans">jeans</option>
            <option name="category" value="shirt">shirt</option>
            <option name="category" value="t-shirt">t-shirt</option>
            <option name="category" value="Shorts">Shorts</option>
            <option name="category" value="innerware">innerware</option>
            <option name="category" value="Shoes">Shoes</option>
            <option name="category" value="Accessories">Accessories</option>
            <option name="category" value="Jackets & Coats">Jackets & Coats</option>
            <option name="category" value="Hoodies & Sweatshirts">Hoodies & Sweatshirts</option>
            <option name="category" value="Skirts">Skirts</option>
            <option name="category" value="Dresses">Dresses</option>
            <option name="category" value="tops">tops</option>
          </select>
        </div>
        <div className='row'>
          {state?.map((value, key) => {
            const offer = (value.actualprice - value.discountprice) / value.actualprice * 100
            console.log(offer, 'sklfkls');


            return (
              <div class="col-md-6 col-lg-3" key={key}>
                <div class="dress-card">
                  <div class="dress-card-head" onClick={() => viewproduct(value.id)}>
                    <img class="dress-card-img-top" src={`/backend/${value.Imagesone}`} alt=""></img>
                  </div>
                  <div class="dress-card-body">
                    <h4 class="dress-card-title">{value.name}</h4>
                    <p class="dress-card-para">{value.description}</p>
                    <p class="dress-card-para">
                      <span class="dress-card-price">Rs.{value.discountprice} &ensp;</span>
                      <span class="dress-card-crossed">Rs.{value.actualprice}</span>
                      <span class="dress-card-off">&ensp;({offer}% OFF)</span>
                    </p>
                    <div class="row">
                      <div class="col-md-6 card-button"><a href=""><div class="card-button-inner bag-button">Add to Bag</div></a></div>
                      <div class="col-md-6 card-button"><a href=""><div class="card-button-inner wish-button">Favourites</div></a></div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}


        </div>

      </div>

      <Footer />
    </>
  )
}
