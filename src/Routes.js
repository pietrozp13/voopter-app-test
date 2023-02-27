import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import FullDemo from './screens/FullDemo';
import DatePickerDemo from './screens/DatePickerDemo';
import ListFlightsDemo from './screens/ListFlightsDemo';
import SelectDemo from './screens/SelectDemo';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="DatePicker Demo" component={DatePickerDemo} />
        <Tab.Screen name="Select Demo" component={SelectDemo} />
        <Tab.Screen name="List Flights" component={ListFlightsDemo} />
        <Tab.Screen name="Full Demo" component={FullDemo} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}