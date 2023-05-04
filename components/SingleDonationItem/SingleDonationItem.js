import React from 'react';
import {Image, View} from 'react-native';
import PropTypes from 'prop-types';

import Badge from '../Badge/Badge';
import Header from '../Header/Header';

import style from './style';

const SingleDonationItem = props => {
  return (
    <View>
      <View>
        <Badge title={props.badgeTitle} />
        <Image source={{uri: props.uri}} style={style.image} />
      </View>
      <Header title={props.donationTitle} type={3} color={'#0A043C'} />
      <Header title={'$' + props.price.toFixed(2)} type={3} color={'#156CF7'} />
    </View>
  );
};

SingleDonationItem.propTypes = {
  uri: PropTypes.string.isRequired,
  badgeTitle: PropTypes.string.isRequired,
  donationTitle: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

export default SingleDonationItem;
