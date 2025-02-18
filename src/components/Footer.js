import React from 'react';
import styled from 'styled-components';
import logo from '../assest/logo.png';
import iso from '../assest/iso.png';
import rso from '../assest/rso.png';
import upWork from '../assest/upWork.png';
import microSoft from '../assest/microSoft.png';
import gcp from '../assest/gcp.png';
import clutech from '../assest/clutech.png';
import { Instagram, Facebook, Linkedin, Twitter, Youtube } from 'lucide-react';

const FooterContainer = styled.footer`
  background-color: #0052CC;
  color: white;
  padding: 4rem 6rem;
  
  @media (max-width: 768px) {
    padding: 2rem 1.5rem;
  }
`;

const FooterWrapper = styled.div`
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  
  @media (max-width: 768px) {
    padding: 1rem 0;
  }
`;

const TopSection = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 4rem;
  margin-bottom: 6rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
    margin-bottom: 3rem;
  }
`;

const Logo = styled.img`
  height: 100px;
  width: auto;

  @media (max-width: 768px) {
    height: 40px;
  }
`;

const MainText = styled.p`
  font-size: 2.5rem;
  line-height: 1.3;
  max-width: 800px;
  
  @media (max-width: 768px) {
    font-size: 1.25rem;
    margin-top: 0.5rem;
  }
`;

const MiddleSection = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 8rem;
  margin-bottom: 6rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
    margin-bottom: 3rem;
  }
`;

const OfficesSection = styled.div``;

const OfficesTitle = styled.h3`
  font-size: 1.125rem;
  font-weight: 600;
  margin-bottom: 1rem;
`;

const OfficesList = styled.div`
  p {
    margin-bottom: 0.75rem;
    font-size: 1rem;
  }
`;

const ContactSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const ContactInfo = styled.div`
  p {
    font-size: 1rem;
    margin-bottom: 0.75rem;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1.5rem;
  align-items: center;
  
  a {
    color: white;
    text-decoration: none;
    
    svg {
      width: 32px;
      height: 32px;
    }
  }
`;

const BottomSection = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 4rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const LegalInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  
  a {
    color: white;
    text-decoration: none;
    font-size: 1rem;
  }
  
  p {
    font-size: 1rem;
  }
`;

const Certifications = styled.div`
  display: flex;
  gap: 2rem;
  align-items: center;
  
  @media (max-width: 768px) {
    flex-wrap: wrap;
    gap: 1.5rem;
  }
  
  img {
    height: 40px;
    
    @media (max-width: 768px) {
      height: 30px;
    }
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrapper>
        <TopSection>
          <Logo src={logo} alt="Kaumodaki.ai" />
          <MainText>
            Your partner in enterprise software development, delivering scalable AI and 
            data solutions that drive lasting business impact.
          </MainText>
        </TopSection>
        
        <MiddleSection>
          <OfficesSection>
            <OfficesTitle>Offices:</OfficesTitle>
            <OfficesList>
              <p>Aliso Viejo, CA</p>
              <p>Warsaw, PL</p>
              <p>Kyiv, UA</p>
            </OfficesList>
          </OfficesSection>
          
          <ContactSection>
            <ContactInfo>
              <p>hello@kaumodaki.ai.com</p>
              <p>+1 123 456 7895</p>
            </ContactInfo>
            
            <SocialLinks>
              <a href="#" aria-label="Instagram"><Instagram /></a>
              <a href="#" aria-label="Facebook"><Facebook /></a>
              <a href="#" aria-label="LinkedIn"><Linkedin /></a>
              <a href="#" aria-label="Twitter"><Twitter /></a>
              <a href="#" aria-label="YouTube"><Youtube /></a>
            </SocialLinks>
          </ContactSection>
        </MiddleSection>
        
        <BottomSection>
          <LegalInfo>
            <a href="#">Privacy Policy</a>
            <p>©2025 kaumodaki</p>
          </LegalInfo>
          
          <Certifications>
            <img src={iso} alt="ISO Certification" />
            <img src={rso} alt="Certification 1" />
            <img src={clutech} alt="Certification 2" />
            <img src={clutech} alt="Certification 3" />
            <img src={upWork} alt="Upwork Partner" />
            <img src={microSoft} alt="Microsoft Partner" />
            <img src={gcp} alt="Google Cloud Partner" />
          </Certifications>
        </BottomSection>
      </FooterWrapper>
    </FooterContainer>
  );
};

export default Footer;