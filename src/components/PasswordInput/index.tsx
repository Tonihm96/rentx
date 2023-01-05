import React, { useState } from 'react';
import { TextInputProps } from 'react-native';
import { Feather as Icon } from '@expo/vector-icons';
import { useTheme } from 'styled-components/native';

import {
  Container,
  IconContainer,
  TextInput,
  ToggleVisibilityButton
} from './styles';

interface Props extends TextInputProps {
  iconName: React.ComponentProps<typeof Icon>['name'];
  value?: string;
}

export function PasswordInput({ iconName, value, ...rest }: Props) {
  const theme = useTheme();
  const [isTextVisible, setIsTextVisible] = useState(true);
  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);

  function handleInputFocus() {
    setIsFocused(true);
  }

  function handleInputBlur() {
    setIsFocused(false);
    setIsFilled(!!value);
  }

  function onVisibilityToggle() {
    setIsTextVisible(oldState => !oldState);
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
        secureTextEntry={isTextVisible}
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        {...rest}
      />
      <IconContainer>
        <ToggleVisibilityButton onPress={onVisibilityToggle}>
          <Icon
            name={isTextVisible ? 'eye' : 'eye-off'}
            size={24}
            color={theme.colors.text_detail}
          />
        </ToggleVisibilityButton>
      </IconContainer>
    </Container>
  );
}
