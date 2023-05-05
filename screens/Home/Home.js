import React from 'react';
import {Pressable, SafeAreaView, Text} from 'react-native';

// Importing the useSelector and useDispatch hooks from the React Redux library
// The useSelector hook allows us to select and retrieve data from the store
// The useDispatch hook allows us to dispatch actions to update the store
import {useDispatch, useSelector} from 'react-redux';

import {updateFirstName} from '../../redux/reducers/User';

import Header from '../../components/Header/Header';

import globalStyle from '../../assets/styles/globalStyle';

const Home = () => {
  // Using the useSelector hook to select the "user" slice of the store
  // This will return the user object containing firstName, lastName and userId fields
  const user = useSelector(state => state.user);

  // Using the useDispatch hook to get a reference to the dispatch function
  // This function allows us to dispatch actions to update the store
  const dispatch = useDispatch();

  console.log(user);

  return (
    <SafeAreaView style={[globalStyle.backgroundWhite, globalStyle.flex]}>
      <Header title={user.firstName + ' ' + user.lastName} />
      {/*dispatching updateFirstName action to the User so that our state gets updated with the new first name we want to use*/}
      <Pressable onPress={() => dispatch(updateFirstName({firstName: 'N'}))}>
        <Text>Press me to change first name</Text>
      </Pressable>
    </SafeAreaView>
  );
};

// Exporting the Home component to be used in other parts of the app
export default Home;
