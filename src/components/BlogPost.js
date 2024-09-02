import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import postsData from '../data/posts.json';

const BlogPost = () => {
  const { id } = useParams();
  const navigate = useNavigate(); // ใช้ useNavigate เพื่อเปลี่ยนเส้นทาง
  const [comment, setComment] = useState('');
  const [posts, setPosts] = useState(postsData);

  const post = posts.find(post => post.id === id);

  const handleCommentSubmit = () => {
    if (comment.trim() === '') return;

    const newComment = {
      id: Date.now().toString(),
      text: comment
    };

    const updatedPosts = posts.map(postItem => 
      postItem.id === id ? { ...postItem, comments: [...postItem.comments, newComment] } : postItem
    );

    setPosts(updatedPosts);
    setComment('');
  };

  return (
    <div className="container blog-post">
      <button className="back-to-home" onClick={() => navigate('/')}>กลับสู่หน้าแรก</button>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
      <div className="comments">
        <h2>ความคิดเห็น</h2>
        {post.comments.map(c => (
          <div key={c.id}>{c.text}</div>
        ))}
        <textarea
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          placeholder="เขียนความคิดเห็นของคุณที่นี่"
        />
        <button onClick={handleCommentSubmit}>ส่งความคิดเห็น</button>
      </div>
    </div>
  );
};

export default BlogPost;
