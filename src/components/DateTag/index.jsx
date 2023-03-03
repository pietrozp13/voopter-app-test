import { View, Text, Pressable } from 'react-native';

import { styles } from './styles';

import { AntDesign } from '@expo/vector-icons';

export default function DateTag({ date, color, onClose }) {
  const getDay = date.slice(8, 10);
  const getMonth = date.slice(5, 7);
  return (
    <View style={{ ...styles.dayTagsContainer, backgroundColor: color }}>
      <Text style={styles.dayTagsText}>
        {getDay}/{getMonth}
      </Text>
      {onClose && (
        <Pressable onPress={() => onClose(date)}>
          <AntDesign name="close" size={18} color="#fff" />
        </Pressable>
      )}
    </View>
  );
}
