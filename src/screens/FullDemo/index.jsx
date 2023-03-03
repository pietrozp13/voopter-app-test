import { useState } from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import { useTranslation } from 'react-i18next';

import Toast from 'react-native-toast-message';

import logoImage from '@assets/logo.png';

import DatePicker from '@components/DatePicker';
import SelectCityAirport from '@components/Select';

import { getMinDate } from '@utils';

import { styles } from './styles';

export default function FullDemo({ navigation }) {
  const [form, setForm] = useState({});
  const { t } = useTranslation();

  const handleSetForm = (key, item) => {
    setForm((currentForm) => {
      return {
        ...currentForm,
        [key]: item,
      };
    });
  };

  const getCurrentMinDateBack = () => {
    if (form && form.idaData && Object.keys(form.idaData).length !== 0) {
      return getMinDate(Object.keys(form?.idaData));
    }
    return null;
  };

  const compare2DatesMin = (idaDate, voltaDate) => {
    const minIda = getMinDate(Object.keys(idaDate));
    const minVolta = getMinDate(Object.keys(voltaDate));
    return new Date(minIda) <= new Date(minVolta);
  };

  const validate = () => {
    let errorMsg = false;
    compare2DatesMin(form?.idaData, form?.voltaData);
    if (Object.keys(form.idaData).length === 0) errorMsg = 'Você deve selecionar uma data de ida';
    if (Object.keys(form.destino).length === 0 && Object.keys(form.origem).length === 0)
      errorMsg = 'Você deve selecionar uma origem e um destino';
    if (!compare2DatesMin(form?.idaData, form?.voltaData))
      errorMsg = 'A data de volta não pode ser menor que de ida';
    if (errorMsg) {
      Toast.show({
        type: 'error',
        text1: 'Ops! estão faltando algumas informações',
        text2: errorMsg,
        topOffset: 70,
        visibilityTime: 5000,
      });
    }
    return !errorMsg;
  };

  const handleShowFlights = () => {
    if (validate()) {
      navigation.navigate('listFlights', form);
    }
  };

  const disabled = form?.idaData && Object.keys(form.idaData).length === 0;

  return (
    <View style={styles.mainContainer}>
      <View style={styles.logoContainer}>
        <View style={{ borderRadius: 6 }}>
          <Image source={logoImage} style={styles.image} />
        </View>
      </View>
      <View style={styles.cardContainer}>
        <View style={styles.searchIda}>
          <SelectCityAirport
            title={t('origem')}
            onSelectCityAirport={(item) => handleSetForm('origem', item)}
          />
        </View>
        <View style={styles.searchVolta}>
          <SelectCityAirport
            title={t('destino')}
            onSelectCityAirport={(item) => handleSetForm('destino', item)}
          />
        </View>
        <View style={styles.divider} />
        <View style={styles.datePickerContainer}>
          <DatePicker
            maxDaysSelect={4}
            title={t('ida')}
            buttonOpenTitle={t('calendario')}
            buttonConfirmTitle={t('confirmar')}
            selectedDates={(dates) => {
              handleSetForm('idaData', dates);
            }}
          />
          <DatePicker
            maxDaysSelect={4}
            title={t('volta')}
            buttonOpenTitle={t('calendario')}
            buttonConfirmTitle={t('confirmar')}
            minDate={getCurrentMinDateBack()}
            disabled={disabled}
            selectedDates={(dates) => {
              handleSetForm('voltaData', dates);
            }}
          />
        </View>
      </View>
      <TouchableOpacity
        disabled={disabled}
        style={{ ...styles.buttonContainer, opacity: disabled ? 0.3 : 1 }}
        onPress={handleShowFlights}
      >
        <Text style={styles.buttonText}>{t('pesquisar')}</Text>
      </TouchableOpacity>
      <Toast />
    </View>
  );
}
