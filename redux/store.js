// Importing the combineReducers function from Redux
import {combineReducers} from 'redux';

// Importing the User reducer from the ./reducers/User file
import User from './reducers/User';

// Creating a rootReducer that combines all reducers in the app
const rootReducer = combineReducers({
  // Here, we're combining the User reducer and calling it "user"
  user: User,
});

// Exporting the rootReducer to be used in the store
export default rootReducer;
