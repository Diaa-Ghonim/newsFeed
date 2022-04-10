import {
  View,
  Text,
  StyleSheet,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getNews} from '../../../state/actions';
import {selectNewsState} from '../../../state/selectors';
import {useNavigation} from '@react-navigation/native';
import {renderItem} from './Components';

// type Props = {};

export const FeedScreen = () => {
  const dispatch = useDispatch();
  const {articles, loading, errMsg} = useSelector(selectNewsState);
  const navigation = useNavigation();

  useEffect(() => {
    dispatch(getNews());
  }, [dispatch]);

  const onItemPress = () => {
    navigation.navigate('ArticleDetails' as never);
  };

  return (
    <View style={styles.feedContainer}>
      {loading && <ActivityIndicator size="large" color="#0000ff" />}
      {errMsg !== '' && <Text>{errMsg}</Text>}
      {articles.length > 0 && (
        <FlatList
          contentContainerStyle={styles.flatList}
          data={articles}
          renderItem={({item}) => {
            return renderItem({item, onItemPress});
          }}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  feedContainer: {
    flex: 1,
    paddingVertical: 10,
    paddingRight: 5,
    paddingLeft: 15,
    // backgroundColor: '#fff',
  },
  flatList: {
    paddingRight: 10,
  },
});
