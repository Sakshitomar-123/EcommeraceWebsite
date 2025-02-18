import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import { ChevronDown, Menu } from "lucide-react";
import logo from '../assest/logo.png';

const marquee = keyframes`
  0% { transform: translateX(0); }
  100% { transform: translateX(-100%); }
`;

const HeaderContainer = styled.header`
  position: absolute;
  top: 3rem;
  left: 50%;
  transform: translateX(-50%);
  width: 90%;
  max-width: 1350px;
  z-index: 10;
`;

const Nav = styled.nav`
  background: white;
  border-radius: 10px;
  padding: 0.75rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    padding: 0.75rem 1.5rem;
  }
`;

const Logo = styled.div`
  display: flex;
  align-items: center;

  img {
    height: 52px;
    width: auto;
    object-fit: contain;
  }
`;

const NavLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 2.5rem;

  @media (max-width: 768px) {
    display: none;
  }
`;

const NavItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  color: #1e293b;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  padding: 0.5rem 0;
  transition: color 0.2s;

  &:hover {
    color: #2563eb;
  }
`;

const ContactButton = styled.button`
  background: #2563eb;
  color: white;
  padding: 0.625rem 1.2rem;
  border-radius: 10px;
  border: none;
  cursor: pointer;
  font-weight: 500;
  font-size: 18px;
  transition: background 0.2s;

  &:hover {
    background: #1d4ed8;
  }
`;

const HeroSection = styled.div`
  position: relative;
  min-height: 80vh;
  background: linear-gradient(130deg, #000005 0%, black 100%);
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url("/api/placeholder/1920/1080") no-repeat center;
    background-size: cover;
    opacity: 0.2;
    z-index: 1;
  }
`;

const HeroContent = styled.div`
  max-width: 1350px;
  margin: 0 auto;
  padding: 12rem 2rem 4rem;
  position: relative;
  z-index: 2;

  @media (max-width: 768px) {
    padding: 10rem 1.5rem 4rem;
  }
`;

const MainTitle = styled.div`
  max-width: 960px;
  margin-bottom: 5rem;

  .highlight {
    color: #5bdce3;
    font-size: 3.2rem;
    line-height: 1.2;
    font-family: poppins;
    font-weight: bold;
    margin-bottom: 0.75rem;
    display: block;

    @media (max-width: 768px) {
      font-size: 2.5rem;
    }
  }

  .subtext {
    color: white;
    font-size: 3.2rem;
    line-height: 1.2;
    font-weight: bold;
    font-family: poppins;
    display: block;

    @media (max-width: 768px) {
      font-size: 2.5rem;
    }
  }
`;

const ButtonContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Subtitle = styled.p`
  color: white;
  font-size: 1.125rem;
  margin: 0;

  span {
    color: #5bdce3;
  }
`;

const ClientSection = styled.div`
  background: white;
  padding: 1.5rem 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  position: relative;

  @media (max-width: 768px) {
    padding: 1.5rem;
  }
`;

const MovingLogos = styled.div`
  display: flex;
  gap: 4rem;
  white-space: nowrap;
  min-width: 100%;
  animation: ${marquee} 20s linear infinite;
  will-change: transform;

  @media (max-width: 768px) {
    gap: 2rem;
  }
`;

const ClientLogo = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: black;
  font-size: 1rem;
  font-weight: 500;
  flex-shrink: 0;

  &::before {
    content: "";
    width: 20px;
    height: 20px;
    background: black;
    border-radius: 50%;
  }
`;

const MobileMenu = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: block;
  }

  button {
    background: none;
    border: none;
    color: #64748b;
    cursor: pointer;
    padding: 0.5rem;
  }
`;

const MobileMenuContent = styled.div`
  display: ${(props) => (props.isOpen ? "block" : "none")};
  position: absolute;
  top: calc(100% + 0.5rem);
  left: 0;
  right: 0;
  background: white;
  padding: 1rem;
  border-radius: 1rem;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);

  ${NavItem} {
    padding: 0.75rem 0;
  }

  ${ContactButton} {
    width: 100%;
    margin-top: 0.5rem;
  }
`;

const LandingPage = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const logos = [
    "POPLIDAYS.com",
    "TELENAV",
    "TURVO",
    "PotentiaMetri",
    "POPLIDAYS.com",
    "TELENAV",
    "TURVO",
    "PotentiaMetri",
  ];

  return (
    <>
      <HeaderContainer>
        <Nav>
          <Logo>
            <img src={logo} alt="Kaumodaki.ai" />
          </Logo>

          <NavLinks>
            <NavItem>
              AI & Data <ChevronDown size={14} />
            </NavItem>
            <NavItem>
              Services <ChevronDown size={14} />
            </NavItem>
            <NavItem>
              Company <ChevronDown size={14} />
            </NavItem>
            <ContactButton>Contact Us</ContactButton>
          </NavLinks>

          <MobileMenu>
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
              <Menu size={24} />
            </button>
          </MobileMenu>
        </Nav>

        <MobileMenuContent isOpen={isMobileMenuOpen}>
          <NavItem>AI & Data</NavItem>
          <NavItem>Services</NavItem>
          <NavItem>Company</NavItem>
          <ContactButton>Contact Us</ContactButton>
        </MobileMenuContent>
      </HeaderContainer>

      <HeroSection>
        <HeroContent>
          <MainTitle>
            <span className="highlight">Innovative Enterprise Software</span>
            <span className="subtext">Development for the Next Generation</span>
          </MainTitle>
          <ButtonContent>
            <Subtitle>
              Imagining the Future <span>Anew</span>
            </Subtitle>
            <ContactButton>Let's Connect</ContactButton>
          </ButtonContent>
        </HeroContent>
      </HeroSection>

      <ClientSection>
        <MovingLogos>
          {logos.map((logo, index) => (
            <ClientLogo key={index}>{logo}</ClientLogo>
          ))}
        </MovingLogos>
      </ClientSection>
    </>
  );
};

export default LandingPage;