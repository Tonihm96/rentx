import React from 'react';
import { TextInputProps } from 'react-native';
import { Feather as Icon } from '@expo/vector-icons';
import { useTheme } from 'styled-components/native';

import { Container, IconContainer, TextInput } from './styles';

interface Props extends TextInputProps {
  iconName: React.ComponentProps<typeof Icon>['name'];
}

export function Input({ iconName, ...rest }: Props) {
  const theme = useTheme();

  return (
    <Container>
      <IconContainer>
        <Icon name={iconName} size={24} color={theme.colors.text_detail} />
      </IconContainer>
      <TextInput {...rest} />
    </Container>
  );
}
