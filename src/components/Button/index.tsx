import React from 'react';

import { Container, Title, LoadingIndicator } from './styles';

interface Props {
  title: string;
  color?: string;
  onPress?(): void;
  enabled?: boolean;
  loading?: boolean;
}

export function Button({
  title,
  color,
  onPress,
  enabled = true,
  loading = false,
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
      {loading ? <LoadingIndicator /> : <Title>{title}</Title>}
    </Container>
  );
}
