import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  BlogContainer, 
  BlogHeader, 
  BlogTitle, 
  BlogSubtitle, 
  BlogGrid, 
  BlogCard, 
  BlogImage, 
  BlogContent, 
  BlogDate, 
  BlogCardTitle, 
  BlogExcerpt, 
  ReadMoreLink 
} from './BlogElements';

// Import blog posts
import blogPosts from '../../data/blogPosts.json';

// Import images
import post1Image from '../../assets/images/post1.JPG';

const Blog = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Sort posts by date
    const sortedPosts = [...blogPosts].sort((a, b) => new Date(b.date) - new Date(a.date));
    setPosts(sortedPosts);
  }, []);
  
  // Format date to be more readable
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  return (
    <BlogContainer>
        <BlogHeader>
          <BlogTitle>My Blog</BlogTitle>
          <BlogSubtitle>Thoughts, ideas, and experiences in tech and beyond</BlogSubtitle>
        </BlogHeader>
        
        <BlogGrid>
          {posts.map((post) => (
            <Link 
              to={`/blog/${post.slug}`} 
              key={post.id} 
              style={{ textDecoration: 'none' }}
            >
              <BlogCard>
                {post.id === 1 && <BlogImage src={post1Image} alt={post.title} />}
                <BlogContent>
                  <BlogDate>{formatDate(post.date)}</BlogDate>
                  <BlogCardTitle>{post.title}</BlogCardTitle>
                  <BlogExcerpt>{post.excerpt}</BlogExcerpt>
                  <ReadMoreLink as="div">Read More →</ReadMoreLink>
                </BlogContent>
              </BlogCard>
            </Link>
          ))}
        </BlogGrid>
    </BlogContainer>
  );
};

export default Blog;
