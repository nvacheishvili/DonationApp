import React from 'react';
import {SafeAreaView} from 'react-native';
import Header from '../../components/Header/Header';

import style from './style';
import globalStyle from '../../assets/styles/globalStyle';
import Button from '../../components/Button/Button';

const Home = () => {
  return (
    <SafeAreaView style={[globalStyle.backgroundWhite, globalStyle.flex]}>
      <Header title={'Azzahri A.'} type={1} />
      <Button
        title={'Donate'}
        onPress={() => {
          console.log('You just pressed me!');
        }}
      />
      <Button title={'Donate'} isDisabled={true} />
    </SafeAreaView>
  );
};

export default Home;
