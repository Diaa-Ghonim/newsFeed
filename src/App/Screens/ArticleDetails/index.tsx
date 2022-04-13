/* eslint-disable react-native/no-inline-styles */
import {Image, SafeAreaView, ScrollView, StyleSheet, View} from 'react-native';
import React from 'react';
import {RootStackParamList} from '../../Navigation';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {useSelector} from 'react-redux';
import {selectNewsState} from '../../../state/selectors';
import {AppText, Line} from '../../Components';
import {useThemeContext} from '../../contexts';

type Props = NativeStackScreenProps<RootStackParamList, 'ArticleDetails'>;

export const ArticleDetailsScreen = ({route}: Props) => {
  const theme = useThemeContext();
  const {articles} = useSelector(selectNewsState);
  const article = articles.find(art => art.id === route?.params?.articleId);

  return (
    <SafeAreaView
      style={{backgroundColor: theme.articleDetailsScreenBackgroundColor}}>
      <ScrollView
        style={{
          backgroundColor: theme.articleDetailsScreenBackgroundColor,
        }}>
        <View
          style={[
            styles.wrapper,
            {backgroundColor: theme.articleDetailsScreenBackgroundColor},
          ]}>
          <View
            style={{
              ...styles.container,
              backgroundColor: theme.articleBackgroundColor,
              borderColor: theme.articleBorderColor,
            }}>
            <AppText.BoldText style={{color: theme.color}}>
              {article?.title}
            </AppText.BoldText>
            <Line width="90%" color={theme.lineColor} height={1} />

            <AppText.RegularText style={{color: theme.metaDataColor}}>
              At: {article?.publishedAt}
            </AppText.RegularText>
            <Line width="70%" color={theme.lineColor} height={1} />

            <AppText.RegularText style={{color: theme.metaDataColor}}>
              By: {article?.author}
            </AppText.RegularText>
            <Line width="50%" color={theme.lineColor} height={1} />

            <AppText.RegularText style={{color: theme.color}}>
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
    marginVertical: 5,
    fontSize: 15,
    fontFamily: 'OpenSans-Regular',
  },
  publishedAt: {
    marginVertical: 5,
    fontSize: 15,
    fontFamily: 'OpenSans-Regular',
  },
  content: {
    marginVertical: 10,
    fontSize: 16,
    fontFamily: 'OpenSans-Regular',
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
