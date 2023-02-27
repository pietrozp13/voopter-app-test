import * as React from 'react';
import { View } from 'react-native';

import DatePicker from '../components/DatePicker';

export default function DatePickerDemo() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <DatePicker
        maxDaysSelect={4}
        title="Ida"
        buttonOpenTitle="Calendário"
        buttonConfirmTitle="Confirmar"
        selectedDates={(dates) => {
          console.log('DATESS =', dates);
        }}
      />
      <DatePicker
        maxDaysSelect={4}
        title="Volta"
        buttonOpenTitle="Calendário"
        buttonConfirmTitle="Confirmar"
        selectedDates={(dates) => {
          console.log('DATESS =', dates);
        }}
      />
    </View>
  );
}
