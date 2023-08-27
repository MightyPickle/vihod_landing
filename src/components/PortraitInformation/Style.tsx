import { styled } from 'styled-components';
import React from 'react';

export const FlexSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  margin: 0px 20px;
  flex-wrap: wrap;
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
font-style: italic;
`;

export const Author = styled.div`
text-align: right;
font-style: normal;
padding-top: 15px;
`;

export const Block = styled.div<{ $margin?: string }>`
margin: ${(props) => props.$margin || 0};
display: flex;
justify-content: center;
background-color: rgba(65,58,46, .15);
border-radius: 0px 10px;
box-shadow: rgba(65,58,46, .5) 0 5px 10px 1px;
`;

function QuoteBlock({ text, author, margin }) {
  return (
    <Block $margin={margin}>
      <Quote>
        {text}
        <Author>
          {author}
        </Author>
      </Quote>
    </Block>
  );
}

export default QuoteBlock;
