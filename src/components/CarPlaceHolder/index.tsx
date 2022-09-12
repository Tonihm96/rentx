import React from 'react';
import { createShimmerPlaceholder } from 'react-native-shimmer-placeholder';
import { LinearGradient } from 'expo-linear-gradient';
import { RFValue } from 'react-native-responsive-fontsize';

import { Container, Detail, About, Rent, Type } from './styles';

const ShimmerPlaceholder = createShimmerPlaceholder(LinearGradient);

export function CarPlaceHolder() {
  return (
    <Container>
      <Detail>
        <ShimmerPlaceholder
          height={RFValue(10)}
          width={RFValue(Math.floor(Math.random() * 60) + 40)}
          style={{ marginVertical: 3 }}
        />
        <ShimmerPlaceholder
          height={RFValue(15)}
          width={RFValue(Math.floor(Math.random() * 60) + 40)}
          style={{ marginVertical: 5 }}
        />

        <About>
          <Rent>
            <ShimmerPlaceholder
              height={RFValue(10)}
              width={RFValue(35)}
              style={{ marginVertical: 3 }}
            />
            <ShimmerPlaceholder
              height={RFValue(15)}
              width={RFValue(50)}
              style={{ marginVertical: 5 }}
            />
          </Rent>

          <Type>
            <ShimmerPlaceholder
              height={RFValue(18)}
              width={RFValue(18)}
              style={{ marginVertical: 5, borderRadius: 20 }}
            />
          </Type>
        </About>
      </Detail>

      <ShimmerPlaceholder
        height={85}
        width={167}
        style={{ marginVertical: 5 }}
      />
    </Container>
  );
}
