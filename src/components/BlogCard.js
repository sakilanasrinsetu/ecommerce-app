import React from 'react'
import { Link } from 'react-router-dom'

const BlogCard = () => {
  return (
    <div className='col-3'>
        <div className='blog-card'>
            <div className='card-image'>
                <img src='images/blog-1.jpg' className='img-fluid' alt='' />
            </div>
            <div className='blog-content'>
                <p className='date'>04 April, 2023</p>
                <h5 className='title'>It is a long established fact that</h5>
                <p className='desc'>Reader will be distracted by the 
                readable content of a page when looking at its layout.
                 The point of using Lorem Ipsum is ...</p>
                <Link to='/' className='button'>Read More</Link>
            </div>
        </div>
    </div>
  )
}

export default BlogCard