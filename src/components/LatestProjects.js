import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import mobile from '../assest/mobile.png';
import man from '../assest/manbuilding.png';
import col from '../assest/image1.png';
import vol from '../assest/client.png';

const ProjectsSection = styled.section`
  padding: 80px 0;
  background: #fff;
  overflow: hidden;
`;

const Container = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 20px;
   position: relative;
`;

const Title = styled.h2`
  font-size: 30px;
  margin-bottom: 40px;
`;

const ProjectsContainer = styled.div`
  position: relative;
`;

const ProjectsWrapper = styled.div`
  display: flex;
  gap: 24px;
  transition: transform 0.3s ease;
  transform: translateX(${props => props.$offset}px);
`;

const ProjectCard = styled.div`
  flex: 0 0 calc(33.333% - 16px);
  min-width: calc(33.333% - 16px);
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  @media (max-width: 1024px) {
    flex: 0 0 calc(50% - 12px);
    min-width: calc(50% - 12px);
  }

  @media (max-width: 768px) {
    flex: 0 0 100%;
    min-width: 100%;
  }
`;

const ProjectImage = styled.img`
  width: 100%;
  height: 240px;
  object-fit: cover;
   transition: transform 0.5s ease;

  ${ProjectCard}:hover & {
    transform: scale(1.1);
  }
`;

const ProjectContent = styled.div`
  padding: 20px;
`;

const ProjectTitle = styled.h3`
  font-size: 20px;
  margin-bottom: 12px;
   ${ProjectCard}:hover & {
    color: #0066cc;
  }
`;

const ProjectDescription = styled.p`
  color: #666;
  line-height: 1.5;
`;

const NavigationButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: #0066cc;
  color: white;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2;
  
  &:disabled {
    background: #ccc;
    cursor: not-allowed;
  }

  ${props => props.$left ? `
    left: -24px;
  ` : `
    right: -24px;
  `}
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 40px;
`;

const ActionButton = styled.button`
  padding: 12px 24px;
  background: #0066cc;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-size: 16px;
  
  &:hover {
    background: #0052a3;
  }
`;

const ViewAllLink = styled.a`
  display: flex;
  align-items: center;
  gap: 8px;
  color: #0066cc;
  text-decoration: none;
  font-weight: 500;
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

const LatestProjects = () => {
  const [offset, setOffset] = useState(0);
  const wrapperRef = useRef(null);

  const projects = [
    {
      title: "Dollar Shave Club",
      description: "E-commerce shopping features and analytics for Dollar Shave Club",
      image: col
    },
    {
      title: "AI software for the leading global retailer",
      description: "A robust AI-powered data ecosystem with self-service BI capabilities for a global retailer. Designed to handle 13 million daily requests, it integrates data from various sources.",
      image: man
    },
    {
      title: "AI software for the leading global retailer",
      description: "A robust AI-powered data ecosystem with self-service BI capabilities for a global retailer. Designed to handle 13 million daily requests.",
      image: vol
    },
    {
      title: "AI software implementation",
      description: "A robust AI-powered data ecosystem with self-service BI capabilities for a global retailer.",
      image: mobile
    },
    {
      title: "Dollar Shave Club",
      description: "E-commerce shopping features and analytics for Dollar Shave Club",
      image: col
    },
    {
      title: "AI software for the leading global retailer",
      description: "A robust AI-powered data ecosystem with self-service BI capabilities for a global retailer. Designed to handle 13 million daily requests, it integrates data from various sources.",
      image: man
    },
    {
      title: "AI software for the leading global retailer",
      description: "A robust AI-powered data ecosystem with self-service BI capabilities for a global retailer. Designed to handle 13 million daily requests.",
      image: vol
    },
    {
      title: "AI software implementation",
      description: "A robust AI-powered data ecosystem with self-service BI capabilities for a global retailer.",
      image: mobile
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
    <ProjectsSection>
      <Container>
        <Title>Latest Projects</Title>
        
        <ProjectsContainer>
          <NavigationButton $left onClick={slideLeft} disabled={offset >= 0}>
            ←
          </NavigationButton>
          
          <ProjectsWrapper ref={wrapperRef} $offset={offset}>
            {projects.map((project, index) => (
              <ProjectCard key={index}>
                <ProjectImage src={project.image} alt={project.title} />
                <ProjectContent>
                  <ProjectTitle>{project.title}</ProjectTitle>
                  <ProjectDescription>{project.description}</ProjectDescription>
                </ProjectContent>
              </ProjectCard>
            ))}
          </ProjectsWrapper>

          <NavigationButton onClick={slideRight} disabled={offset <= -(wrapperRef.current?.scrollWidth - wrapperRef.current?.offsetWidth)}>
            →
          </NavigationButton>
        </ProjectsContainer>

        <ButtonContainer>
        <ExploreButton>
          View All
        </ExploreButton>
          <ActionButton>Innovate with us</ActionButton>
        </ButtonContainer>
      </Container>
    </ProjectsSection>
  );
};

export default LatestProjects;