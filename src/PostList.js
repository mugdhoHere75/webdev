import React, { useState } from "react";
import Post from "./Post";
import Pagination from "./Pagination";

// Dummy data for posts
const initialPosts = [
  {
    id: 1,
    title: "Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    author: { id: 101, name: "Alex Morgan" },
    date: "7 January 2025",
    image: true,
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    reactions: ["👍", "❤️", "😂", "👏", "😮"],
    comments: [
      {
        id: 1,
        author: { id: 102, name: "Priya Singh" },
        date: "7 February 2025",
        content: "This is a really insightful article. I particularly enjoyed the section about the main content. The author has done a great job explaining complex concepts in a simple way.",
        reactions: ["👍", "❤️", "😂"],
      },
      {
        id: 2,
        author: { id: 103, name: "Lucas Chen" },
        date: "6 February 2025",
        content: "I found this article very helpful for my research. The examples provided are clear and easy to understand. Looking forward to more content like this.",
        reactions: ["👍", "❤️", "😂"],
      },
      {
        id: 3,
        author: { id: 104, name: "Maria Garcia" },
        date: "6 February 2025",
        content: "Great read! The author has a unique perspective on this topic. I would love to see more articles from this writer in the future.",
        reactions: ["👍", "❤️", "😂"],
      },
      {
        id: 4,
        author: { id: 105, name: "Omar Al-Farsi" },
        date: "6 February 2025",
        content: "This article provides valuable insights that I can apply to my work. The practical examples make it much easier to understand the concepts.",
        reactions: ["👍", "❤️", "😂"],
      },
      {
        id: 5,
        author: { id: 106, name: "Sophie Dubois" },
        date: "7 February 2025",
        content: "I appreciate the depth of analysis in this article. The author clearly knows their subject matter well. Highly recommended reading.",
        reactions: ["👍", "❤️", "😂"],
      },
    ],
  },
  {
    id: 2,
    title: "Understanding React Hooks in Depth",
    desc: "A comprehensive guide to using React Hooks effectively in your projects. Learn about useState, useEffect, and custom hooks.",
    author: { id: 2, name: "John Smith" },
    date: "15 January 2025",
    image: true,
    content: "React Hooks let you use state and other React features without writing a class.",
    reactions: ["👍", "❤️", "😂", "👏", "😮"],
    comments: [
      {
        id: 1,
        author: { id: 7, name: "Anna Lee" },
        date: "16 January 2025",
        content: "Hooks have made my code so much cleaner! Thanks for the detailed explanation.",
        reactions: ["👍", "❤️", "😂"],
      },
      {
        id: 2,
        author: { id: 8, name: "Brian Kim" },
        date: "16 January 2025",
        content: "I struggled with useEffect before, but this article cleared things up.",
        reactions: ["👍", "❤️", "😂"],
      },
      {
        id: 3,
        author: { id: 9, name: "Cathy Zhang" },
        date: "17 January 2025",
        content: "Great examples! Can you write more about custom hooks?",
        reactions: ["👍", "❤️", "😂"],
      },
      {
        id: 4,
        author: { id: 10, name: "Dan Miller" },
        date: "17 January 2025",
        content: "Very helpful for beginners and advanced users alike.",
        reactions: ["👍", "❤️", "😂"],
      },
      {
        id: 5,
        author: { id: 11, name: "Ella Perez" },
        date: "18 January 2025",
        content: "I love the code samples. They made everything so clear!",
        reactions: ["👍", "❤️", "😂"],
      },
    ],
  },
  {
    id: 3,
    title: "10 Tips for Productive Remote Work",
    desc: "Maximize your productivity while working from home with these proven tips and strategies.",
    author: { id: 3, name: "Sarah Johnson" },
    date: "20 January 2025",
    image: true,
    content: "Remote work can be challenging, but with the right habits, you can thrive.",
    reactions: ["👍", "❤️", "😂", "👏", "😮"],
    comments: [
      {
        id: 1,
        author: { id: 12, name: "Frank Moore" },
        date: "21 January 2025",
        content: "Tip #3 about setting boundaries really resonated with me.",
        reactions: ["👍", "❤️", "😂"],
      },
      {
        id: 2,
        author: { id: 13, name: "Grace Lee" },
        date: "21 January 2025",
        content: "I shared this with my team. Super useful!",
        reactions: ["👍", "❤️", "😂"],
      },
      {
        id: 3,
        author: { id: 14, name: "Henry Clark" },
        date: "22 January 2025",
        content: "The advice about taking breaks is spot on.",
        reactions: ["👍", "❤️", "😂"],
      },
      {
        id: 4,
        author: { id: 15, name: "Ivy Chen" },
        date: "22 January 2025",
        content: "Remote work is new to me, so this was very helpful.",
        reactions: ["👍", "❤️", "😂"],
      },
      {
        id: 5,
        author: { id: 16, name: "Jack Wilson" },
        date: "23 January 2025",
        content: "I appreciate the practical tips. Thanks for sharing!",
        reactions: ["👍", "❤️", "😂"],
      },
    ],
  },
  {
    id: 4,
    title: "A Beginner's Guide to JavaScript ES6",
    desc: "Learn the essentials of ES6, including let/const, arrow functions, and template literals.",
    author: { id: 4, name: "Mike Davis" },
    date: "25 January 2025",
    image: true,
    content: "ES6 introduced many new features that make JavaScript more powerful and easier to write.",
    reactions: ["👍", "❤️", "😂", "👏", "😮"],
    comments: [
      {
        id: 1,
        author: { id: 17, name: "Karen Young" },
        date: "26 January 2025",
        content: "The section on arrow functions was very clear.",
        reactions: ["👍", "❤️", "😂"],
      },
      {
        id: 2,
        author: { id: 18, name: "Leo Turner" },
        date: "26 January 2025",
        content: "I finally understand template literals!",
        reactions: ["👍", "❤️", "😂"],
      },
      {
        id: 3,
        author: { id: 19, name: "Mona Patel" },
        date: "27 January 2025",
        content: "Great for beginners. Would recommend to my classmates.",
        reactions: ["👍", "❤️", "😂"],
      },
      {
        id: 4,
        author: { id: 20, name: "Nina Brown" },
        date: "27 January 2025",
        content: "The examples were easy to follow.",
        reactions: ["👍", "❤️", "😂"],
      },
      {
        id: 5,
        author: { id: 21, name: "Oscar Green" },
        date: "28 January 2025",
        content: "Thanks for making ES6 less intimidating!",
        reactions: ["👍", "❤️", "😂"],
      },
    ],
  },
];

