import React from 'react';
import { useSelector } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Login from './pages/Login';
import Orders from './pages/Orders';
import Profile from './pages/Profile';

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
            activeTintColor: '#7159c1',
            inactiveTintColor: 'rgba(80, 80, 80, 0.5)',
            keyboardHidesTabBar: true,
            style: {
              backgroundColor: '#fff',
              height: 60,
              paddingBottom: 8,
            },
          }}
        >
          <Tab.Screen
            name="Entregas"
            component={Orders}
            options={Orders.navigationOptions}
          />
          <Tab.Screen
            name="Meu perfil"
            component={Profile}
            options={Profile.navigationOptions}
          />
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
