import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
// import {useNavigation} from '@react-navigation/native';
import {RootStackParamList} from '../../Navigation';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {useSelector} from 'react-redux';
import {selectNewsState} from '../../../state/selectors';
import {Line} from '../../Components';

type Props = NativeStackScreenProps<RootStackParamList, 'ArticleDetails'>;

export const ArticleDetails = ({route}: Props) => {
  // const navigation = useNavigation();
  const {articles} = useSelector(selectNewsState);
  const article = articles.find(art => art.id === route?.params?.articleId);
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.wrapper}>
          <View style={styles.container}>
            <Text style={styles.title}>{article?.title}</Text>
            <Line width="90%" color="#c2bebe" height={1} />

            <Text style={styles.publishedAt}>At: {article?.publishedAt}</Text>
            <Line width="70%" color="#c2bebe" height={1} />

            <Text style={styles.author}>By: {article?.author}</Text>
            <Line width="50%" color="#c2bebe" height={1} />

            <Text style={styles.content}>{article?.content}</Text>
            <Image source={{uri: article?.urlToImage}} style={styles.image} />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    padding: 10,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  wrapper: {
    padding: 10,
  },
  title: {
    fontWeight: 'bold',
    marginBottom: 5,
  },
  author: {
    color: 'purple',
    marginVertical: 5,
    fontSize: 15,
  },
  publishedAt: {
    color: 'purple',
    marginVertical: 5,
    fontSize: 15,
  },
  content: {
    marginVertical: 10,
    fontSize: 16,
  },
  image: {
    width: '100%',
    height: 500,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#ddd',
    marginTop: 20,
    // resizeMode: 'stretch',
  },
});
