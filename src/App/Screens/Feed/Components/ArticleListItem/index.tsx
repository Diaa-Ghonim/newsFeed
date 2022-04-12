/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  Image,
  Text,
  TouchableWithoutFeedback,
  View,
  StyleSheet,
} from 'react-native';
import {Article} from '../../../../../state/types';
import {Line} from '../../../../Components';
interface Props {
  item: Article;
  onItemPress: (item: Article) => void;
  isDarkMode: boolean;
}

export const renderItem = ({
  item,
  onItemPress = () => {},
  isDarkMode,
}: Props) => {
  console.log(item.id);
  return (
    <TouchableWithoutFeedback onPress={() => onItemPress(item)}>
      <View
        style={{
          ...styles.articleContainer,
          backgroundColor: isDarkMode ? '#212121' : '#fff',
          borderColor: isDarkMode ? '#000' : '#ddd',
        }}
        key={item.author}>
        <Text
          style={{
            ...styles.title,
            color: isDarkMode ? '#fff' : '#111',
          }}>
          {item.title}
        </Text>

        <Line width="90%" height={1} color={isDarkMode ? '#fff' : '#c2bebe'} />
        <Text
          style={{
            ...styles.publishedAt,
            color: isDarkMode ? '#fff' : 'purple',
          }}>
          publishedAt: {item.publishedAt}
        </Text>

        <Line width="75%" height={1} color={isDarkMode ? '#fff' : '#c2bebe'} />
        <Text
          style={{
            ...styles.author,
            color: isDarkMode ? '#fff' : 'purple',
          }}>
          auther: {item.author}
        </Text>

        <Image source={{uri: item.urlToImage}} style={styles.image} />
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  articleContainer: {
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 2,
    // backgroundColor: '#fff',
    borderWidth: 1,
    padding: 10,
    borderRadius: 4,
    marginBottom: 10,
    marginTop: 10,
  },
  title: {
    // fontWeight: 'bold',
    fontFamily: 'OpenSans-Bold',
    marginBottom: 5,
    // color: '#000',
  },
  author: {
    // color: 'purple',
    margin: 5,
    fontFamily: 'OpenSans-Regular',
  },
  publishedAt: {
    // color: 'purple',
    margin: 5,
    fontFamily: 'OpenSans-Regular',
  },
  image: {
    width: '100%',
    height: 150,
    marginVertical: 10,
    borderRadius: 5,
    // resizeMode: 'cover',
  },
});
