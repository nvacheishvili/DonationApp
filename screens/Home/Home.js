import React from 'react';
import {SafeAreaView} from 'react-native';
import Search from '../../components/Search/Search';
import style from './style';
import globalStyle from '../../assets/styles/globalStyle';
import SingleDonationItem from '../../components/SingleDonationItem/SingleDonationItem';

const Home = () => {
  return (
    <SafeAreaView style={[globalStyle.backgroundWhite, globalStyle.flex]}>
      {/*<Search*/}
      {/*  onSearch={value => {*/}
      {/*    console.log(value);*/}
      {/*  }}*/}
      {/*/>*/}
      <SingleDonationItem
        uri={
          'https://img.pixers.pics/pho_wat(s3:700/FO/44/24/64/31/700_FO44246431_ab024cd8251bff09ce9ae6ecd05ec4a8.jpg,525,700,cms:2018/10/5bd1b6b8d04b8_220x50-watermark.png,over,305,650,jpg)/stickers-cactus-cartoon-illustration.jpg.jpg'
        }
        badgeTitle={'Environment'}
        donationTitle={'Tree Cactus'}
        price={44}
      />
    </SafeAreaView>
  );
};

export default Home;
