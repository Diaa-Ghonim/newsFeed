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
}

export const renderItem = ({item, onItemPress = () => {}}: Props) => {
  return (
    <TouchableWithoutFeedback onPress={() => onItemPress(item)}>
      <View style={styles.articleContainer} key={item.author}>
        <Text style={styles.title}>{item.title}</Text>

        <Line width="90%" height={1} color="#c2bebe" />
        <Text style={styles.publishedAt}>publishedAt: {item.publishedAt}</Text>

        <Line width="75%" height={1} color="#c2bebe" />
        <Text style={styles.author}>auther: {item.author}</Text>

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
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 10,
    borderRadius: 4,
    marginBottom: 10,
    marginTop: 10,
  },
  title: {
    // fontWeight: 'bold',
    fontFamily: 'OpenSans-Bold',
    marginBottom: 5,
    color: '#000',
  },
  author: {
    color: 'purple',
    margin: 5,
    fontFamily: 'OpenSans-Regular',
  },
  publishedAt: {
    color: 'purple',
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
