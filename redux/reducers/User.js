// Importing the createSlice function from the Redux Toolkit
import {createSlice} from '@reduxjs/toolkit';

// Defining the initial state for the user slice of the store
const initialState = {
  firstName: 'Nata',
  lastName: 'Vacheishvili',
  userId: 1,
  profileImage:
    'https://cdn.dribbble.com/users/1577045/screenshots/4914645/media/028d394ffb00cb7a4b2ef9915a384fd9.png?compress=1&resize=400x300&vertical=top',
};

// Creating a new slice of the store named "user" with its own set of reducers
export const User = createSlice({
  name: 'user',
  initialState: initialState,
  reducers: {
    // Defining the "updateFirstName" reducer function
    // It takes the current state and an action object as parameters
    // It updates the firstName field of the state with the payload value of the action
    updateFirstName: (state, action) => {
      state.firstName = action.payload.firstName;
    },
    resetToInitialState: () => {
      return initialState;
    },
  },
});

// Exporting the reducers here from the "User" slice
// makes them available to other parts of the app that want to use it
export const {resetToInitialState, updateFirstName} = User.actions;
export default User.reducer;
