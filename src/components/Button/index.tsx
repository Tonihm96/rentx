import React from 'react';

import { Container, Title, LoadingIndicator } from './styles';

interface Props {
  title: string;
  color?: string;
  onPress?(): void;
  enabled?: boolean;
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
