import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const ReviewsContainer = styled.div`
  background: #F9ED32;
  padding: 40px;
  border-radius: 10px;
`;

const ReviewCard = styled(motion.div)`
  background: #FFFFFF;
  border-radius: 10px;
  padding: 20px;
  margin: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const reviews = [
  { id: 1, text: "Amazing ride! Totally worth it.", author: "John Doe" },
  { id: 2, text: "The best electric scooter I've ever had.", author: "Jane Smith" },
  // Add more reviews
];

const ReviewsSection = () => {
  return (
    <ReviewsContainer>
      <h2>What Our Customers Say</h2>
      <div style={{ display: 'flex', overflowX: 'auto' }}>
        {reviews.map(review => (
          <ReviewCard key={review.id}>
            <p>"{review.text}"</p>
            <p><strong>- {review.author}</strong></p>
          </ReviewCard>
        ))}
      </div>
    </ReviewsContainer>
  );
};

export default ReviewsSection;
