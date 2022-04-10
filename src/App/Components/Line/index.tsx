import {View} from 'react-native';
import React from 'react';

type Props = {
  width: string | number;
  color: string;
  height: number;
};

export const Line = ({width, height, color}: Props) => {
  return (
    <View
      style={{
        borderBottomColor: color,
        borderBottomWidth: height,
        width: width,
      }}
    />
  );
};
