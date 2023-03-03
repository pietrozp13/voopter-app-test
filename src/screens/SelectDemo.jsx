import * as React from 'react';
import { Text, View } from 'react-native';

import SelectCityAirport from '@components/Select';

export default function SelectDemo() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Select Demo!</Text>
      <View style={{ width: '80%', justifyContent: 'center', alignItems: 'center' }}>
        <SelectCityAirport title={'Destino'} onSelectCityAirport={() => {}} />
      </View>
    </View>
  );
}
