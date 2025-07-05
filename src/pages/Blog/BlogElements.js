import styled from 'styled-components';

export const BlogContainer = styled.div`
  min-height: 100vh;
  padding: 5rem calc((100vw - 1300px) / 2);
  background: #f9f9f9;
  color: #000;
  max-width: 1300px;
  margin: 0 auto;
  
  @media screen and (max-width: 1400px) {
    padding: 5rem 50px;
  }
  
  @media screen and (max-width: 768px) {
    padding: 5rem 20px;
  }
`;

export const BlogHeader = styled.div`
  text-align: center;
  margin-bottom: 4rem;
  padding: 0 20px;
`;

export const BlogTitle = styled.h1`
  font-size: clamp(2rem, 5vw, 3rem);
  margin-bottom: 1rem;
  color: #333;
  font-weight: 700;
  line-height: 1.2;
`;

export const BlogSubtitle = styled.p`
  font-size: 1.2rem;
  color: #666;
  max-width: 700px;
  margin: 0 auto;
  line-height: 1.6;
`;

export const BlogGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-gap: 2rem;
  padding: 0 1rem;
  
  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 0;
  }
`;

export const BlogCard = styled.div`
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  height: 100%;
  cursor: pointer;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
  }
`;

export const BlogImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  transition: transform 0.3s ease;
  
  ${BlogCard}:hover & {
    transform: scale(1.03);
  }
`;

export const BlogContent = styled.div`
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  flex: 1;
`;

export const BlogDate = styled.p`
  color: #6c63ff;
  font-size: 0.9rem;
  margin-bottom: 0.5rem;
  font-weight: 600;
`;

export const BlogCardTitle = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 0.75rem;
  color: #333;
  line-height: 1.3;
  
  a {
    color: inherit;
    text-decoration: none;
    
    &:hover {
      color: #6c63ff;
    }
  }
`;

export const BlogExcerpt = styled.p`
  color: #666;
  margin-bottom: 1.5rem;
  line-height: 1.6;
  flex: 1;
`;

export const ReadMoreLink = styled.span`
  color: #6c63ff;
  font-weight: 600;
  display: inline-block;
  margin-top: auto;
  align-self: flex-start;
  transition: all 0.3s ease;
  
  &::after {
    content: '→';
    margin-left: 5px;
    display: inline-block;
    transition: transform 0.3s ease;
  }
  
  ${BlogCard}:hover & {
    color: #5549f7;
    transform: translateX(5px);
  }
  
  ${BlogCard}:hover &::after {
    transform: translateX(3px);
  }
`;
