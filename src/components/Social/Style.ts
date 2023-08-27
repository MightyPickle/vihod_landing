import styled from 'styled-components';

export const Tabs = styled.div`
  display: flex;
  gap: 4px`;

export const Tab = styled.button<{ isActive: boolean }>`
  padding: 8px;
  border-radius: 5px;
  border-bottom: ${({ isActive }) => (isActive ? '#921AFF thin solid' : 'none')};
`;
