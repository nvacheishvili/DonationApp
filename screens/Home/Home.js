import React from 'react';
import {SafeAreaView} from 'react-native';
// Importing the useSelector hook from the React Redux library
// This hook allows us to select and retrieve data from the store
import {useSelector} from 'react-redux';

import Header from '../../components/Header/Header';

import globalStyle from '../../assets/styles/globalStyle';

const Home = () => {
  // Using the useSelector hook to select the "user" slice of the store
  // This will return the user object containing firstName, lastName and userId fields
  const user = useSelector(state => state.user);
  console.log(user);
  return (
    <SafeAreaView style={[globalStyle.backgroundWhite, globalStyle.flex]}>
      <Header title={user.firstName + ' ' + user.lastName} />
    </SafeAreaView>
  );
};

export default Home;
