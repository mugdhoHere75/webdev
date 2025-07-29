import React from "react";
import { useParams, Link } from "react-router-dom";

const dummyAuthors = {
  1: { name: "Author Name", bio: "Senior Content Writer. Passionate about tech and education.", role: "Content Writer", location: "New York, USA", email: "author@example.com" },
  2: { name: "John Smith", bio: "React developer and blogger. Loves sharing knowledge.", role: "Frontend Developer", location: "San Francisco, USA", email: "john.smith@example.com" },
  3: { name: "Sarah Johnson", bio: "Remote work advocate and productivity coach.", role: "Productivity Coach", location: "Austin, USA", email: "sarah.j@example.com" },
  4: { name: "Mike Davis", bio: "JavaScript enthusiast and educator.", role: "JavaScript Instructor", location: "London, UK", email: "mike.davis@example.com" },
  5: { name: "Emily Wilson", bio: "Tech writer and open source contributor.", role: "Technical Writer", location: "Toronto, Canada", email: "emily.wilson@example.com" },
  6: { name: "David Brown", bio: "Data analyst and part-time blogger.", role: "Data Analyst", location: "Chicago, USA", email: "david.brown@example.com" },
  7: { name: "Anna Lee", bio: "Full-stack developer. Enjoys teaching coding.", role: "Full-stack Developer", location: "Seoul, South Korea", email: "anna.lee@example.com" },
  8: { name: "Brian Kim", bio: "React and Node.js specialist.", role: "Software Engineer", location: "Vancouver, Canada", email: "brian.kim@example.com" },
  9: { name: "Cathy Zhang", bio: "Custom hooks expert and speaker.", role: "React Specialist", location: "Shanghai, China", email: "cathy.zhang@example.com" },
  10: { name: "Dan Miller", bio: "UI/UX designer and React fan.", role: "UI/UX Designer", location: "Berlin, Germany", email: "dan.miller@example.com" },
  11: { name: "Ella Perez", bio: "Front-end developer and mentor.", role: "Frontend Developer", location: "Madrid, Spain", email: "ella.perez@example.com" },
  12: { name: "Frank Moore", bio: "Remote work consultant.", role: "Consultant", location: "Dublin, Ireland", email: "frank.moore@example.com" },
  13: { name: "Grace Lee", bio: "Team lead and agile coach.", role: "Team Lead", location: "Singapore", email: "grace.lee@example.com" },
  14: { name: "Henry Clark", bio: "Breaks down complex topics simply.", role: "Technical Educator", location: "Sydney, Australia", email: "henry.clark@example.com" },
  15: { name: "Ivy Chen", bio: "New to remote work, learning fast!", role: "Junior Developer", location: "Taipei, Taiwan", email: "ivy.chen@example.com" },
  16: { name: "Jack Wilson", bio: "Productivity enthusiast and blogger.", role: "Blogger", location: "Boston, USA", email: "jack.wilson@example.com" },
  17: { name: "Karen Young", bio: "JavaScript tutor and meetup organizer.", role: "Tutor", location: "Melbourne, Australia", email: "karen.young@example.com" },
  18: { name: "Leo Turner", bio: "Web developer and ES6 fan.", role: "Web Developer", location: "Manchester, UK", email: "leo.turner@example.com" },
  19: { name: "Mona Patel", bio: "Student and aspiring developer.", role: "Student", location: "Delhi, India", email: "mona.patel@example.com" },
  20: { name: "Nina Brown", bio: "Enjoys making code accessible.", role: "Accessibility Advocate", location: "Oslo, Norway", email: "nina.brown@example.com" },
  21: { name: "Oscar Green", bio: "Learning ES6 and loving it!", role: "Junior Developer", location: "Cape Town, South Africa", email: "oscar.green@example.com" },
  100: { name: "You", bio: "This is you!", role: "Guest User", location: "Your City", email: "you@example.com" },
  101: { name: "Alex Morgan", bio: "Tech enthusiast and writer.", role: "Blogger", location: "London, UK", email: "alex.morgan@example.com" },
  102: { name: "Priya Singh", bio: "Researcher and avid reader.", role: "Researcher", location: "Delhi, India", email: "priya.singh@example.com" },
  103: { name: "Lucas Chen", bio: "Software engineer and mentor.", role: "Software Engineer", location: "Taipei, Taiwan", email: "lucas.chen@example.com" },
  104: { name: "Maria Garcia", bio: "Content creator and educator.", role: "Content Creator", location: "Madrid, Spain", email: "maria.garcia@example.com" },
  105: { name: "Omar Al-Farsi", bio: "Full-stack developer.", role: "Full-stack Developer", location: "Dubai, UAE", email: "omar.alfarsi@example.com" },
  106: { name: "Sophie Dubois", bio: "UI/UX designer.", role: "UI/UX Designer", location: "Paris, France", email: "sophie.dubois@example.com" },
};

function getInitials(name) {
  return name
    .split(' ')
    .map(part => part[0])
    .join('')
    .toUpperCase();
}

function AuthorProfile() {
  const { authorId } = useParams();
  const author = dummyAuthors[authorId] || { name: "Unknown", bio: "No bio available.", role: "", location: "", email: "" };
  // Dummy stats
  const postCount = Math.floor(Math.random() * 10) + 1;
  const commentCount = Math.floor(Math.random() * 30) + 1;
  return (
    <div style={{ background: '#f4f8ff', minHeight: '100vh', padding: '40px 0' }}>
      <div style={{ maxWidth: 400, margin: '0 auto', background: '#fff', borderRadius: 16, boxShadow: '0 4px 24px rgba(45,91,227,0.10)', padding: 32, textAlign: 'center' }}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: 16 }}>
          <div style={{ width: 80, height: 80, borderRadius: '50%', background: '#a02c2c', color: '#fff', fontSize: 32, fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 12, boxShadow: '0 2px 8px rgba(45,91,227,0.10)' }}>
            {getInitials(author.name)}
          </div>
          <h2 style={{ margin: 0, fontSize: '2em', color: '#222' }}>{author.name}</h2>
          <div style={{ color: '#2563eb', fontWeight: 500, marginBottom: 4, fontSize: '1.1em' }}>{author.role}</div>
          <div style={{ color: '#888', fontSize: '1em', marginBottom: 12 }}>{author.location}</div>
        </div>
        <div style={{ color: '#444', fontSize: '1.08em', marginBottom: 18 }}>{author.bio}</div>
        <div style={{ display: 'flex', justifyContent: 'center', gap: 24, marginBottom: 18 }}>
          <div style={{ color: '#2563eb', fontWeight: 600 }}><span role="img" aria-label="posts">📝</span> {postCount} Posts</div>
          <div style={{ color: '#2563eb', fontWeight: 600 }}><span role="img" aria-label="comments">💬</span> {commentCount} Comments</div>
        </div>
        {author.email && <a href={`mailto:${author.email}`} style={{ display: 'inline-block', background: '#2563eb', color: '#fff', borderRadius: 8, padding: '10px 24px', textDecoration: 'none', fontWeight: 600, fontSize: '1em', marginBottom: 18 }}>Contact</a>}
        <div style={{ marginTop: 18 }}>
          <Link to="/" style={{ color: '#2563eb', textDecoration: 'underline', fontWeight: 500 }}>← Back to Feed</Link>
        </div>
      </div>
    </div>
  );
}

export default AuthorProfile; 