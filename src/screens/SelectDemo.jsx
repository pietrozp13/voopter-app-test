import * as React from 'react';
import { Text, View } from 'react-native';

import SelectCityAirport from '../components/Select';

export default function SelectDemo() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>SelectDemo !</Text>
      <SelectCityAirport />
    </View>
  );
}
