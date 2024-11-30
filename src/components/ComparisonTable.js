import React from 'react';
import styled from 'styled-components';

const Table = styled.div`
  background-color: #F2F2F2;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  .table-row {
    display: flex;
    justify-content: space-between;
    padding: 10px 0;
    border-bottom: 1px solid #EDEDED;
    &:last-child {
      border-bottom: none;
    }
    .cell {
      flex: 1;
      text-align: center;
      font-weight: bold;
      color: #373737;
    }
    .header {
      background-color: #F9ED32;
      font-weight: bold;
    }
  }
`;

const ComparisonTable = ({ data }) => {
  return (
    <Table>
      <div className="table-row header">
        <div className="cell">Specification</div>
        <div className="cell">SE03 Lite</div>
        <div className="cell">SE03</div>
        <div className="cell">SE03 Max</div>
      </div>
      {data.map((item, index) => (
        <div key={index} className="table-row">
          <div className="cell">{item.spec}</div>
          <div className="cell">{item.se03Lite}</div>
          <div className="cell">{item.se03}</div>
          <div className="cell">{item.se03Max}</div>
        </div>
      ))}
    </Table>
  );
};

export default ComparisonTable;
