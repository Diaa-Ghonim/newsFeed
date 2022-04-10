import {Text, View} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

// type Props = {}

export const ArticleDetails = () => {
  const navigation = useNavigation();
  return (
    <View>
      <Text
        onPress={() => {
          navigation.navigate('Feed' as never);
        }}>
        ArticleDetails
      </Text>
    </View>
  );
};

// const styles = StyleSheet.create({});
