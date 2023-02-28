import { useEffect, useState } from 'react';
import { Modal, View, Button, Text, SafeAreaView, Pressable } from 'react-native';

import { Calendar } from 'react-native-calendars';
import { LocaleConfig } from 'react-native-calendars';

import { AntDesign } from '@expo/vector-icons';
import { styles } from './styles';

import DateTag from '../DateTag';

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

const DAYS_COLORS = ['#8936b3', '#36b336', '#ffb84d', '#26587d'];

const BASICO_COLORS = {
  DEFAULT_BLUE: '#00aad6',
};

export default function DatePicker({
  maxDaysSelect = 4,
  selectedDates,
  title = 'title',
  buttonOpenTitle = 'Calendário',
  buttonConfirmTitle = 'Confirmar',
}) {
  const [showCalendar, setShowCalendar] = useState(false);
  const [currentDatesMarked, setCurrentDatesMarked] = useState({});

  useEffect(() => {
    selectedDates(currentDatesMarked);
  }, [currentDatesMarked]);

  const toogleDate = (date) => {
    const currentDatesMarkedSize = Object.keys(currentDatesMarked).length;

    if (!currentDatesMarked[date] && maxDaysSelect > currentDatesMarkedSize) {
      setCurrentDatesMarked((dates) => {
        return {
          ...dates,
          [date]: {
            selected: true,
            selectedColor: DAYS_COLORS[currentDatesMarkedSize],
          },
        };
      });
    } else {
      setCurrentDatesMarked((prevData) => {
        const newData = { ...prevData };
        delete newData[date];
        return newData;
      });
    }
  };

  return (
    <>
      <Text style={styles.title}>{title}</Text>
      <Pressable style={styles.inputContainer} onPress={() => setShowCalendar(true)}>
        <AntDesign name="calendar" size={28} color="gray" />
        <View style={styles.input}>
          {Object.keys(currentDatesMarked).map((day) => {
            return (
              <DateTag
                key={day}
                date={day}
                color={currentDatesMarked[day].selectedColor}
                onClose={toogleDate}
              />
            );
          })}
        </View>
      </Pressable>
      <Modal animationType="fade" transparent={true} visible={showCalendar}>
        <SafeAreaView style={styles.modalContainer}>
          <Calendar
            onDayPress={(date) => {
              toogleDate(date.dateString);
            }}
            enableSwipeMonths={true}
            minDate={'2023-02-27'} // mudar para data atual auto
            theme={{
              arrowColor: BASICO_COLORS.DEFAULT_BLUE,
              'stylesheet.calendar.header': {
                week: {
                  marginTop: 10,
                  marginBottom: 100,
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                },
              },
            }}
            markedDates={currentDatesMarked}
          />
          <Button title={buttonConfirmTitle} onPress={() => setShowCalendar(false)} />
        </SafeAreaView>
      </Modal>
    </>
  );
}
