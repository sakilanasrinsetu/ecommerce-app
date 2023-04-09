import React from 'react'
import ReactStars from "react-rating-stars-component";
import { Link } from 'react-router-dom';


const ProductCard = () => {
  return (
    <div className='col-3'>
        <Link className='product-card position-relative'>
            <div className='wishlist-icon position-absolute'>
                <Link>
                    <img src='images/wish.svg' alt='wish' />
                </Link>
            </div>
            <div className='product-image'>
                <img src='images/watch.jpeg' className="img-fluid" alt='' />
                <img src='images/watch-01.jpeg' className="img-fluid" alt='' />
            </div>
            <div className='product-details'>
                <h6 className='brand'>Havel</h6>
                <h5 className='product-title'>
                    Kids Headphone bulk 10 Pack Multi Colored for Students
                </h5>
                <ReactStars
                    count={5}
                    size={24}
                    value={3}
                    isHalf={true}
                    edit={false}
                    activeColor="#ffd700"
                />

                <p className='price'>$100.00</p>
            </div>
            <div className='action-bar position-absolute'>
                <div className='d-flex flex-column'>
                    <Link>
                        <img src='images/prodcompare.svg' alt='compare' />
                    </Link>
                    <Link>
                        <img src='images/view.svg' alt='view' />
                    </Link>
                    <Link>
                        <img src='images/add-cart.svg' alt='add-cart' />
                    </Link>
                </div>
            </div>
        </Link>
    </div>
  )
}

export default ProductCard