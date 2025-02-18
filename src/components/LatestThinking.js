import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import doctor from '../assest/doctor.png';
import rcb from '../assest/rcb.png';
import cyclinder from '../assest/cyclinder.png';
import brain from '../assest/brain.png';


const ThinkingSection = styled.section`
  padding: 80px 0;
  background: white;
  overflow: hidden;
`;

const Container = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 40px;
  position: relative;
`;

const Title = styled.h2`
  font-size: 30px;
  color: #333;
  margin-bottom: 48px;
  font-weight: 600;
`;

const SliderContainer = styled.div`
  position: relative;
  margin: 0 -40px;
`;

const SliderWrapper = styled.div`
  display: flex;
  transition: transform 0.3s ease;
  transform: translateX(${props => props.$offset}px);
  padding: 0 40px;
  gap: 32px;
`;

const ArticleCard = styled.div`
  flex: 0 0 100%;
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }

  @media (min-width: 768px) {
    flex: 0 0 calc(50% - 16px);
  }

  @media (min-width: 1200px) {
    flex: 0 0 calc(33.333% - 24px);
  }
`;

const ImageWrapper = styled.div`
  overflow: hidden;
  position: relative;
  height: 240px;
`;

const ArticleImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;

  ${ArticleCard}:hover & {
    transform: scale(1.1);
  }
`;

const ArticleContent = styled.div`
  padding: 24px;
`;

const ArticleTitle = styled.h3`
  font-size: 24px;
  color: #333;
  margin-bottom: 16px;
  line-height: 1.4;
  font-weight: 500;
  transition: color 0.3s ease;

  ${ArticleCard}:hover & {
    color: #0066cc;
  }
`;
const ArticleDescription = styled.p`
  color: #666;
  font-size: 16px;
  line-height: 1.6;
`;

const NavigationButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: ${props => props.$left ? '#E5E5E5' : '#0066cc'};
  color: ${props => props.$left ? '#333' : 'white'};
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2;
  transition: all 0.3s ease;
  
  &:hover {
    background: ${props => props.$left ? '#D5D5D5' : '#0052a3'};
  }

  ${props => props.$left ? `
    left: 0;
  ` : `
    right: 0;
  `}
`;

const BottomContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 48px;
  padding: 0 40px;
`;

const ExploreButton = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;
  color: #333;
  background: none;
  border: none;
  font-size: 18px;
  font-weight: bold;
  cursor: pointer;
  padding: 0;
  position: relative;
  
  &:after {
    content: '->';
    font-size: 16px;
    margin-left: 8px;
    color: #0066cc;
    position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 26px;
  height: 26px;
  border-radius: 50%;
  background: #0066cc;
  color: white;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2;
  left:100%;
  }
`;

const LatestThinking = () => {
  const [offset, setOffset] = useState(0);
  const wrapperRef = useRef(null);

  const articles = [
    {
      title: "Date warehouse vs. Data lake vs. Data lakehouse",
      description: "Check out our definitive guide to data storage solutions to figure out which one will serve your business needs best.",
      image: cyclinder
    },
    {
      title: "What are the costs associated with facial recognition system development?",
      description: "Explore the factors influencing facial recognition system costs and get a cost estimate for a custom solution.",
      image: brain
    },
    {
      title: "Evaluating the Cost of AI Implementation in Business",
      description: "Explore the cost factors of implementing AI solutions and how it can reduce future operational expenses.",
      image: rcb
    },
    {
      title: "AI in Healthcare: Why and how to implement",
      description: "Exploring AI applications in healthcare, and how firms can help you implement solutions effectively.",
      image: doctor
    },{
      title: "Date warehouse vs. Data lake vs. Data lakehouse",
      description: "Check out our definitive guide to data storage solutions to figure out which one will serve your business needs best.",
      image: cyclinder
    },
    {
      title: "What are the costs associated with facial recognition system development?",
      description: "Explore the factors influencing facial recognition system costs and get a cost estimate for a custom solution.",
      image: brain
    },
    {
      title: "Evaluating the Cost of AI Implementation in Business",
      description: "Explore the cost factors of implementing AI solutions and how it can reduce future operational expenses.",
      image: rcb
    },
    {
      title: "AI in Healthcare: Why and how to implement",
      description: "Exploring AI applications in healthcare, and how firms can help you implement solutions effectively.",
      image: doctor
    }
  ];

  const slideLeft = () => {
    const newOffset = offset + wrapperRef.current.offsetWidth;
    setOffset(Math.min(0, newOffset));
  };

  const slideRight = () => {
    const maxOffset = -(wrapperRef.current.scrollWidth - wrapperRef.current.offsetWidth);
    const newOffset = offset - wrapperRef.current.offsetWidth;
    setOffset(Math.max(maxOffset, newOffset));
  };

  return (
    <ThinkingSection>
    <Container>
      <Title>Latest thinking</Title>
      
      <SliderContainer>
        {/* {offset < 0 && ( */}
          <NavigationButton $left onClick={slideLeft}>
            ←
          </NavigationButton>
        {/* )} */}
        
        <SliderWrapper ref={wrapperRef} $offset={offset}>
          {articles.map((article, index) => (
            <ArticleCard key={index}>
              <ImageWrapper>
                <ArticleImage src={article.image} alt={article.title} />
              </ImageWrapper>
              <ArticleContent>
                <ArticleTitle>{article.title}</ArticleTitle>
                <ArticleDescription>{article.description}</ArticleDescription>
              </ArticleContent>
            </ArticleCard>
          ))}
        </SliderWrapper>

          <NavigationButton onClick={slideRight}>
            →
          </NavigationButton>
         </SliderContainer>

      <BottomContainer>
        <ExploreButton>
          Explore more insights 
        </ExploreButton>
      </BottomContainer>
    </Container>
  </ThinkingSection>
  );
};

export default LatestThinking;