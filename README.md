# DonationApp
This is a React Native project created using npx react-native init DonationApp command

To be able to run this project, please ensure that you have setup your environment correctly.

https://reactnative.dev/docs/environment-setup

This project includes branches and each branch has a modification that we made together during the course.

main
Here you will find the initial setup created using the npx react-native init DonationApp command
getting-started
Here you will find the modifications we made to transform this application into getting started mode for donation app.
If you'd like to run this project on your local environment please clone this project and unzip the file and place it somewhere, where you can find it using the terminal.

Once you unzip the project, inside the root of the project's directory for example: Desktop/DonationApp, first run

npm install

This command will ensure that you install all the node modules used by the project.

Once you do that please change directory to DonationApp/ios and run cd ios && pod install

This will install all the pods that are needed for the app to run for iOS.

Once you are done with all the instructions above, to run the project on iOS, please go back to the root of the directory cd ..

and then run

npx react-native run-ios

For android, you can run

npx react-native run-android
