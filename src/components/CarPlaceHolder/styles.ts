import styled from 'styled-components/native';

export const Container = styled.View`
  background-color: ${({ theme }) => theme.colors.background_secondary};

  width: 100%;
  height: 126px;
  padding: 24px;
  margin-bottom: 16px;

  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Detail = styled.View``;

export const About = styled.View`
  margin-top: 16px;

  flex-direction: row;
  align-items: center;
`;

export const Rent = styled.View`
  margin-right: 24px;
`;

export const Type = styled.View``;
