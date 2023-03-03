import * as React from 'react';
import { View, SafeAreaView } from 'react-native';
import { useTranslation } from 'react-i18next';

import DatePicker from '@components/DatePicker';

export default function DatePickerDemo() {
  const { t } = useTranslation();
  return (
    <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <View style={{ width: '90%', justifyContent: 'center' }}>
        <DatePicker
          maxDaysSelect={4}
          title="Ida"
          buttonOpenTitle={t('Calendário')}
          buttonConfirmTitle={t('Confirmar')}
          selectedDates={(dates) => {
            console.log('Datas ida =', dates);
          }}
        />
        <DatePicker
          maxDaysSelect={4}
          title="Volta"
          buttonOpenTitle={t('calendario')}
          buttonConfirmTitle={t('confirmar')}
          selectedDates={(dates) => {
            console.log('Datas volta =>', dates);
          }}
        />
      </View>
    </SafeAreaView>
  );
}