const initialAuthors = {
  1: { name: "Author Name", bio: "Senior Content Writer. Passionate about tech and education.", role: "Content Writer", location: "New York, USA" },
  2: { name: "John Smith", bio: "React developer and blogger. Loves sharing knowledge.", role: "Frontend Developer", location: "San Francisco, USA" },
  3: { name: "Sarah Johnson", bio: "Remote work advocate and productivity coach.", role: "Productivity Coach", location: "Austin, USA" },
  4: { name: "Mike Davis", bio: "JavaScript enthusiast and educator.", role: "JavaScript Instructor", location: "London, UK" },
  5: { name: "Emily Wilson", bio: "Tech writer and open source contributor.", role: "Technical Writer", location: "Toronto, Canada" },
  6: { name: "David Brown", bio: "Data analyst and part-time blogger.", role: "Data Analyst", location: "Chicago, USA" },
  7: { name: "Anna Lee", bio: "Full-stack developer. Enjoys teaching coding.", role: "Full-stack Developer", location: "Seoul, South Korea" },
  8: { name: "Brian Kim", bio: "React and Node.js specialist.", role: "Software Engineer", location: "Vancouver, Canada" },
  9: { name: "Cathy Zhang", bio: "Custom hooks expert and speaker.", role: "React Specialist", location: "Shanghai, China" },
  10: { name: "Dan Miller", bio: "UI/UX designer and React fan.", role: "UI/UX Designer", location: "Berlin, Germany" },
  11: { name: "Ella Perez", bio: "Front-end developer and mentor.", role: "Frontend Developer", location: "Madrid, Spain" },
  12: { name: "Frank Moore", bio: "Remote work consultant.", role: "Consultant", location: "Dublin, Ireland" },
  13: { name: "Grace Lee", bio: "Team lead and agile coach.", role: "Team Lead", location: "Singapore" },
  14: { name: "Henry Clark", bio: "Breaks down complex topics simply.", role: "Technical Educator", location: "Sydney, Australia" },
  15: { name: "Ivy Chen", bio: "New to remote work, learning fast!", role: "Junior Developer", location: "Taipei, Taiwan" },
  16: { name: "Jack Wilson", bio: "Productivity enthusiast and blogger.", role: "Blogger", location: "Boston, USA" },
  17: { name: "Karen Young", bio: "JavaScript tutor and meetup organizer.", role: "Tutor", location: "Melbourne, Australia" },
  18: { name: "Leo Turner", bio: "Web developer and ES6 fan.", role: "Web Developer", location: "Manchester, UK" },
  19: { name: "Mona Patel", bio: "Student and aspiring developer.", role: "Student", location: "Delhi, India" },
  20: { name: "Nina Brown", bio: "Enjoys making code accessible.", role: "Accessibility Advocate", location: "Oslo, Norway" },
  21: { name: "Oscar Green", bio: "Learning ES6 and loving it!", role: "Junior Developer", location: "Cape Town, South Africa" },
  100: { name: "You", bio: "This is you!", role: "Guest User", location: "Your City" },
};

