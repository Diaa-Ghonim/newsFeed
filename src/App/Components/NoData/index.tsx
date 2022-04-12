/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  Keyboard,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  useColorScheme,
  View,
} from 'react-native';
import {useTranslation} from 'react-i18next';

// type Props = {};

export const NoData = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const {t} = useTranslation();

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.noDataContainer}>
        <Text
          style={{
            ...styles.noDataText,
            color: isDarkMode ? '#fff' : '#000',
          }}>
          {t('noData')}
        </Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  noDataContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  noDataText: {
    textAlign: 'center',
    fontSize: 20,
    fontFamily: 'OpenSans-Bold',
  },
});
