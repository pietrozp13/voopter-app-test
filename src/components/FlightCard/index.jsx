import { View, Text, Image, Pressable } from 'react-native';
import { useTranslation } from 'react-i18next';

import { FontAwesome5 } from '@expo/vector-icons';

import { styles, colors } from './styles';

export default function FlightCard({
  airlineLogo,
  price,
  departureAirport,
  arrivalAirport,
  outbound,
  back,
}) {
  const { t } = useTranslation();
  return (
    <Pressable style={styles.cardContainer}>
      <View style={styles.containerJustifyCenter}>
        <Image source={{ uri: airlineLogo }} style={styles.imageAirlineLogo} />
      </View>
      <View style={styles.bodyContainer}>
        {/* ida */}
        <View style={styles.destinyContainer}>
          <View style={styles.dateInfosContainer}>
            <FontAwesome5
              name="plane-departure"
              size={18}
              color={colors.vooperBlueBasic}
              style={{ marginRight: 4 }}
            />
            <View style={styles.textContainer}>
              <Text style={styles.basicText}>{outbound.day}</Text>
              <Text style={styles.basicText}>{outbound.weekName}</Text>
            </View>
          </View>

          <View style={styles.dateInfosContainer}>
            <View style={styles.textContainer}>
              <Text style={styles.basicText}>{outbound.departureTime}</Text>
              <Text style={styles.basicText}>{departureAirport}</Text>
            </View>
          </View>
          <View style={styles.dateInfosContainer}>
            <FontAwesome5 name="arrow-right" size={14} color={colors.basicGray} />
          </View>
          <View style={styles.dateInfosContainer}>
            <View style={styles.textContainer}>
              <Text style={styles.basicText}>{outbound.arrivalTime}</Text>
              <Text style={styles.basicText}>{arrivalAirport}</Text>
            </View>
          </View>

          <View style={styles.dateInfosContainer}>
            <View style={styles.textContainer}>
              <Text style={styles.basicText}>{outbound.duretion}</Text>
              <Text style={styles.basicText}>{t('horas')}</Text>
            </View>
          </View>
        </View>
        <View style={styles.divider} />
        {/* volta */}
        <View style={styles.destinyContainer}>
          <View style={styles.dateInfosContainer}>
            <FontAwesome5
              name="plane-arrival"
              size={20}
              color={colors.vooperBlueBasic}
              style={{ transform: [{ rotateY: '180deg' }], marginRight: 3 }}
            />
            <View style={styles.textContainer}>
              <Text style={styles.basicText}>{back.day}</Text>
              <Text style={styles.basicText}>{back.weekName}</Text>
            </View>
          </View>

          <View style={styles.dateInfosContainer}>
            <View style={styles.textContainer}>
              <Text style={styles.basicText}>{back.departureTime}</Text>
              <Text style={styles.basicText}>{departureAirport}</Text>
            </View>
          </View>
          <View style={styles.dateInfosContainer}>
            <FontAwesome5 name="arrow-left" size={14} color={colors.basicGray} />
          </View>
          <View style={styles.dateInfosContainer}>
            <View style={styles.textContainer}>
              <Text style={styles.basicText}>{back.arrivalTime}</Text>
              <Text style={styles.basicText}>{arrivalAirport}</Text>
            </View>
          </View>

          <View style={styles.dateInfosContainer}>
            <View style={styles.textContainer}>
              <Text style={styles.basicText}>{back.duretion}</Text>
              <Text style={styles.basicText}>horas</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.containerJustifyCenter}>
        <Text style={styles.priceText}>R${price}</Text>
      </View>
      <View style={styles.containerJustifyCenter}>
        <FontAwesome5 name="angle-right" size={14} color={colors.basicGray} />
      </View>
    </Pressable>
  );
}
