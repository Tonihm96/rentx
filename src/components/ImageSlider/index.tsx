import React, { useRef, useState } from 'react';
import { FlatList, ViewToken } from 'react-native';
import { Photo } from '../../dtos/CarDTO';

import { Bullet } from '../Bullet';

import { Container, ImageIndexes, CarImageWrapper, CarImage } from './styles';

interface Props {
  images: Photo[];
}

export function ImageSlider({ images }: Props) {
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const indexChanged = useRef(
    ({ viewableItems }: { viewableItems: ViewToken[] }) => {
      setActiveImageIndex(viewableItems[0].index!);
    }
  );

  return (
    <Container>
      <ImageIndexes>
        {images.map((_, index) => (
          <Bullet key={index} active={index === activeImageIndex} />
        ))}
      </ImageIndexes>
      <FlatList
        data={images}
        keyExtractor={key => key.id}
        renderItem={({ item }) => (
          <CarImageWrapper>
            <CarImage source={{ uri: item.photo }} resizeMode='contain' />
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
