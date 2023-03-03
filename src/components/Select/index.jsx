import { useEffect, useRef, useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useTranslation } from 'react-i18next';

import Fuse from 'fuse.js';
import Autocomplete from 'react-native-autocomplete-input';
import { AntDesign } from '@expo/vector-icons';

import { getCitiesAirports } from '@services';
import { queueAction } from '@utils';

import { styles, colors } from './styles';

export default function SelectCityAirport({ onSelectCityAirport = () => {}, title = 'title' }) {
  const [searchResults, setSearchResults] = useState([]);
  const [selectedCityAirport, setSelectedCityAirport] = useState(null);
  const [textSearch, setTextSearch] = useState('');

  const { t } = useTranslation();

  const fuseRef = useRef();

  useEffect(() => {
    getCityAndAirports();
  }, []);

  const getCityAndAirports = async () => {
    const fullData = await getCitiesAirports();
    fuseRef.current = new Fuse(fullData, {
      keys: [
        {
          name: 'city',
          weight: 0.6,
        },
        {
          name: 'iata_code',
          weight: 0.4,
        },
      ],
    });
  };

  useEffect(() => {
    // debounce to prevent multiples request or over processing
    queueAction(
      textSearch,
      () => setSearchResults(fuseRef?.current?.search(textSearch, { limit: 5 }) || []),
      100
    );
    if (textSearch === '') {
      setSelectedCityAirport({});
      onSelectCityAirport({});
    }
  }, [textSearch]);

  const handleSelectCityAirport = (item) => {
    setSelectedCityAirport(item);
    onSelectCityAirport(item);
  };

  return (
    <>
      <View style={styles.autocompleteContainer}>
        <Text style={styles.title}>{title}</Text>
        <Autocomplete
          style={styles.autocompleteStyle}
          inputContainerStyle={styles.inputContainerStyle}
          listContainerStyle={styles.shadowCard}
          hideResults={selectedCityAirport?.name || textSearch === ''}
          autoCorrect={true}
          data={searchResults}
          value={
            (selectedCityAirport?.name &&
              `${selectedCityAirport.city} - ${selectedCityAirport.iata_code}`) ||
            textSearch
          }
          onChangeText={(text) => {
            setTextSearch(text);
            setSelectedCityAirport({});
          }}
          placeholder={t('cidadeOuAeroporto')}
          flatListProps={{
            keyboardShouldPersistTaps: 'always',
            keyExtractor: ({ item }) => item.iata_code + item.city,
            renderItem: ({ item: { item } }) => (
              <TouchableOpacity
                onPress={() => handleSelectCityAirport(item)}
                style={styles.autocompleteListContainer}
              >
                <Text>
                  ({item.iata_code}) - {item.city} - {item.country}
                </Text>

                <Text>{item.name}</Text>
              </TouchableOpacity>
            ),
          }}
        />
        {textSearch !== '' && (
          <TouchableOpacity
            onPress={() => {
              setTextSearch('');
              setSelectedCityAirport({});
            }}
            style={styles.closeButton}
          >
            <AntDesign name="close" size={22} color={colors.basicGray} />
          </TouchableOpacity>
        )}
      </View>
    </>
  );
}
