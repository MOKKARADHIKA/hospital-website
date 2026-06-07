import React from "react";
import { Link } from "react-router-dom";
import "./Blog.css";
import blogData from "./data/blogData"; // ✅ keep this

const Blog = () => {
  return (
    <div className="blog-page">

      {/* Banner */}
      <div className="blog-banner">
        <h1>Blog</h1>
      </div>

      {/* Breadcrumb */}
      <div className="breadcrumb">
        <Link to="/">Home</Link> /
        <span> Blog</span>
      </div>

      {/* Blog Cards */}
      <section className="blog-cards">

        {blogData.map((blog) => (

          <div className="blog-card" key={blog.id}>

            <img
              src={blog.image}
              alt={blog.title}
            />

            {/* ✅ ADD THIS CATEGORY LINE HERE */}
            <p className="blog-category">
              {blog.category}
            </p>

            {/* Existing Date */}
            <p className="blog-date">
              {blog.date}
            </p>

            {/* Title */}
            <h3>
              {blog.title}
            </h3>

            {/* Read More */}
            <Link
              to={`/blog/${blog.id}`}
              className="read-more"
            >
              Read More →
            </Link>

          </div>

        ))}

      </section>

    </div>
  );
};

export default Blog;