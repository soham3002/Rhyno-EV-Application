import React, { useState } from 'react';
import styled from 'styled-components';

const ComparisonContainer = styled.div`
  position: relative;
  .card {
    background: #FFFFFF;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    padding: 20px;
    transition: transform 0.3s ease;
    cursor: pointer;
    &:hover {
      transform: scale(1.05);
    }
  }
  .details {
    display: ${props => (props.active ? 'block' : 'none')};
    padding: 20px;
    background: #F2F2F2;
    border-radius: 10px;
    margin-top: 20px;
  }
`;

const InteractiveComparison = ({ data }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <div>
      <h2>Compare Our Models</h2>
      <div style={{ display: 'flex', justifyContent: 'space-around' }}>
        {data.map((item, index) => (
          <ComparisonContainer
            key={item.name}
            className="card"
            onClick={() => setActiveIndex(index)}
            active={activeIndex === index}
          >
            <h3>{item.name}</h3>
            <p>{item.description}</p>
            <div className="details">
              <h4>Specifications:</h4>
              <p>Battery: {item.specs.battery}</p>
              <p>Motor: {item.specs.motor}</p>
              {/* Add more specifications */}
            </div>
          </ComparisonContainer>
        ))}
      </div>
    </div>
  );
};

export default InteractiveComparison;
