import { useState } from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import { useTranslation } from 'react-i18next';

import Toast from 'react-native-toast-message';

import logoImage from '@assets/logo.png';

import DatePicker from '@components/DatePicker';
import SelectCityAirport from '@components/Select';

import { getMinDate } from '@utils';

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

  const validate = () => {
    let errorMsg = false;
    if (Object.keys(form.idaData).length === 0) errorMsg = 'Você deve selecionar uma data de ida';
    if (Object.keys(form.destino).length === 0 && Object.keys(form.origem).length === 0)
      errorMsg = 'Você deve selecionar uma origem e um destino';
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

  const disabledDestino = form?.idaData && Object.keys(form.idaData).length === 0;
  return (
    <View style={{ flex: 1, alignItems: 'center' }}>
      <View
        style={{
          width: '100%',
          height: '40%',
          borderRadius: 6,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#009FCD',
        }}
      >
        <View style={{ borderRadius: 6 }}>
          <Image
            source={logoImage}
            style={{
              borderRadius: 6,
              backgroundColor: '#fff',
              width: 200,
              height: 70,
              resizeMode: 'contain',
            }}
          />
        </View>
      </View>
      <View
        style={{
          width: '85%',
          // height: '40%',
          top: '-5%',
          borderRadius: 6,
          padding: 10,
          alignItems: 'center',
          backgroundColor: '#fff',
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.29,
          shadowRadius: 1.65,

          elevation: 5,
        }}
      >
        <View style={{ height: 80, width: '100%', zIndex: 10 }}>
          <SelectCityAirport
            title={t('origem')}
            onSelectCityAirport={(item) => handleSetForm('origem', item)}
          />
        </View>
        <View style={{ height: 80, width: '100%', zIndex: 9 }}>
          <SelectCityAirport
            title={t('destino')}
            onSelectCityAirport={(item) => handleSetForm('destino', item)}
          />
        </View>
        <View style={{ flex: 1, width: '100%', borderBottomWidth: 1, borderColor: '#cacaca96' }} />
        <View style={{ width: '100%', marginTop: 4, zIndex: 7 }}>
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
            disabled={disabledDestino}
            selectedDates={(dates) => {
              handleSetForm('voltaData', dates);
            }}
          />
        </View>
      </View>
      {/* <Text>{JSON.stringify(form)}</Text> */}
      <TouchableOpacity
        style={{
          width: '85%',
          height: 50,
          borderRadius: 6,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#009FCD',

          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.29,
          shadowRadius: 1.65,

          elevation: 5,
        }}
        onPress={handleShowFlights}
      >
        <Text style={{ color: '#fff', fontSize: 20, fontWeight: 700 }}>{t('pesquisar')}</Text>
      </TouchableOpacity>
      <Toast />
    </View>
  );
}
