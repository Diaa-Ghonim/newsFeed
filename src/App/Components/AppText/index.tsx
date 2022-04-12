import {StyleSheet, Text, TextProps} from 'react-native';
import React from 'react';

// type Props = {};

export const AppText = (props: TextProps) => {
  return <Text {...props} />;
};

AppText.RegularText = (props: TextProps) => {
  return <Text {...props} style={[styles.regularText, props.style]} />;
};

AppText.BoldText = (props: TextProps) => {
  return <Text {...props} style={[styles.boldText, props.style]} />;
};

const styles = StyleSheet.create({
  regularText: {
    margin: 5,
    fontFamily: 'OpenSans-Regular',
    fontSize: 16,
  },
  boldText: {
    fontFamily: 'OpenSans-Bold',
    marginBottom: 5,
    fontSize: 16,
  },
});
