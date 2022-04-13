/* eslint-disable react-native/no-inline-styles */
import {
  View,
  StyleSheet,
  FlatList,
  ActivityIndicator,
  // useColorScheme,
  // RefreshControl,
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
import {
  CustomInput as SearchInput,
  ErrorMessage,
  NoData,
} from '../../Components';
import {useTranslation} from 'react-i18next';
import {useThemeContext} from '../../contexts';

export const FeedScreen = () => {
  // const isDarkMode = useColorScheme() === 'dark';
  const theme = useThemeContext();
  const {t} = useTranslation();
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
            color={theme.color}
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
  }, [navigation, isSearchBar, theme]);

  useEffect(() => {
    dispatch(updateNewsQueryQ(searchValue));
  }, [dispatch, searchValue]);
  return (
    <View
      style={[
        styles.feedContainer,
        {backgroundColor: theme.feedScreenBackgroundColor},
      ]}>
      {articles.length === 0 && loading && (
        <ActivityIndicator size="large" color={theme.activityIndicator} />
      )}

      {isSearchBar && (
        <SearchInput
          inputProps={{
            placeholder: t('Search'),
            placeholderTextColor: '#111',
            onChangeText: value => setSearchValue(value),
            value: searchValue,
          }}
        />
      )}

      {errMsg !== '' && (
        <ErrorMessage message={errMsg} messageContainerStyle={{flex: 1}} />
      )}

      {articles.length === 0 && !errMsg && !loading && <NoData />}

      {articles && articles.length > 0 && (
        <>
          <FlatList
            refreshing={loading}
            onRefresh={() => {
              dispatch(updateNewsQueryPage(query.page + 1));
            }}
            // refreshControl={
            //   <RefreshControl
            //     refreshing={loading}
            //     onRefresh={() => {
            //       dispatch(updateNewsQueryPage(query.page + 1));
            //     }}
            //     // tintColor={isDarkMode ? '#fff' : '#000'}
            //     // titleColor={isDarkMode ? '#fff' : '#000'}
            //   />
            // }
            contentContainerStyle={styles.flatList}
            data={articles}
            renderItem={({item}) => {
              return renderItem({item, onItemPress, theme});
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
    // paddingRight: 5,
    paddingLeft: 5,
  },
  flatList: {
    paddingRight: 5,
  },
  searchIcon: {marginRight: 30},
});
