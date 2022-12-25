import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  gap: 20px;
`;
export const Button = styled.button`
  padding: 5px 10px;
  font-size: 18px;
  font-weight: 600;
  border-radius: 5px;
  border: 2px solid #b49469;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2), 0 16px 20px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  &:hover {
    background-color: #b49469;
    color: white;
  }
`;
