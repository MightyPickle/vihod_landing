import { styled } from 'styled-components';
import React from 'react';

export const FlexSection = styled.div<{ $flexDirection?: string }>`
  display: flex;
  flex-direction: ${(props) => props.$flexDirection || 'row'};
  justify-content: center;
  align-items: center;
  align-content: center;
  margin: 0 20px;
  flex-wrap: wrap;
  gap: 8px
`;

export const Column = styled.div<{ $flex?: number ; $flexDirection?: string }>`
flex: ${(props) => props.$flex || 1};
flex-direction: ${(props) => props.$flexDirection || 'row'};
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  gap: 20px;
  `;

export const TitleWrapper = styled.div`
margin: 20px;
`;

export const Quote = styled.div`
padding: 10px;
background-color: rgba(65,58,46, .25);
border-radius: 0 10px;
font-style: italic;
width: 70%;
// box-shadow: 10px 5px 5px rgba(65,58,46, .5);
box-shadow: rgba(65,58,46, .5) 0 5px 10px 1px;
`;

export const Author = styled.div`
text-align: right;
font-style: normal;
padding-top: 15px;
`;

export const SectionsWrapper = styled.div`
display: flex;
flex-direction: column;
gap: 20px`;

function QuoteBlock({ text, author }) {
  return (
    <Quote>
      {text}
      <Author>
        {author}
      </Author>
    </Quote>
  );
}

export default QuoteBlock;
