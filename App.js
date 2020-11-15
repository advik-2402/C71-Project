import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs;'
import WriteStoryScreen from './screens/WriteStoryScreen.js';
import ReadStoryScreen from './screens/ReadStoryScreen.js';

export default function App() {
  return (
    <View style={styles.container}>
      <AppContainer />
    </View>
  );
}
const TabNavigator = createBottomTabNavigator({
  WriteStory: { screen: WriteStoryScreen },
  ReadStory: { screen: ReadStoryScreen }
},

  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ }) => {
        const routeName = navigation.state.routeName;
        if (routeName === "WriteStory") {
          return (
            <Image
              source={require("./write.png")}
              style={{
                width: 40,
                height: 40
              }}
            />
          )
        }
        else if (routeName === 'ReadStory') {
          return (
            <Image
              source={require("./read.png")}
              style={{
                width: 40,
                height: 40
              }}
            />
          )
        }
      },
    })
  }
);

const AppContainer = createAppContainer(TabNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
