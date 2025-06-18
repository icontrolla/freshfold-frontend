import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  background-color: #0d0d0d;
  color: #f0f0f0;
  min-height: 100vh;
  padding: 2rem;
  font-family: 'Inter', sans-serif;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 2rem;
  background: linear-gradient(90deg, #00ffab, #ffffff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const ServiceList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
`;

const ServiceCard = styled.div`
  background: #1a1a1a;
  padding: 2rem;
  border-radius: 16px;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-6px);
  }

  h3 {
    margin-bottom: 1rem;
    color: #00ffab;
  }

  p {
    color: #ccc;
  }
`;

const services = [
  {
    name: 'Wash & Fold',
    description: 'Get your laundry professionally washed, folded, and packaged.',
  },
  {
    name: 'Dry Cleaning',
    description: 'Delicate care for your special clothes with expert dry cleaning.',
  },
  {
    name: 'Pickup & Delivery',
    description: 'Doorstep pickup and drop-off for your laundry convenience.',
  },
  {
    name: 'Express Service',
    description: 'Get your laundry done and delivered on the same day.',
  },
];

const Services = () => {
  return (
    <Container>
      <Title>Our Services</Title>
      <ServiceList>
        {services.map((service, index) => (
          <ServiceCard key={index}>
            <h3>{service.name}</h3>
            <p>{service.description}</p>
          </ServiceCard>
        ))}
      </ServiceList>
    </Container>
  );
};

export default Services;
