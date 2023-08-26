import { styled } from 'styled-components';
import React from 'react';

const FlexSection = styled.div`
display: flex;
justify-content: center;
align-items: center;
align-content: center;
margin: 20px;
`;

export function FlexWrapper({ props }) {
  return <FlexSection>{props}</FlexSection>;
}
