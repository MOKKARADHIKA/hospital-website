import React from "react";
import { useParams, Link } from "react-router-dom";
import "./BlogDetails.css";
import blogData from "./data/blogData";

const BlogDetails = () => {

  const { id } = useParams();

  const blog = blogData.find(
    (item) => item.id === parseInt(id)
  );

  if (!blog) {
    return <h2>Blog not found</h2>;
  }

  return (

    <div className="blog-details-page">

      {/* Banner */}
      <div className="blog-details-banner">
        <h1>{blog.title}</h1>
      </div>

      {/* Breadcrumb */}
      <div className="breadcrumb">
        <Link to="/home">Home</Link> /
        <Link to="/blog"> Blog</Link> /
        <span> {blog.title}</span>
      </div>

      {/* MAIN CONTENT */}
      <div className="blog-details-container">

        {/* LEFT SIDE — Blog Content */}
        <div className="blog-left">

          <img
            src={blog.image}
            alt={blog.title}
          />

          <p className="blog-date">
            {blog.date}
          </p>

          <h2>
            {blog.title}
          </h2>

          <p style={{ whiteSpace: "pre-line" }}>
            {blog.content}
          </p>

        </div>

        {/* RIGHT SIDE — Recent Blogs */}
        <div className="blog-right">

          {/* ✅ ADD THIS CODE HERE */}
          <div className="recent-blogs">

            <h3>Recent Blogs</h3>

            {blogData.map((item) => (

              <Link
                to={`/blog/${item.id}`}
                key={item.id}
                className="recent-blog-item"
              >

                {item.title}

              </Link>

            ))}

          </div>

        </div>

      </div>

    </div>

  );

};

export default BlogDetails;