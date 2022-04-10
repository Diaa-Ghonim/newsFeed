import {View, Text} from 'react-native';
import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getNews} from '../../../state/actions';
import {selectNewsState} from '../../../state/selectors';
import {useNavigation} from '@react-navigation/native';

// type Props = {};

export const FeedScreen = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const {articles, loading, errMsg} = useSelector(selectNewsState);
  console.log('articles', articles[0]);
  console.log('loading', loading);
  console.log('errMsg', errMsg);

  useEffect(() => {
    dispatch(getNews());
  }, [dispatch]);
  return (
    <View>
      <Text
        onPress={() => {
          navigation.navigate('ArticleDetails' as never);
        }}>
        {articles[0].author}
      </Text>
      <Text>{articles[0].title}</Text>
      <Text>{articles[0].content}</Text>
    </View>
  );
};
