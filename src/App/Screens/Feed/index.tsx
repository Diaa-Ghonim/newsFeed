import {
  View,
  Text,
  StyleSheet,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {
  getNews,
  updateNewsQueryPage,
  // updateNewsQueryTo,
} from '../../../state/actions';
import {selectNewsQuery, selectNewsState} from '../../../state/selectors';
import {useNavigation} from '@react-navigation/native';
import {renderItem} from './Components';

export const FeedScreen = () => {
  const dispatch = useDispatch();
  const {articles, loading, errMsg} = useSelector(selectNewsState);
  const query = useSelector(selectNewsQuery);
  const navigation = useNavigation();
  // console.log('{articles, loading, errMsg}', {articles, loading, errMsg});
  useEffect(() => {
    dispatch(getNews());
  }, [dispatch, query]);

  const onItemPress = () => {
    navigation.navigate('ArticleDetails' as never);
  };

  return (
    <View style={styles.feedContainer}>
      {articles.length === 0 && loading && (
        <ActivityIndicator size="large" color="#0000ff" />
      )}
      {errMsg !== '' && <Text>{errMsg}</Text>}
      {articles && articles.length > 0 && (
        <FlatList
          refreshing={loading}
          onRefresh={() => {
            dispatch(updateNewsQueryPage(query.page + 1));
          }}
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
  },
  flatList: {
    paddingRight: 10,
  },
});
