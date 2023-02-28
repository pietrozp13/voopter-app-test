import { useEffect, useRef, useState } from 'react';
import { View, Text, Pressable, TextInput } from 'react-native';

import Fuse from 'fuse.js';

import { getCitiesAirports } from '../../services';
import { useDebounce } from '../../hooks/useDebounce';

import { styles } from './styles';

export default function SelectCityAirport({ selectCityAirport = () => {} }) {
  const [searchResults, setSearchResults] = useState([]);
  const [selectedCityAirport, setSelectedCityAirport] = useState(null);
  const [textSearch, setTextSearch] = useState('');

  console.log({ selectedCityAirport });

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

  useDebounce(
    () => {
      getSearchResults(textSearch);
    },
    [textSearch, searchResults],
    100
  );

  const getSearchResults = async (text) => {
    setSearchResults(fuseRef.current.search(text));
  };

  const handleSelectCityAirport = (item) => {
    setSelectedCityAirport(item);
    selectCityAirport(item);
  };

  return (
    <View style={{ ...styles.dayTagsContainer }}>
      <TextInput
        style={{
          height: 40,
          margin: 12,
          borderWidth: 1,
          padding: 10,
        }}
        onChangeText={setTextSearch}
        value={textSearch}
      />
      {searchResults.length > 0 &&
        searchResults.splice(0, 5).map(({ item }) => {
          return (
            <Pressable
              onPress={() => handleSelectCityAirport(item)}
              key={item.iata_code}
              style={{ borderColor: 'red', borderWidth: 1, margin: 3 }}
            >
              <Text>{item.city}</Text>
              <Text>{item.country}</Text>
              <Text>{item.iata_code}</Text>
              <Text>{item.name}</Text>
            </Pressable>
          );
        })}
    </View>
  );
}
