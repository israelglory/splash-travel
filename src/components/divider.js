import React from 'react';
import { View, StyleSheet } from 'react-native';

const Divider = () => {
  return <View style={styles.divider} />;
};

const styles = StyleSheet.create({
  divider: {
    borderBottomColor: '#EAECF0', // Change the color as needed
    borderBottomWidth: 3, // Change the height + thickness as needed
    width: '100%',
    //marginVertical: 16,
  },
});

export default Divider;