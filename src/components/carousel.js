import React, { useState } from 'react';
import { View, Image, ScrollView, Dimensions, StyleSheet, TouchableOpacity, Text } from 'react-native';

const ImageCarousel = ({ images, onClose }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleScroll = event => {
    const contentOffsetX = event.nativeEvent.contentOffset.x;
    const newIndex = Math.round(contentOffsetX / Dimensions.get('window').width);
    setCurrentIndex(newIndex);
  };

  return (
    <View style={styles.container}>
      <View>
            <TouchableOpacity onPress={() => onClose()} style={styles.backButton}>
                <Image source={require('../assets/images/back.png')} style={{width: 20, height: 20, resizeMode: 'contain'}}/>
            </TouchableOpacity>
        </View>
      <ScrollView
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={handleScroll}
      >
        {images.map((imageUrl, index) => (
          <Image key={index} source={{ uri: imageUrl }} style={styles.image} />
        ))}
      </ScrollView>
      <View style={styles.pagination}>
        {images.map((_, index) => (
          <View
            key={index}
            style={[
              styles.paginationDot,
              index === currentIndex && styles.activeDot,
            ]}
          />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: Dimensions.get('window').width,
    height: 300,
    resizeMode: 'cover',
  },
  pagination: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: -20,
  },
  paginationDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: 'gray',
    marginHorizontal: 4,
  },
  activeDot: {
    backgroundColor: 'white',
  },
  backButton: {
    position: 'absolute',
    top: 20,
    left: 20,
    zIndex: 1,
    width:35, 
    height:35,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 8, 
    backgroundColor: 'white', 
    borderRadius:8, 
  },
  
});

export default ImageCarousel;
