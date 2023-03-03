import { useEffect, useState } from 'react';
import { Modal, View, Button, Text, SafeAreaView, Pressable } from 'react-native';

import { Calendar } from 'react-native-calendars';
import { LocaleConfig } from 'react-native-calendars';

import { AntDesign } from '@expo/vector-icons';
import { styles } from './styles';

import DateTag from '../DateTag';

import { today } from '@utils';

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

// const DAYS_COLORS = ['#8936b3', '#36b336', '#ffb84d', '#26587d'];
const DAYS_COLORS = ['#00aad6', '#00aad6', '#00aad6', '#00aad6'];

const BASICO_COLORS = {
  DEFAULT_BLUE: '#00aad6',
};

export default function DatePicker({
  maxDaysSelect = 4,
  selectedDates,
  title = 'title',
  buttonConfirmTitle = 'Confirmar',
  minDate = null,
  disabled = false,
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
    <View style={{ opacity: disabled ? 0.3 : 1 }}>
      <Text style={styles.title}>{title}</Text>
      <Pressable
        style={styles.inputContainer}
        disabled={disabled}
        onPress={() => setShowCalendar(true)}
      >
        <AntDesign name="calendar" size={28} color="#a0a0a0" style={{ marginRight: 2 }} />
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
            style={styles.calendarContainer}
            onDayPress={(date) => {
              toogleDate(date.dateString);
            }}
            enableSwipeMonths={true}
            minDate={minDate || today()} // mudar para data atual auto
            theme={{
              arrowColor: BASICO_COLORS.DEFAULT_BLUE,
              'stylesheet.calendar.header': {
                week: styles.calendarWeek,
              },
            }}
            markedDates={currentDatesMarked}
          />
          <Pressable
            style={styles.confirmButton}
            onPress={() => {
              // selectedDates(currentDatesMarked);
              setShowCalendar(false);
            }}
          >
            <Text style={styles.confirmButtonText}>{buttonConfirmTitle}</Text>
          </Pressable>
        </SafeAreaView>
      </Modal>
    </View>
  );
}
