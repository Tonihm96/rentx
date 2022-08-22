import React from 'react';
import { SvgProps } from 'react-native-svg';

import { Container, Name } from './styles';

interface Props {
  name: string;
  icon: React.FC<SvgProps>; // é passado como componente pelas props
}

export function Accessory({ name, icon: Icon }: Props) {
  return (
    <Container>
      <Icon height={32} width={32} />
      <Name>{name}</Name>
    </Container>
  );
}
