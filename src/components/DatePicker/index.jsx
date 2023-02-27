import * as React from 'react';
import { Text, View } from 'react-native';

import {Calendar, CalendarList, Agenda} from 'react-native-calendars';

import {LocaleConfig} from 'react-native-calendars';

LocaleConfig.locales['pt-br'] = {
  monthNames: [
    'Janeiro',
    'Fevereiro',
    'Março',
    'Abril',
    'Maio',
    'Junho',
    'Julho',
    'Agosto',
    'Setembro',
    'Outubro',
    'Novembro',
    'Dezembro',
  ],
  monthNamesShort: [
    'Jan',
    'Fev',
    'Mar',
    'Abr',
    'Mai',
    'Jun',
    'Jul.',
    'Ago',
    'Set',
    'Out',
    'Nov',
    'Dec',
  ],
  dayNames: [
    'Domingo',
    'Segunda-feira',
    'Terça-feira',
    'Quarta-feira',
    'Quinta-feira',
    'Sexta-feira',
    'Sábado',
  ],
  dayNamesShort: ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'],
  today: 'Hoje',
};
LocaleConfig.defaultLocale = 'pt-br';

const COLORS = {
  DAY1: '#8936b3',
  DAY2: '#36b336',
  DAY3: '#ffb84d',
  DAY4: '#26587d'
}

export default function DatePicker() {
    return (
        <Calendar
          // Collection of dates that have to be marked. Default = {}
          initialDate={'2023-02-26'}
          theme={{
            arrowColor: '#00aad6',
            'stylesheet.calendar.header': {
              week: {
                marginTop: 10,
                marginBottom: 100,
                flexDirection: 'row',
                justifyContent: 'space-between'
              }
            }
          }}
          markedDates={{
            '2023-02-26': {selected: true, marked: false, selectedColor: COLORS.DAY1},
            '2023-02-27': {selected: true, marked: false, selectedColor: COLORS.DAY2},
            '2023-02-28': {selected: true, marked: false, selectedColor: COLORS.DAY3},
            '2023-03-01': {selected: true, marked: false, selectedColor: COLORS.DAY4},
          }}
        />
    );
  }