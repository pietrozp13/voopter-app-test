import { useState, useEffect } from 'react';
import { Text, View, FlatList } from 'react-native';

import FlightCard from '../components/FlightCard';

import { getFlights } from '../services';

export default function ListFlightsDemo() {
  const [searchResults, setSearchResults] = useState([]);
  useEffect(() => {
    handleGetFlights();
  }, []);

  const handleGetFlights = async () => {
    const fullData = await getFlights();
    setSearchResults(fullData);
  };

  if (searchResults.length <= 0) return <Text>loading</Text>;
  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={searchResults}
        renderItem={({ item }) => {
          const { airlineLogo, price, outbound, back, departureAirport, arrivalAirport } = item;
          return (
            <FlightCard
              airlineLogo={airlineLogo}
              price={price}
              outbound={outbound}
              back={back}
              departureAirport={departureAirport}
              arrivalAirport={arrivalAirport}
            />
          );
        }}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}
