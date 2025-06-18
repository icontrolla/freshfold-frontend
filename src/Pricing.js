import React from 'react';
import styled from 'styled-components';
import { loadStripe } from '@stripe/stripe-js';

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

const PlanList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  justify-content: center;
`;

const PlanCard = styled.div`
  background: #1a1a1a;
  padding: 2rem;
  border-radius: 16px;
  width: 300px;
  box-shadow: 0 0 10px rgba(0,0,0,0.3);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-6px);
  }

  h3 {
    color: #00ffab;
    margin-bottom: 0.5rem;
  }

  h4 {
    margin-bottom: 1rem;
    color: #ffffff;
  }

  p {
    color: #ccc;
  }

  button {
    margin-top: 1rem;
    background: #00ffab;
    color: #000;
    border: none;
    padding: 0.6rem 1.2rem;
    border-radius: 8px;
    cursor: pointer;
    font-weight: bold;

    &:hover {
      background: #00e6a6;
    }
  }
`;

const stripePromise = loadStripe('pk_live_51RCyMUG04LCsz46THqWL7QT4haihJes9b4KxQOof2R7BL4fANzu3ReoglhiMA2T9d0aqxPf7NEt7smGVNATBFOAh00DQI9f6tK');

const pricingPlans = [
  {
    id: "basic",
    title: "Basic Plan",
    price: "3.00 USD/kg",
    description:
      "After a thorough packing of the customer's laundry, it is carefully weighed on a scale. The bill is projected at 3.00 USD per kg, with all service financials included, mostly covering transport services.",
  },
  {
    id: "basic",
    title: "Premium Plan",
    price: "5.00 USD/kg",
    description:
      "Includes everything in the Basic Plan, plus express delivery, eco-friendly detergents, priority handling, and dedicated customer support for a seamless laundry experience.",
  },
];

const handleCheckout = async (planId) => {
  const stripe = await stripePromise;

  try {
    const response = await fetch('http://localhost:8000/api/create-checkout-session/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ plan_id: planId }),
    });

    const data = await response.json();

    if (data.url) {
      stripe.redirectToCheckout({ sessionId: data.session_id });
    } else {
      alert('Failed to create checkout session.');
    }
  } catch (error) {
    console.error('Checkout error:', error);
    alert('Checkout error. Please try again later.');
  }
};

const Pricing = () => {
  return (
    <Container>
      <Title>Our Pricing</Title>
      <PlanList>
        {pricingPlans.map((plan, index) => (
          <PlanCard key={index}>
            <h3>{plan.title}</h3>
            <h4>{plan.price}</h4>
            <p>{plan.description}</p>
            <button onClick={() => handleCheckout(plan.id)}>Pay Now</button>
          </PlanCard>
        ))}
      </PlanList>
    </Container>
  );
};

export default Pricing;
