import { useState, useEffect } from 'react';
import { Text, View, FlatList, SafeAreaView } from 'react-native';

import FlightCard from '@components/FlightCard';
import DateTag from '@components/DateTag';
import Pagination from '@components/Pagination';

import { getFlights } from '@services';

export default function ListFlightsDemo({ route, navigation }) {
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const form = route.params;

  useEffect(() => {
    handleGetFlights();
  }, [page]);

  const handleGetFlights = async () => {
    setLoading(true);
    const fullData = await getFlights(form, page);
    setSearchResults(fullData);
    setLoading(false);
  };

  const hasFormData =
    form &&
    form.idaData &&
    (Object.keys(form?.idaData).length || Object.keys(form?.voltaData).length);

  if (searchResults.length <= 0 || loading)
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <Text>Loading ...</Text>
      </SafeAreaView>
    );
  return (
    <SafeAreaView style={{ flex: 1 }}>
      {!!hasFormData && (
        <View
          style={{
            backgroundColor: '#fff',
            marginVertical: 6,
            marginHorizontal: 4,
            borderRadius: 6,
            padding: 6,
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
          {!!Object.keys(form?.idaData).length && (
            <View>
              <Text
                style={{
                  margin: 6,
                  fontSize: 14,
                  fontWeight: 600,
                  color: '#6d6d6d',
                }}
              >
                Ida
              </Text>
              <View style={{ flexDirection: 'row' }}>
                {Object.keys(form?.idaData).map((day) => {
                  return <DateTag key={day} date={day} color={form?.idaData[day].selectedColor} />;
                })}
              </View>
            </View>
          )}
          {!!Object.keys(form?.voltaData).length && (
            <View>
              <Text
                style={{
                  margin: 6,
                  fontSize: 14,
                  fontWeight: 600,
                  color: '#6d6d6d',
                }}
              >
                Volta
              </Text>
              <View style={{ flexDirection: 'row' }}>
                {Object.keys(form?.voltaData).map((day) => {
                  return (
                    <DateTag key={day} date={day} color={form?.voltaData[day].selectedColor} />
                  );
                })}
              </View>
            </View>
          )}
        </View>
      )}
      <FlatList
        ListFooterComponent={() => {
          return <Pagination page={page} onNext={setPage} onPrev={setPage} />;
        }}
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
    </SafeAreaView>
  );
}
