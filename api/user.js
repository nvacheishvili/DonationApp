import auth from '@react-native-firebase/auth';

export const createUser = async (fullName, email, password) => {
  try {
    const user = await auth().createUserWithEmailAndPassword(email, password);
    await user.user.updateProfile({displayName: fullName});
    return user;
  } catch (error) {
    if (error.code === 'auth/email-already-in-use') {
      return {error: 'The email you entered is already in use.'};
    } else if (error.code === 'auth/invalid-email') {
      return {error: 'Please enter a valid email address.'};
    }
    return {error: 'Something went wrong with your request.'};
  }
};
