import { styled } from 'styled-components';
import { BarChart } from 'recharts';

export const Tabs = styled.div`
  display: flex;
  gap: 4px`;

export const Tab = styled.button<{ isActive: boolean }>`
  padding: 8px;
  background-color: rgba(205, 207, 255, 0.85);
  border-radius: 5px;
  border-bottom: ${({ isActive }) => (isActive ? '#921AFF thin solid' : 'none')};
`;

export const Wrapper = styled.div`
  display: flex;
  gap: 8px;
  justify-content: center;
  align-items: center;
  margin: 10px 0;
  flex-wrap: wrap;
  background-color: rgba(205, 207, 255, 0.25);
  padding: 10px;
  border-radius: 10px;
  width: 100%;
`;

export const MinWrapper = styled.div`
  margin: 10px 0;
  display: flex;
  flex-direction: column;
  gap: 8px;
  justify-content: center;
  align-items: center;
  flex: 2;
  max-width: 100%;
`;

export const StylesBarChart = styled(BarChart)`
  height: fit-content !important;
  max-width: 100%;
  overflow-x: hidden;
  
  .recharts-tooltip-item-list {
    font-size: 12px;
    
    li {
      margin: 0;
    }
  }
`;
