import { keyframes, styled } from 'styled-components';

const itemAnimation = keyframes`
  0% {
    filter: blur(60px);
    opacity: 0;
  }
  100% {
    filter: blur(0px);
    opacity: 1;
  }
`;

export const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 16px 0;
  padding: 16px;
  box-shadow: 0 16px 42px rgba(54, 43, 87, 0.1);
  border-radius: 20px;
  overflow: hidden;
  width: 100%;
  gap: 12px;
  animation: ${itemAnimation} 2.2s cubic-bezier(0.470, 0.000, 0.745, 0.715) both;
`;

export const Title = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  
  p {
    font-size: 32px;
  }
`;

export const Count = styled.h2`
  font-size: 52px;
    color: #969AFF;
`;

export const ImageAndListWrapper = styled.div`
  display: flex;
  gap: 8px;
`;

export const ListWrapper = styled.ul`
  p {
    padding-left: 20px;
    margin-bottom: 8px;
    text-decoration: underline #969AFF;
    font-size: 24px;
  }
  li {
    font-size: 20px;
  }
`;

export const Image = styled.img`
  flex: 1;;
  max-width: 50%;
  border-radius: 20px;
  box-shadow: 0 16px 42px rgba(54, 43, 87, 0.1);
  animation: ${itemAnimation} 3.2s cubic-bezier(0.470, 0.000, 0.745, 0.715) both;
`;
