import React from 'react';
import styled from 'styled-components';

import balance from '../assest/balance.png';
import coin from '../assest/coin.png';
import message from '../assest/message.png';
import palnt from '../assest/plant.png';

const SectionWrapper = styled.section`
  background-color: #f0f5ff;
  padding: 60px 20px;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const Title = styled.h2`
  color: #1652CC;
  font-size: 28px;
  margin-bottom: 48px;
`;

const ProcessGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 40px;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ProcessCard = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 20px;
`;

const IconContainer = styled.div`
  width: 100px;
  height: 100px;
  flex-shrink: 0;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

const ContentContainer = styled.div`
  flex: 1;
`;

const CardTitle = styled.h3`
  color: #333;
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 12px;
`;

const CardDescription = styled.p`
  color: #666;
  font-size: 16px;
  line-height: 1.5;
`;

const Button = styled.button`
  background-color: #1652CC;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 12px 24px;
  font-size: 16px;
  cursor: pointer;
  margin-top: 40px;
  
  &:hover {
    background-color: #1247b3;
  }
`;

const CollaborationProcess = () => {
  const processes = [
    {
      icon: message,
      title: "Strategic thinking",
      description: "By deeply understanding your challenges and business goals, we identify where technology solutions first positions your business for long-term success."
    },
    {
      icon: palnt,
      title: "Starting small",
      description: "We prioritize simple yet clever at the beginning of your journey with us, prioritizing demonstrable value and build momentum."
    },
    {
      icon: coin,
      title: "Rapid value delivery",
      description: "We build an MVP, test, gather feedback, and iteratively enhance based on real input and evolving business needs."
    },
    {
      icon: balance,
      title: "Innovating at scale",
      description: "We're expanding your system's functionality while maintaining flexibility, human adaptability, and scalability to support your business growth."
    }
  ];

  return (
    <SectionWrapper>
      <Container>
        <Title>Our Collaboration Process</Title>
        <ProcessGrid>
          {processes.map((process, index) => (
            <ProcessCard key={index}>
              <IconContainer>
                <img src={process.icon} alt={process.title} />
              </IconContainer>
              <ContentContainer>
                <CardTitle>{process.title}</CardTitle>
                <CardDescription>{process.description}</CardDescription>
              </ContentContainer>
            </ProcessCard>
          ))}
        </ProcessGrid>
        <Button>Let's work together</Button>
      </Container>
    </SectionWrapper>
  );
};

export default CollaborationProcess;