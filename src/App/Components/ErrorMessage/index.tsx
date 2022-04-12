/* eslint-disable react-native/no-inline-styles */
import {
  Keyboard,
  StyleSheet,
  Text,
  TextStyle,
  TouchableWithoutFeedback,
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
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
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
    </TouchableWithoutFeedback>
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
