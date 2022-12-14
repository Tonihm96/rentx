import React, { useRef, useState } from 'react';
import { FlatList, ViewToken } from 'react-native';

import {
  Container,
  ImageIndexes,
  ImageIndex,
  CarImageWrapper,
  CarImage
} from './styles';

interface Props {
  imagesUrl: string[];
}

export function ImageSlider({ imagesUrl }: Props) {
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const indexChanged = useRef(
    ({ viewableItems }: { viewableItems: ViewToken[] }) => {
      setActiveImageIndex(viewableItems[0].index!);
    }
  );

  return (
    <Container>
      <ImageIndexes>
        {imagesUrl.map((_, index) => (
          <ImageIndex key={index} active={index === activeImageIndex} />
        ))}
      </ImageIndexes>
      <FlatList
        data={imagesUrl}
        keyExtractor={key => key}
        renderItem={({ item }) => (
          <CarImageWrapper>
            <CarImage source={{ uri: item }} resizeMode='contain' />
          </CarImageWrapper>
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
        onViewableItemsChanged={indexChanged.current}
        pagingEnabled
      />
    </Container>
  );
}
