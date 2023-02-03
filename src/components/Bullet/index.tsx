import React from 'react';

import { Container } from './styles';

export interface BulletProps {
  active?: boolean;
}

export function Bullet({ active = false }: BulletProps) {
  return <Container active={active} />;
}
