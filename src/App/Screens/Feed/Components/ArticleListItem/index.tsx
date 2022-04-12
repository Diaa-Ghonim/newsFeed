/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Image, TouchableWithoutFeedback, View, StyleSheet} from 'react-native';
import {Article} from '../../../../../state/types';
import {AppText, Line} from '../../../../Components';
import {Colors} from '../../../../../constants/Colors';

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
  const lineColor = isDarkMode ? Colors.lightLine : Colors.darkLine;
  const metaDataColor = isDarkMode ? Colors.light : Colors.purple;
  const titleColor = isDarkMode ? Colors.light : Colors.dark;
  return (
    <TouchableWithoutFeedback onPress={() => onItemPress(item)}>
      <View
        style={{
          ...styles.articleContainer,
          backgroundColor: isDarkMode ? '#212121' : '#fff',
          borderColor: isDarkMode ? '#000' : '#ddd',
        }}
        key={item.author}>
        <AppText.BoldText style={{color: titleColor}}>
          {item.title}
        </AppText.BoldText>
        <Line width="90%" height={1} color={lineColor} />

        <AppText.RegularText style={{color: metaDataColor}}>
          {item.publishedAt}
        </AppText.RegularText>

        <Line width="75%" height={1} color={lineColor} />

        <AppText.RegularText style={{color: metaDataColor}}>
          {item.author}
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
    // paddingVertical: 20,
    // paddingHorizontal: 10,
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
