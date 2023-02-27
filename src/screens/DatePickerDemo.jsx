import * as React from 'react';
import { Text, View } from 'react-native';

import DatePicker from '../components/DatePicker'

export default function DatePickerDemo() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <DatePicker />
      </View>
    );
  }