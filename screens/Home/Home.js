import React from 'react';
import {SafeAreaView} from 'react-native';
import Header from '../../components/Header/Header';

import style from './style';
import globalStyle from '../../assets/styles/globalStyle';

const Home = () => {
  return (
    <SafeAreaView style={[globalStyle.backgroundWhite, globalStyle.flex]}>
      <Header title={'Azzahri A.'} type={1} />
    </SafeAreaView>
  );
};

export default Home;
