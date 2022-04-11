import {
  StyleSheet,
  TextInput,
  View,
  ViewStyle,
  TextInputProps,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  Keyboard,
} from 'react-native';
import React from 'react';

type Props = {
  containerStyle?: ViewStyle;
  inputProps: TextInputProps;
};

export const CustomInput = ({
  containerStyle,
  inputProps: {style: inputStyle, ...inputProps},
}: Props) => {
  return (
    <SafeAreaView>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={10}>
        <View style={[styles.container, containerStyle]}>
          <TextInput
            onSubmitEditing={Keyboard.dismiss}
            style={[styles.input, inputStyle]}
            {...inputProps}
          />
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderRadius: 5,
    borderColor: 'purple',
    shadowColor: '#purple',
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 10,
    marginRight: 10,
  },
  input: {
    padding: 10,
    width: '100%',
    height: 40,
  },
});
