import React from 'react';
import { RectButtonProperties } from 'react-native-gesture-handler';

import { Container, Title, LoadingIndicator } from './styles';

interface Props extends RectButtonProperties {
  title: string;
  color?: string;
  loading?: boolean;
  light?: boolean;
}

export function Button({
  title,
  color,
  onPress,
  enabled = true,
  loading = false,
  light = false,
  ...rest
}: Props) {
  return (
    <Container
      color={color}
      enabled={enabled}
      onPress={onPress}
      loading={loading}
      {...rest}
    >
      {loading ? <LoadingIndicator /> : <Title light={light}>{title}</Title>}
    </Container>
  );
}
