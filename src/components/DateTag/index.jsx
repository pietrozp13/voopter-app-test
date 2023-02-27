import { View, Text, Pressable } from 'react-native';

import { styles } from './styles';

const DAYS_COLORS = ['#8936b3', '#36b336', '#ffb84d', '#26587d'];

const BASICO_COLORS = {
  DEFAULT_BLUE: '#00aad6',
};

export default function DateTag({ date, color, onClose }) {
  console.log(date);
  const getDay = date.slice(5, 7);
  const getMonth = date.slice(8, 10);
  return (
    <View style={{ ...styles.dayTagsContainer, backgroundColor: color }}>
      <Text style={styles.dayTagsText}>
        {getDay}/{getMonth}
      </Text>
      <Pressable onPress={() => onClose(date)}>
        <Text style={styles.dayTagsText}> X</Text>
      </Pressable>
    </View>
  );
}
