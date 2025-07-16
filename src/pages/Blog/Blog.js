import React, { useState, useEffect, useCallback } from 'react';
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
  ReadMoreLink,
  PaginationContainer,
  PageButton
} from './BlogElements';

// Import blog posts
import blogPosts from '../../data/blogPosts.json';

// Import images
import post1Image from '../../assets/images/post1.JPG';
import post2Image from '../../assets/images/post2.JPG';

const POSTS_PER_PAGE = 6; // Number of posts per page

const Blog = () => {
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  // Calculate pagination
  const updatePagination = useCallback((allPosts) => {
    const sortedPosts = [...allPosts].sort((a, b) => new Date(b.date) - new Date(a.date));
    setPosts(sortedPosts);
    setTotalPages(Math.ceil(sortedPosts.length / POSTS_PER_PAGE));
    // Reset to first page when posts change
    setCurrentPage(1);
  }, []);

  useEffect(() => {
    updatePagination(blogPosts);
  }, [updatePagination]);

  // Get current posts for the current page
  const indexOfLastPost = currentPage * POSTS_PER_PAGE;
  const indexOfFirstPost = indexOfLastPost - POSTS_PER_PAGE;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Handle previous/next page
  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };
  
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
          {currentPosts.map((post) => (
            <Link 
              to={`/blog/${post.slug}`} 
              key={post.id} 
              style={{ textDecoration: 'none' }}
            >
              <BlogCard>
                <BlogImage 
                  src={post.id === 1 ? post1Image : post2Image} 
                  alt={post.title} 
                  className={post.id === 1 ? 'portrait' : 'landscape'}
                />
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

        {totalPages > 1 && (
          <PaginationContainer>
            <PageButton 
              onClick={handlePrevPage} 
              disabled={currentPage === 1}
              aria-label="Previous page"
            >
              «
            </PageButton>
            
            {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
              // Show first 2 pages, current page, and last 2 pages
              let pageNum;
              if (currentPage <= 3) {
                pageNum = i + 1;
              } else if (currentPage >= totalPages - 2) {
                pageNum = totalPages - 4 + i;
              } else {
                pageNum = currentPage - 2 + i;
              }
              
              if (pageNum > 0 && pageNum <= totalPages) {
                return (
                  <PageButton
                    key={pageNum}
                    onClick={() => paginate(pageNum)}
                    active={currentPage === pageNum}
                    aria-label={`Page ${pageNum}`}
                  >
                    {pageNum}
                  </PageButton>
                );
              }
              return null;
            })}
            
            <PageButton 
              onClick={handleNextPage} 
              disabled={currentPage === totalPages}
              aria-label="Next page"
            >
              »
            </PageButton>
          </PaginationContainer>
        )}
    </BlogContainer>
  );
};

export default Blog;
