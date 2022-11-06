import React from 'react'
import '../styles/blog_navbar.css'
import { BlogAnnouncement } from './BlogAnnouncement';
import { BlogHome } from './BlogHome'
import { Link } from "react-router-dom";

export const BlogNavbar = () => {
    const [toggle,setToggle] = React.useState(true);


  return (
    <div>
      <div className="blog-nav">
        <div className="logo">
          <Link to={"/"}>
          <p class="navigation__logo" >
            <svg
              viewBox="0 0 32 32"
              width="32"
              height="32"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10 9V0h12v9H10zm12 5h10v18H0V14h10v9h12v-9z"
                fill-rule="nonzero"
              ></path>
            </svg>
            </p>
            </Link>
        </div>
        <div className="links">
          <a href="javascript:;" onClick={() => setToggle(true)}>
            Home
          </a>
          <a href="javascript:;" onClick={() => setToggle(false)}>
            Announcements
          </a>
          <a href="">Product</a>
          <a href="#">Brands</a>
          <a href="#">Partnerships</a>
          <a href="#">Community</a>
        </div>
        <div className="home-links">
          <a href="/">unsplash.com ↗</a>
        </div>
      </div>
      {toggle ? (
        <div>
          <BlogHome />
        </div>
      ) : (
        <div>
          <BlogAnnouncement />
        </div>
      )}
    </div>
  );
}

