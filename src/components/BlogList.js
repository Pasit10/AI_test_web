import React from 'react';
import { Link } from 'react-router-dom';
import posts from '../data/posts.json';

const BlogList = () => {
  return (
    <div className="container blog-list">
      <h1>บทความล่าสุด</h1>
      {posts.map(post => (
        <div key={post.id} className="blog-post-summary">
          <h2>
            <Link to={`/post/${post.id}`}>{post.title}</Link>
          </h2>
          <p>{post.content.substring(0, 200)}...</p> {/* แสดงเนื้อหาสั้น ๆ ของบทความ */}
          <Link to={`/post/${post.id}`}>อ่านเพิ่มเติม</Link>
        </div>
      ))}
    </div>
  );
};

export default BlogList;

