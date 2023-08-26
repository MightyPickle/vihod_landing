import React from 'react';
import { styled } from 'styled-components';

const CustomTooltipWrapper = styled.div`
background-color: var(--light);
border-radius: 10px;
text-align: center;
box-shadow: 4px 4px 4px 4px rgba(0,0,0,0.5);
padding: 5px;
font-size: 0.8rem
`;

function CustomTooltip({ active, payload, label }) {
  if (active) {
    return (
      <CustomTooltipWrapper>
        <p>{payload[0].name}</p>
        <p>{payload[0].value}</p>
      </CustomTooltipWrapper>
    );
  }
  return null;
}

export default CustomTooltip;
