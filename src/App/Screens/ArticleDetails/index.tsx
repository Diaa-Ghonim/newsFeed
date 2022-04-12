/* eslint-disable react-native/no-inline-styles */
import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  useColorScheme,
  View,
} from 'react-native';
import React from 'react';
import {RootStackParamList} from '../../Navigation';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {useSelector} from 'react-redux';
import {selectNewsState} from '../../../state/selectors';
import {AppText, Line} from '../../Components';
import {Colors} from '../../../constants/Colors';

type Props = NativeStackScreenProps<RootStackParamList, 'ArticleDetails'>;

export const ArticleDetailsScreen = ({route}: Props) => {
  const isDarkMode = useColorScheme() === 'dark';

  const {articles} = useSelector(selectNewsState);
  const article = articles.find(art => art.id === route?.params?.articleId);
  const lineColor = isDarkMode ? Colors.lightLine : Colors.darkLine;
  const metaDataColor = isDarkMode ? Colors.light : Colors.purple;
  const titleColor = isDarkMode ? Colors.light : Colors.dark;
  const contentColor = isDarkMode ? Colors.light : Colors.dark;
  return (
    <SafeAreaView
      style={{backgroundColor: isDarkMode ? '#000' : 'transparent'}}>
      <ScrollView
        style={{
          backgroundColor: isDarkMode ? '#000' : 'transparent',
        }}>
        <View
          style={{
            ...styles.wrapper,
            backgroundColor: isDarkMode ? '#000' : 'transparent',
          }}>
          <View
            style={{
              ...styles.container,
              backgroundColor: isDarkMode ? '#212121' : '#fff',
              borderColor: isDarkMode ? '#000' : '#ddd',
            }}>
            <AppText.BoldText style={{color: titleColor}}>
              {article?.title}
            </AppText.BoldText>
            <Line width="90%" color={lineColor} height={1} />

            <AppText.RegularText style={{color: metaDataColor}}>
              At: {article?.publishedAt}
            </AppText.RegularText>
            <Line width="70%" color={lineColor} height={1} />

            <AppText.RegularText style={{color: metaDataColor}}>
              By: {article?.author}
            </AppText.RegularText>
            <Line width="50%" color={lineColor} height={1} />

            <AppText.RegularText style={{color: contentColor}}>
              {article?.content}
            </AppText.RegularText>
            <Image source={{uri: article?.urlToImage}} style={styles.image} />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    paddingHorizontal: 5,
    borderWidth: 1,
    borderRadius: 10,
  },
  wrapper: {
    padding: 10,
  },
  title: {
    marginBottom: 5,
    fontFamily: 'OpenSans-Bold',
    color: '#000',
  },
  author: {
    // color: 'purple',
    marginVertical: 5,
    fontSize: 15,
    fontFamily: 'OpenSans-Regular',
  },
  publishedAt: {
    // color: 'purple',
    marginVertical: 5,
    fontSize: 15,
    fontFamily: 'OpenSans-Regular',
  },
  content: {
    marginVertical: 10,
    fontSize: 16,
    fontFamily: 'OpenSans-Regular',
    // color: '#000',
  },
  image: {
    width: '100%',
    height: 500,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#ddd',
    marginTop: 20,
  },
});

// abstract regular text component with its style and can take custom style also
