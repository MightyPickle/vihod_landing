import styled from 'styled-components';
import { AreaChart } from 'recharts';

export const Tabs = styled.div`
  display: flex;
  gap: 4px`;

export const Tab = styled.button<{ isActive: boolean }>`
  padding: 8px;
  border-radius: 5px;
  border-bottom: ${({ isActive }) => (isActive ? '#921AFF thin solid' : 'none')};
`;

export const StyledAreaChart = styled(AreaChart)`
  height: fit-content !important;
  max-width: 100%;
  overflow-x: hidden;
`;
