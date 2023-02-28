import { View, Text, Image, Pressable } from 'react-native';

import { FontAwesome5 } from '@expo/vector-icons';

import { styles } from './styles';

export default function FlightCard({
  airlineLogo,
  price,
  departureAirport,
  arrivalAirport,
  outbound,
  back,
}) {
  return (
    <Pressable style={styles.cardContainer}>
      <View style={{ justifyContent: 'center', padding: 4 }}>
        <Image source={{ uri: airlineLogo }} style={styles.imageAirlineLogo} />
      </View>
      <View
        style={{
          flex: 1,
          flexDirection: 'column',
          justifyContent: 'center',
          marginHorizontal: 6,
        }}
      >
        {/* ida */}
        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <FontAwesome5 name="plane-departure" size={18} color="#00aad6" />
            <View style={{ flexDirection: 'column', marginHorizontal: 6, alignItems: 'center' }}>
              <Text style={styles.basicText}>{outbound.day}</Text>
              <Text style={styles.basicText}>{outbound.weekName}</Text>
            </View>
          </View>

          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <View style={{ flexDirection: 'column', marginHorizontal: 4, alignItems: 'center' }}>
              <Text style={styles.basicText}>{outbound.departureTime}</Text>
              <Text style={styles.basicText}>{departureAirport}</Text>
            </View>
          </View>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <FontAwesome5 name="arrow-right" size={14} color="gray" />
          </View>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <View style={{ flexDirection: 'column', marginHorizontal: 4, alignItems: 'center' }}>
              <Text style={styles.basicText}>{outbound.arrivalTime}</Text>
              <Text style={styles.basicText}>{arrivalAirport}</Text>
            </View>
          </View>

          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <View style={{ flexDirection: 'column', marginHorizontal: 4, alignItems: 'center' }}>
              <Text style={styles.basicText}>{outbound.duretion}</Text>
              <Text style={styles.basicText}>horas</Text>
            </View>
          </View>
        </View>
        <View
          style={{
            marginVertical: 6,
            borderTopColor: '#e0e0e0',
            borderTopWidth: 1,
          }}
        />
        {/* volta */}
        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <FontAwesome5
              name="plane-arrival"
              size={20}
              color="#00aad6"
              style={{ transform: [{ rotateY: '180deg' }] }}
            />
            <View style={{ flexDirection: 'column', marginHorizontal: 5, alignItems: 'center' }}>
              <Text style={styles.basicText}>{back.day}</Text>
              <Text style={styles.basicText}>{back.weekName}</Text>
            </View>
          </View>

          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <View style={{ flexDirection: 'column', marginHorizontal: 4, alignItems: 'center' }}>
              <Text style={styles.basicText}>{back.departureTime}</Text>
              <Text style={styles.basicText}>{departureAirport}</Text>
            </View>
          </View>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <FontAwesome5 name="arrow-left" size={14} color="gray" />
          </View>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <View style={{ flexDirection: 'column', marginHorizontal: 4, alignItems: 'center' }}>
              <Text style={styles.basicText}>{back.arrivalTime}</Text>
              <Text style={styles.basicText}>{arrivalAirport}</Text>
            </View>
          </View>

          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <View style={{ flexDirection: 'column', marginHorizontal: 4, alignItems: 'center' }}>
              <Text style={styles.basicText}>{back.duretion}</Text>
              <Text style={styles.basicText}>horas</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={{ justifyContent: 'center' }}>
        <Text style={{ ...styles.basicText, color: '#19c80c', fontSize: 14, fontWeight: 800 }}>
          R$ {price}
        </Text>
      </View>
    </Pressable>
  );
}
