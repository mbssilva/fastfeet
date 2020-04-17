import React from 'react';
import propTypes from 'prop-types';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/MaterialIcons';

import Orders from './Orders';
import Details from './Details';
import InformProblem from './InformProblem';
import VisualizeProblem from './VisualizeProblem';
import ConfirmOrder from './ConfirmOrder';

const Stack = createStackNavigator();

function Dashboard() {
  return (
    <Stack.Navigator
      initialRouteName="Orders"
      headerMode="screen"
      keyboardHandlingEnabled
      screenOptions={{
        headerTransparent: false,
        headerTintColor: '#7159c1',
        headerStyle: {
          backgroundColor: '#808080',
        },
        headerLeftContainerStyle: {
          marginLeft: 20,
        },
        headerTitleAlign: 'center',
      }}
    >
      <Stack.Screen
        name="Orders"
        component={Orders}
        options={Orders.navigationOptions}
      />
      <Stack.Screen
        name="Details"
        component={Details}
        options={Details.navigationOptions}
      />
      <Stack.Screen
        name="InformProblem"
        component={InformProblem}
        options={InformProblem.navigationOptions}
      />
      <Stack.Screen
        name="VisualizeProblem"
        component={VisualizeProblem}
        options={VisualizeProblem.navigationOptions}
      />
      <Stack.Screen name="ConfirmOrder" component={ConfirmOrder} />
    </Stack.Navigator>
  );
}

function DashboardTabIcon({ color }) {
  return <Icon name="reorder" size={25} color={color} />;
}

Dashboard.navigationOptions = {
  tabBarVisible: true,
  tabBarLabel: 'Entrega',
  tabBarIcon: DashboardTabIcon,
};

DashboardTabIcon.propTypes = {
  color: propTypes.string.isRequired,
};

export default Dashboard;
