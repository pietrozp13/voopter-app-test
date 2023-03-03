import * as React from 'react';
import { Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import FullDemo from '@screens/FullDemo';
import DatePickerDemo from '@screens/DatePickerDemo';
import ListFlightsDemo from '@screens/ListFlightsDemo';
import SelectDemo from '@screens/SelectDemo';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const FullDemoNav = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="start" component={FullDemo} options={{ headerShown: false }} />
      <Stack.Screen
        name="listFlights"
        component={ListFlightsDemo}
        options={{ headerShown: true, headerTitle: 'Voos', headerBackTitle: 'voltar' }}
      />
    </Stack.Navigator>
  );
};

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            const icons = {
              'Select Demo': '🏙️',
              'DatePicker Demo': '📅',
              'List Flights': '✈️',
              default: '🔍',
            };

            return <Text style={{ fontSize: 22 }}>{icons[route.name] || icons.default}</Text>;
          },
          headerShown: false,
        })}
      >
        <Tab.Screen name="Select Demo" component={SelectDemo} />
        <Tab.Screen name="DatePicker Demo" component={DatePickerDemo} />
        <Tab.Screen name="List Flights" component={ListFlightsDemo} />
        <Tab.Screen name="Demo" component={FullDemoNav} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
