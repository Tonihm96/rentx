import styled from 'styled-components/native';

import { BulletProps } from '.';

export const Container = styled.View<BulletProps>`
  background-color: ${({ theme, active }) =>
    active ? theme.colors.title : theme.colors.shape};

  width: 6px;
  height: 6px;
  margin-left: 8px;
  border-radius: 3px;
`;
