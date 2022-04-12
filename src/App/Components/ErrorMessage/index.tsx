/* eslint-disable react-native/no-inline-styles */
import {
  StyleSheet,
  Text,
  TextStyle,
  useColorScheme,
  View,
  ViewStyle,
} from 'react-native';
import React from 'react';

type Props = {
  message: string;
  messageContainerStyle?: ViewStyle;
  messageStyle?: TextStyle;
};

export const ErrorMessage = ({
  message,
  messageContainerStyle,
  messageStyle,
}: Props) => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <View style={[styles.messageContainer, messageContainerStyle]}>
      <Text
        style={[
          styles.message,
          {color: isDarkMode ? '#fff' : '#000'},
          messageStyle,
        ]}>
        {message}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  messageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  message: {
    fontSize: 20,
    fontFamily: 'OpenSans-Bold',
  },
});
