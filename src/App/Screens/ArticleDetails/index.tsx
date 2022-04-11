import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import React from 'react';
import {RootStackParamList} from '../../Navigation';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {useSelector} from 'react-redux';
import {selectNewsState} from '../../../state/selectors';
import {Line} from '../../Components';

type Props = NativeStackScreenProps<RootStackParamList, 'ArticleDetails'>;

export const ArticleDetailsScreen = ({route}: Props) => {
  const isDarkMode = useColorScheme() === 'dark';

  const {articles} = useSelector(selectNewsState);
  const article = articles.find(art => art.id === route?.params?.articleId);
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
            <Text
              style={{
                ...styles.title,
                color: isDarkMode ? '#fff' : '#111',
              }}>
              {article?.title}
            </Text>
            <Line
              width="90%"
              color={isDarkMode ? 'white' : '#c2bebe'}
              height={1}
            />

            <Text
              style={{
                ...styles.publishedAt,
                color: isDarkMode ? '#fff' : 'purple',
              }}>
              At: {article?.publishedAt}
            </Text>
            <Line
              width="70%"
              color={isDarkMode ? 'white' : '#c2bebe'}
              height={1}
            />

            <Text
              style={{
                ...styles.author,
                color: isDarkMode ? '#fff' : 'purple',
              }}>
              By: {article?.author}
            </Text>
            <Line
              width="50%"
              color={isDarkMode ? 'white' : '#c2bebe'}
              height={1}
            />

            <Text
              style={{...styles.content, color: isDarkMode ? '#fff' : '#000'}}>
              {article?.content}
            </Text>
            <Image source={{uri: article?.urlToImage}} style={styles.image} />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
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
