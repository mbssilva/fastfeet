import React from 'react';
import { useSelector } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
// import Profile from './pages/Profile';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function Routes() {
  const signed = useSelector((state) => state.login.signed);

  return (
    <NavigationContainer>
      {signed ? (
        <Tab.Navigator
          lazy={false}
          tabBarOptions={{
            activeTintColor: '#fff',
            inactiveTintColor: 'rgba(255, 255, 255, 0.55)',
            keyboardHidesTabBar: true,
            style: {
              backgroundColor: '#8d41a8',
              height: 60,
              paddingBottom: 8,
            },
          }}
        >
          <Tab.Screen
            name="Dashboard"
            component={Dashboard}
            options={Dashboard.navigationOptions}
          />
          {/* <Tab.Screen
            name="Profile"
            component={Profile}
            options={Profile.navigationOptions}
          /> */}
        </Tab.Navigator>
      ) : (
        <Stack.Navigator
          initialRouteName="Login"
          headerMode="none"
          screenOptions={{ headerShown: false }}
        >
          <Stack.Screen name="Login" component={Login} />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
}

export default Routes;
