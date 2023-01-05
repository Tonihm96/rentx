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
}

export function PasswordInput({ iconName, ...rest }: Props) {
  const theme = useTheme();
  const [isTextVisible, setIsTextVisible] = useState(true);

  function onVisibilityToggle() {
    setIsTextVisible(oldState => !oldState);
  }

  return (
    <Container>
      <IconContainer>
        <Icon name={iconName} size={24} color={theme.colors.text_detail} />
      </IconContainer>
      <TextInput secureTextEntry={isTextVisible} {...rest} />
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
