/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Image, TouchableWithoutFeedback, View, StyleSheet} from 'react-native';
import {Article} from '../../../../../state/types';
import {AppText, Line} from '../../../../Components';

interface Props {
  item: Article;
  onItemPress: (item: Article) => void;
  theme: {[key: string]: string};
}

export const renderItem = ({item, onItemPress = () => {}, theme}: Props) => {
  return (
    <TouchableWithoutFeedback onPress={() => onItemPress(item)}>
      <View
        style={{
          ...styles.articleContainer,
          backgroundColor: theme.articleBackgroundColor,
          borderColor: theme.articleBorderColor,
        }}
        key={item.author}>
        <AppText.BoldText style={{color: theme.color}}>
          {item.title}
        </AppText.BoldText>
        <Line width="90%" height={1} color={theme.lineColor} />

        <AppText.RegularText style={{color: theme.metaDataColor}}>
          At : {item.publishedAt}
        </AppText.RegularText>

        <Line width="75%" height={1} color={theme.lineColor} />

        <AppText.RegularText style={{color: theme.metaDataColor}}>
          By : {item.author}
        </AppText.RegularText>
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
    borderWidth: 1,
    padding: 15,
    borderRadius: 4,
    marginBottom: 10,
    marginTop: 10,
  },
  image: {
    width: '100%',
    height: 150,
    marginVertical: 10,
    borderRadius: 5,
  },
});
