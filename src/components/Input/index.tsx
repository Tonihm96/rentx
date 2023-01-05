import React, { useState } from 'react';
import { TextInputProps } from 'react-native';
import { Feather as Icon } from '@expo/vector-icons';
import { useTheme } from 'styled-components/native';

import { Container, IconContainer, TextInput } from './styles';

interface Props extends TextInputProps {
  iconName: React.ComponentProps<typeof Icon>['name'];
  value?: string;
}

export function Input({ iconName, value, ...rest }: Props) {
  const theme = useTheme();
  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);

  function handleInputFocus() {
    setIsFocused(true);
  }

  function handleInputBlur() {
    setIsFocused(false);
    setIsFilled(!!value);
  }

  return (
    <Container isFocused={isFocused}>
      <IconContainer>
        <Icon
          name={iconName}
          size={24}
          color={
            isFilled || isFocused ? theme.colors.main : theme.colors.text_detail
          }
        />
      </IconContainer>
      <TextInput
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        {...rest}
      />
    </Container>
  );
}