const POSTS_PER_PAGE = 1;

function PostList() {
  const [posts, setPosts] = useState(initialPosts);
  const [authors, setAuthors] = useState(initialAuthors);
  const [page, setPage] = useState(1);
  const [commentInputs, setCommentInputs] = useState({});
  const [yourName, setYourName] = useState(authors[100].name);

  const handleInputChange = (postId, value) => {
    setCommentInputs(inputs => ({ ...inputs, [postId]: value }));
  };

  const handleAddComment = (postId) => {
    const text = (commentInputs[postId] || '').trim();
    if (!text) return;
    // Add comment to the post
    setPosts(posts => posts.map(post => {
      if (post.id !== postId) return post;
      const newComment = {
        id: Date.now(),
        author: { id: 100, name: yourName },
        date: new Date().toLocaleDateString('en-US', { day: 'numeric', month: 'long', year: 'numeric' }),
        content: text,
        reactions: ["👍", "❤️", "😂"],
      };
      return { ...post, comments: [...post.comments, newComment] };
    }));
    setCommentInputs(inputs => ({ ...inputs, [postId]: '' }));
    // Update "You" in authors
    setAuthors(auths => ({ ...auths, 100: { ...auths[100], name: yourName } }));
  };

  const handleYourNameChange = (e) => {
    setYourName(e.target.value);
    setAuthors(auths => ({ ...auths, 100: { ...auths[100], name: e.target.value } }));
  };

  const paginatedPosts = posts.slice((page - 1) * POSTS_PER_PAGE, page * POSTS_PER_PAGE);
  return (
    <div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 8, margin: '16px 0 24px 0', justifyContent: 'flex-end' }}>
        <span style={{ fontWeight: 500, color: '#2563eb' }}>Your name:</span>
        <input
          style={{ border: '1.5px solid #dbeafe', borderRadius: 6, padding: '6px 10px', fontSize: '1em', minWidth: 80 }}
          value={yourName}
          onChange={handleYourNameChange}
          placeholder="Enter your name"
        />
      </div>
      <div className="section-header">Section &gt; Sub-section</div>
      {paginatedPosts.map(post => (
        <div className="post-card" key={post.id}>
          <div className="post-header">
            <div className="post-title">{post.title}</div>
            <div className="post-desc">{post.desc}</div>
          </div>
          <Post post={post} />
          <div className="comments-section">
            <div className="comments-header">{post.comments.length} Comments</div>
            <div className="comment-input-row">
              <input
                className="comment-input"
                placeholder="Write your comment..."
                value={commentInputs[post.id] || ''}
                onChange={e => handleInputChange(post.id, e.target.value)}
                onKeyDown={e => { if (e.key === 'Enter') handleAddComment(post.id); }}
              />
              <button className="comment-send-btn" onClick={() => handleAddComment(post.id)}>▶</button>
            </div>
            <div className="comment-list">
              {post.comments.map(comment => (
                <div key={comment.id}>
                  <Post.Comment comment={comment} />
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
      <Pagination
        currentPage={page}
        totalPages={Math.ceil(posts.length / POSTS_PER_PAGE)}
        onPageChange={setPage}
      />
    </div>
  );
}

PostList.defaultProps = {};

export default PostList; 