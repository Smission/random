import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { 
  BlogContainer, 
  BlogHeader, 
  BlogTitle, 
  BlogContent as PostContent,
  BlogDate,
  BlogImage
} from './BlogElements';

// Import blog posts
import blogPosts from '../../data/blogPosts.json';

// Import images
import post1Image from '../../assets/images/post1.JPG';

const Post = ({ match, history }) => {
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const { slug } = match.params;

  useEffect(() => {
    console.log('Post component mounted with slug:', slug);
    setLoading(true);
    
    // Find post by slug
    const foundPost = blogPosts.find(p => p.slug === slug);
    console.log('Found post by slug:', foundPost);
    
    if (foundPost) {
      console.log('Setting post:', foundPost);
      setPost(foundPost);
      setLoading(false);
      return;
    }
    
    // If not found, go to blog home
    console.log('Post not found, redirecting to /blog');
    history.push('/blog');
    
    // Cleanup function
    return () => {
      // Any cleanup code if needed
    };
    
  }, [slug, history]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!post) {
    return null;
  }

  return (
    <BlogContainer>
      <article>
        <BlogHeader>
          {post.id === 1 && <BlogImage src={post1Image} alt={post.title} />}
          <BlogTitle>{post.title}</BlogTitle>
          <BlogDate>{new Date(post.date).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
          })}</BlogDate>
        </BlogHeader>
        
        {post.coverImage && (
          <BlogImage 
            src={post.coverImage} 
            alt={post.title} 
            style={{ marginBottom: '2rem' }}
          />
        )}
        
        <PostContent>
          {post.content.split('\n\n').map((section, i) => {
            if (section.startsWith('# ')) {
              return <h2 key={i} style={{ margin: '2rem 0 1rem', color: '#333' }}>{section.substring(2)}</h2>;
            }
            if (section.startsWith('## ')) {
              return <h3 key={i} style={{ margin: '1.5rem 0 0.75rem', color: '#444' }}>{section.substring(3)}</h3>;
            }
            if (section.startsWith('```')) {
              const codeContent = section.split('\n').slice(1, -1).join('\n');
              return (
                <pre key={i} style={{
                  background: '#f5f5f5',
                  padding: '1rem',
                  borderRadius: '5px',
                  overflowX: 'auto',
                  margin: '1.5rem 0',
                  fontSize: '0.9rem',
                  lineHeight: '1.5',
                  fontFamily: 'monospace',
                }}>
                  <code>{codeContent}</code>
                </pre>
              );
            }
            return <p key={i} style={{ marginBottom: '1rem', lineHeight: '1.6' }}>{section}</p>;
          })}
        </PostContent>
        
        <div style={{ marginTop: '3rem', textAlign: 'center' }}>
          <button 
            onClick={() => history.goBack()}
            style={{
              padding: '0.5rem 1.5rem',
              background: '#6c63ff',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
              fontSize: '1rem',
              transition: 'background 0.3s ease'
            }}
            onMouseOver={(e) => e.target.style.background = '#5a52d3'}
            onMouseOut={(e) => e.target.style.background = '#6c63ff'}
          >
            ← Back to Blog
          </button>
        </div>
      </article>
    </BlogContainer>
  );
}

export default withRouter(Post);
