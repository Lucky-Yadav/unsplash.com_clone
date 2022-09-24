import React from 'react'
import "../styles/blog_card1.css"

export const Blogcard1 = () => {
  return (
    <div className='card'>
      <div>
          <img src="https://unsplash.com/blog/content/images/size/w1000/2022/06/A_look_back_at_May_-Blog--1.jpeg" alt="" />
          <div className='detail' >
          <h5>Announcement</h5>
          <h2>A look back on May</h2>
          <span>Annie spratt - </span>
          <span>June 7, 2022</span>
        </div>
        
      </div>
    </div>
  )
}