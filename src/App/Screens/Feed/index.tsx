import {
  View,
  Text,
  StyleSheet,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {
  getNews,
  updateNewsQueryPage,
  updateNewsQueryQ,
} from '../../../state/actions';
import {selectNewsQuery, selectNewsState} from '../../../state/selectors';
import {useNavigation} from '@react-navigation/native';
import {renderItem} from './Components';
import {Article} from '../../../state/types';
import {RootStackParamList} from '../../Navigation';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import Icon from 'react-native-vector-icons/FontAwesome';
import {CustomInput as SearchInput} from '../../Components';

export const FeedScreen = () => {
  const [isSearchBar, setIsSearchBar] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  const dispatch = useDispatch();
  const {articles, loading, errMsg} = useSelector(selectNewsState);
  const query = useSelector(selectNewsQuery);
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  useEffect(() => {
    dispatch(getNews());
  }, [dispatch, query]);
  const onItemPress = (item: Article) => {
    navigation.navigate('ArticleDetails', {
      articleId: item.id,
    });
  };

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <Icon
            name="search"
            color="black"
            size={15}
            style={styles.searchIcon}
            onPress={() => {
              if (isSearchBar) {
                setSearchValue('');
              }
              setIsSearchBar(!isSearchBar);
            }}
          />
        );
      },
    });
  }, [navigation, isSearchBar]);

  useEffect(() => {
    dispatch(updateNewsQueryQ(searchValue));
  }, [dispatch, searchValue]);
  return (
    <View style={styles.feedContainer}>
      {articles.length === 0 && loading && (
        <ActivityIndicator size="large" color="#0000ff" />
      )}
      {errMsg !== '' && <Text>{errMsg}</Text>}
      {isSearchBar && (
        <SearchInput
          inputProps={{
            placeholder: 'Search',
            onChangeText: value => {
              setSearchValue(value);
              console.log('value', value);
            },
            value: searchValue,
          }}
        />
      )}

      {articles.length === 0 && !loading && (
        <View style={styles.noDataContainer}>
          <Text style={styles.noDataText}>No Data</Text>
        </View>
      )}
      {articles && articles.length > 0 && (
        <>
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
        </>
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
  searchIcon: {marginRight: 30},
  noDataContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  noDataText: {
    textAlign: 'center',
    fontSize: 20,
    fontFamily: 'OpenSans-Bold',
    color: '#000',
  },
});
