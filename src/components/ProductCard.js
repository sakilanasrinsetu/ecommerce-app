import React from 'react';
import ReactStars from "react-rating-stars-component";
import { Link } from 'react-router-dom';

const ProductCard = () => {
    const dataList = [
        {
            id: 1,
            product: "Acer Nitro 5",
            img1: "images/store/clothing/woman/1.jpg",
            img2: "images/store/clothing/woman/2.jpg",
            brand: "Havel",
            productTitle: "Kids Headphone bulk",
            price: 100.00,
            method: "Cash on Delivery",
            status: "Approved",
        },
        {
            id: 2,
            product: "Acer Nitro 5",
            img1: "images/store/clothing/woman/5.jpg",
            img2: "images/store/clothing/woman/6.jpg",
            brand: "Havel",
            productTitle: "Kids Headphone bulk",
            price: 100.00,
            method: "Cash on Delivery",
            status: "Approved",
        },
        {
            id: 3,
            product: "Acer Nitro 5",
            img1: "images/store/clothing/woman/11.jpg",
            img2: "images/store/clothing/woman/12.jpg",
            brand: "Havel",
            productTitle: "Kids Headphone bulk",
            price: 100.00,
            method: "Cash on Delivery",
            status: "Approved",
        },
        {
            id: 3,
            product: "Acer Nitro 5",
            img1: "images/store/clothing/woman/2.jpg",
            img2: "images/store/clothing/woman/14.jpg",
            brand: "Havel",
            productTitle: "Kids Headphone bulk",
            price: 100.00,
            method: "Cash on Delivery",
            status: "Approved",
        },
    ];

    return (
        <>
            {dataList.map((data) => (
                <div className='col-3' key={data.id}>
                    <Link className='product-card position-relative'>
                        <div className='wishlist-icon position-absolute'>
                            <Link>
                                <img src='images/wish.svg' alt='wish' />
                            </Link>
                        </div>
                        <div className='product-image'>
                            <img src={data.img1} className="img-fluid" alt='' />
                            <img src={data.img2} className="img-fluid" alt='' />
                        </div>
                        <div className='product-details'>
                            <h6 className='brand'>{data.brand}</h6>
                            <h5 className='product-title'>
                                {data.productTitle}
                            </h5>
                            <ReactStars
                                count={5}
                                size={24}
                                value={3}
                                isHalf={true}
                                edit={false}
                                activeColor="#ffd700"
                            />
                            <p className='price'>$ {data.price}</p>
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
            ))}
        </>
    );
};

export default ProductCard;
