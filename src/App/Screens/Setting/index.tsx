/* eslint-disable react-native/no-inline-styles */
import {StyleSheet, Text, View, Pressable, useColorScheme} from 'react-native';
import React, {useState} from 'react';
import {useTranslation} from 'react-i18next';

// type Props = {};
type Language = 'en' | 'ar';
export const SettingScreen = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const {t, i18n} = useTranslation();
  const [currentLanguage, setLanguage] = useState(i18n.language);

  const changeLanguage = (value: Language) => {
    i18n
      .changeLanguage(value)
      .then(() => setLanguage(value))
      .catch(err => console.log(err));
  };
  return (
    <View
      style={{
        ...styles.wrapper,
        backgroundColor: isDarkMode ? '#000' : 'transparent',
      }}>
      <View style={styles.container}>
        <View style={styles.languageTitle}>
          <Text
            style={{
              ...styles.languageText,
              textAlign: currentLanguage === 'ar' ? 'right' : 'left',
              color: isDarkMode ? '#fff' : '#000',
            }}>
            {t('Language')} :
          </Text>
        </View>
        <View
          style={{
            ...styles.languageContainer,
            justifyContent:
              currentLanguage === 'ar' ? 'flex-end' : 'flex-start',
          }}>
          <Pressable
            onPress={() => changeLanguage('en')}
            style={{
              ...styles.pressable,
              backgroundColor: currentLanguage === 'en' ? '#33A850' : '#d3d3d3',
            }}>
            <Text style={styles.pressableText}>{t('Select English')}</Text>
          </Pressable>
          <Pressable
            onPress={() => changeLanguage('ar')}
            style={{
              ...styles.pressable,
              backgroundColor: currentLanguage === 'ar' ? '#33A850' : '#d3d3d3',
            }}>
            <Text style={styles.pressableText}>{t('Select Arabic')}</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

export default SettingScreen;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  container: {
    padding: 20,
  },
  languageTitle: {
    marginBottom: 20,
  },
  languageText: {
    fontFamily: 'OpenSans-Bold',
  },
  languageContainer: {
    flexDirection: 'row',
  },
  pressable: {
    marginHorizontal: 10,
    padding: 15,
    borderRadius: 5,
  },
  pressableText: {
    color: '#111',
  },
});
