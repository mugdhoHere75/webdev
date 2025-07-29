import React from "react";
import { useParams, Link } from "react-router-dom";

const dummyAuthors = {
  1: { name: "Author Name", bio: "Senior Content Writer. Passionate about tech and education.", role: "Content Writer", location: "New York, USA", email: "author@example.com", tagline: "Writing is my superpower." },
  2: { name: "John Smith", bio: "React developer and blogger. Loves sharing knowledge.", role: "Frontend Developer", location: "San Francisco, USA", email: "john.smith@example.com", tagline: "Code. Coffee. Repeat." },
  3: { name: "Sarah Johnson", bio: "Remote work advocate and productivity coach.", role: "Productivity Coach", location: "Austin, USA", email: "sarah.j@example.com", tagline: "Helping you work smarter." },
  4: { name: "Mike Davis", bio: "JavaScript enthusiast and educator.", role: "JavaScript Instructor", location: "London, UK", email: "mike.davis@example.com", tagline: "Teaching JS, one line at a time." },
  5: { name: "Emily Wilson", bio: "Tech writer and open source contributor.", role: "Technical Writer", location: "Toronto, Canada", email: "emily.wilson@example.com", tagline: "Open source for everyone." },
  6: { name: "David Brown", bio: "Data analyst and part-time blogger.", role: "Data Analyst", location: "Chicago, USA", email: "david.brown@example.com", tagline: "Turning data into stories." },
  7: { name: "Anna Lee", bio: "Full-stack developer. Enjoys teaching coding.", role: "Full-stack Developer", location: "Seoul, South Korea", email: "anna.lee@example.com", tagline: "Building the web, one app at a time." },
  8: { name: "Brian Kim", bio: "React and Node.js specialist.", role: "Software Engineer", location: "Vancouver, Canada", email: "brian.kim@example.com", tagline: "Reacting to code challenges." },
  9: { name: "Cathy Zhang", bio: "Custom hooks expert and speaker.", role: "React Specialist", location: "Shanghai, China", email: "cathy.zhang@example.com", tagline: "Hooked on React." },
  10: { name: "Dan Miller", bio: "UI/UX designer and React fan.", role: "UI/UX Designer", location: "Berlin, Germany", email: "dan.miller@example.com", tagline: "Design is intelligence made visible." },
  11: { name: "Ella Perez", bio: "Front-end developer and mentor.", role: "Frontend Developer", location: "Madrid, Spain", email: "ella.perez@example.com", tagline: "Mentoring the next generation." },
  12: { name: "Frank Moore", bio: "Remote work consultant.", role: "Consultant", location: "Dublin, Ireland", email: "frank.moore@example.com", tagline: "Work from anywhere." },
  13: { name: "Grace Lee", bio: "Team lead and agile coach.", role: "Team Lead", location: "Singapore", email: "grace.lee@example.com", tagline: "Leading with agility." },
  14: { name: "Henry Clark", bio: "Breaks down complex topics simply.", role: "Technical Educator", location: "Sydney, Australia", email: "henry.clark@example.com", tagline: "Simplicity is the ultimate sophistication." },
  15: { name: "Ivy Chen", bio: "New to remote work, learning fast!", role: "Junior Developer", location: "Taipei, Taiwan", email: "ivy.chen@example.com", tagline: "Learning by doing." },
  16: { name: "Jack Wilson", bio: "Productivity enthusiast and blogger.", role: "Blogger", location: "Boston, USA", email: "jack.wilson@example.com", tagline: "Productivity is my passion." },
  17: { name: "Karen Young", bio: "JavaScript tutor and meetup organizer.", role: "Tutor", location: "Melbourne, Australia", email: "karen.young@example.com", tagline: "Teaching is learning twice." },
  18: { name: "Leo Turner", bio: "Web developer and ES6 fan.", role: "Web Developer", location: "Manchester, UK", email: "leo.turner@example.com", tagline: "Modern JS for modern web." },
  19: { name: "Mona Patel", bio: "Student and aspiring developer.", role: "Student", location: "Delhi, India", email: "mona.patel@example.com", tagline: "Dreaming in code." },
  20: { name: "Nina Brown", bio: "Enjoys making code accessible.", role: "Accessibility Advocate", location: "Oslo, Norway", email: "nina.brown@example.com", tagline: "Code for everyone." },
  21: { name: "Oscar Green", bio: "Learning ES6 and loving it!", role: "Junior Developer", location: "Cape Town, South Africa", email: "oscar.green@example.com", tagline: "Always learning." },
  100: { name: "You", bio: "This is you!", role: "Guest User", location: "Your City", email: "you@example.com", tagline: "Be your own hero." },
  101: { name: "Alex Morgan", bio: "Tech enthusiast and writer.", role: "Blogger", location: "London, UK", email: "alex.morgan@example.com", tagline: "Writing the future." },
  102: { name: "Priya Singh", bio: "Researcher and avid reader.", role: "Researcher", location: "Delhi, India", email: "priya.singh@example.com", tagline: "Curious by nature." },
  103: { name: "Lucas Chen", bio: "Software engineer and mentor.", role: "Software Engineer", location: "Taipei, Taiwan", email: "lucas.chen@example.com", tagline: "Mentoring with code." },
  104: { name: "Maria Garcia", bio: "Content creator and educator.", role: "Content Creator", location: "Madrid, Spain", email: "maria.garcia@example.com", tagline: "Creating, sharing, inspiring." },
  105: { name: "Omar Al-Farsi", bio: "Full-stack developer.", role: "Full-stack Developer", location: "Dubai, UAE", email: "omar.alfarsi@example.com", tagline: "Stacking up skills." },
  106: { name: "Sophie Dubois", bio: "UI/UX designer.", role: "UI/UX Designer", location: "Paris, France", email: "sophie.dubois@example.com", tagline: "Designing with heart." },
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
  const author = dummyAuthors[authorId] || { name: "Unknown", bio: "No bio available.", role: "", location: "", email: "", tagline: "" };
  // Dummy stats
  const postCount = Math.floor(Math.random() * 10) + 1;
  const commentCount = Math.floor(Math.random() * 30) + 1;
  return (
    <div style={{ background: 'linear-gradient(135deg, #f4f8ff 60%, #ffe6e6 100%)', minHeight: '100vh', padding: '40px 0' }}>
      <div style={{ maxWidth: 420, margin: '0 auto', background: '#fff', borderRadius: 20, border: '1.5px solid #e3e8f0', boxShadow: '0 8px 32px rgba(160,44,44,0.10)', padding: 36, textAlign: 'center', position: 'relative' }}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: 18 }}>
          <div style={{ width: 90, height: 90, borderRadius: '50%', background: '#a02c2c', color: '#fff', fontSize: 36, fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 14, boxShadow: '0 4px 16px rgba(160,44,44,0.18)' }}>
            {getInitials(author.name)}
          </div>
          <h2 style={{ margin: 0, fontSize: '2.2em', color: '#222', letterSpacing: '-1px' }}>{author.name}</h2>
          {author.tagline && <div style={{ color: '#a02c2c', fontWeight: 500, fontSize: '1.08em', margin: '4px 0 8px 0', fontStyle: 'italic' }}>&ldquo;{author.tagline}&rdquo;</div>}
          <div style={{ color: '#2563eb', fontWeight: 500, marginBottom: 4, fontSize: '1.13em' }}>{author.role}</div>
          <div style={{ color: '#888', fontSize: '1.03em', marginBottom: 14 }}>{author.location}</div>
        </div>
        <hr style={{ border: 0, borderTop: '1.5px solid #f0f0f0', margin: '18px 0 20px 0' }} />
        <div style={{ color: '#444', fontSize: '1.13em', marginBottom: 22 }}>{author.bio}</div>
        <div style={{ display: 'flex', justifyContent: 'center', gap: 28, marginBottom: 22 }}>
          <div style={{ color: '#a02c2c', fontWeight: 600 }}><span role="img" aria-label="posts">📝</span> {postCount} Posts</div>
          <div style={{ color: '#2563eb', fontWeight: 600 }}><span role="img" aria-label="comments">💬</span> {commentCount} Comments</div>
        </div>
        {author.email && <a href={`mailto:${author.email}`} style={{ display: 'inline-block', background: '#a02c2c', color: '#fff', borderRadius: 10, padding: '12px 30px', textDecoration: 'none', fontWeight: 600, fontSize: '1.08em', marginBottom: 18, boxShadow: '0 2px 8px rgba(160,44,44,0.10)', transition: 'background 0.2s' }} onMouseOver={e => e.target.style.background='#d32f2f'} onMouseOut={e => e.target.style.background='#a02c2c'}>Contact</a>}
        <div style={{ marginTop: 22 }}>
          <Link to="/" style={{ color: '#2563eb', textDecoration: 'underline', fontWeight: 500, fontSize: '1.08em' }}>← Back to Feed</Link>
        </div>
      </div>
    </div>
  );
}

export default AuthorProfile; 