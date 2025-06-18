import React from 'react';
import styled, { keyframes } from 'styled-components';
import { Link } from 'react-router-dom';
import { FaTshirt, FaTruck, FaSoap, FaStore } from 'react-icons/fa';

const fadeInUp = keyframes`
  from { opacity: 0; transform: translateY(30px); }
  to { opacity: 1; transform: translateY(0); }
`;

const Container = styled.div`
  font-family: 'Inter', sans-serif;
  background-color: #0d0d0d;
  color: #f0f0f0;
  min-height: 100vh;
  padding: 2rem;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 4rem;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
  }
`;

const Logo = styled.h1`
  font-size: 2.5rem;
  font-weight: 700;
  background: linear-gradient(90deg, #00ffab, #ffffff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const Nav = styled.nav`
  display: flex;
  gap: 2rem;
  flex-wrap: wrap;

  a {
    color: #bbb;
    text-decoration: none;
    font-size: 1rem;
    position: relative;
    transition: color 0.3s ease;

    &:hover {
      color: #00ffab;
    }

    &::after {
      content: '';
      position: absolute;
      bottom: -4px;
      left: 0;
      width: 0;
      height: 2px;
      background-color: #00ffab;
      transition: width 0.3s ease;
    }

    &:hover::after {
      width: 100%;
    }
  }

  @media (max-width: 768px) {
    justify-content: center;
    gap: 1rem;
    font-size: 0.95rem;
  }
`;

const Hero = styled.section`
  text-align: center;
  padding: 5rem 2rem;
  animation: ${fadeInUp} 1s ease forwards;

  @media (max-width: 768px) {
    padding: 3rem 1rem;
  }
`;

const HeroTitle = styled.h2`
  font-size: 3rem;
  font-weight: 800;
  background: linear-gradient(90deg, #00ffab, #fff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const HeroSubtitle = styled.p`
  font-size: 1.25rem;
  color: #aaa;
  max-width: 600px;
  margin: 0 auto 2rem;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const CTAButton = styled(Link)`
  background-color: #00ffab;
  color: #0d0d0d;
  padding: 0.75rem 1.5rem;
  font-weight: 600;
  border-radius: 10px;
  text-decoration: none;
  font-size: 1rem;
  transition: all 0.3s ease;

  &:hover {
    background-color: #33ffc4;
  }

  @media (max-width: 480px) {
    font-size: 0.9rem;
    padding: 0.6rem 1.2rem;
  }
`;

const Features = styled.section`
  padding: 4rem 0;

  @media (max-width: 768px) {
    padding: 2rem 0;
  }
`;

const SectionTitle = styled.h3`
  font-size: 2rem;
  color: #00ffab;
  text-align: center;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const FeatureGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 2rem;
`;

const FeatureCard = styled.div`
  background-color: #1a1a1a;
  padding: 2rem;
  border-radius: 16px;
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-6px);
    box-shadow: 0 0 20px rgba(0,255,171,0.2);
  }

  svg {
    font-size: 2rem;
    color: #00ffab;
    margin-bottom: 1rem;
  }

  h4 {
    font-size: 1.25rem;
    margin-bottom: 0.5rem;
  }

  p {
    color: #bbb;
    font-size: 0.95rem;

    @media (max-width: 768px) {
      font-size: 0.9rem;
    }
  }
`;

const Footer = styled.footer`
  text-align: center;
  font-size: 0.9rem;
  color: #777;
  margin-top: 4rem;
  padding: 2rem 0;

  @media (max-width: 768px) {
    font-size: 0.8rem;
    margin-top: 2rem;
  }
`;

const FreshFoldHome = () => {
  return (
    <Container>
      <Header>
        <Logo>FreshFold</Logo>
        <Nav>
          <Link to="/">Home</Link>
          <Link to="/services">Services</Link>
          <Link to="/pricing">Pricing</Link>
          <Link to="/contact">Contact</Link>
        </Nav>
      </Header>

      <Hero>
        <HeroTitle>Fresh Laundry, Folded with Care</HeroTitle>
        <HeroSubtitle>
          FreshFold makes laundry day effortless. Fast pickup, expert cleaning, and neatly folded returns — all at your doorstep.
        </HeroSubtitle>
        <CTAButton to="/services">Explore Services</CTAButton>
      </Hero>

      <Features>
        <SectionTitle>Why Choose FreshFold?</SectionTitle>
        <FeatureGrid>
          <FeatureCard>
            <FaTshirt />
            <h4>Professional Cleaning</h4>
            <p>Your clothes are washed, dried, and folded with professional-grade care.</p>
          </FeatureCard>
          <FeatureCard>
            <FaTruck />
            <h4>Doorstep Pickup & Delivery</h4>
            <p>Convenient pickup and drop-off, so you never worry about laundry again.</p>
          </FeatureCard>
          <FeatureCard>
            <FaSoap />
            <h4>Eco-Friendly Detergents</h4>
            <p>We use gentle, sustainable detergents that are tough on stains, not the planet.</p>
          </FeatureCard>
          <FeatureCard>
            <FaStore />
            <h4>Flexible Plans</h4>
            <p>Pay-per-load or subscription — tailored for your home or business.</p>
          </FeatureCard>
        </FeatureGrid>
      </Features>

      <Footer>
        <p>&copy; 2025 FreshFold. Clean clothes, clean life.</p>
      </Footer>
    </Container>
  );
};

export default FreshFoldHome;
