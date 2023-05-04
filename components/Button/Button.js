import React from 'react';
import {Pressable, Text} from 'react-native';
import PropTypes from 'prop-types';
import style from './style';
const Button = props => {
  return (
    <Pressable
      disabled={props.isDisabled}
      style={[style.button, props.isDisabled && style.disabled]}
      onPress={() => props.onPress()}>
      <Text style={style.title}>{props.title}</Text>
    </Pressable>
  );
};

//accidentally types default in the video, but should actually be defaultProps
Button.defaultProps = {
  isDisabled: false,
  onPress: () => {},
};

Button.propTypes = {
  title: PropTypes.string.isRequired,
  isDisabled: PropTypes.bool,
  onPress: PropTypes.func,
};

export default Button;
