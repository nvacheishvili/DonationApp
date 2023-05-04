import React from 'react';
import {SafeAreaView} from 'react-native';
import Search from '../../components/Search/Search';
import style from './style';
import globalStyle from '../../assets/styles/globalStyle';

const Home = () => {
  return (
    <SafeAreaView style={[globalStyle.backgroundWhite, globalStyle.flex]}>
      <Search
        onSearch={value => {
          console.log(value);
        }}
      />
    </SafeAreaView>
  );
};

export default Home;
