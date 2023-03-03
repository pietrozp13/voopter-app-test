import { View, Text, Pressable } from 'react-native';

import { styles } from './styles';

import { AntDesign } from '@expo/vector-icons';

export default function Pagination({ page = 1, onNext, onPrev }) {
  const handleNext = () => {
    onNext(page + 1);
  };
  const handlePrev = () => {
    onPrev(page === 1 ? 1 : page - 1);
  };
  return (
    <View style={{ flexDirection: 'row', justifyContent: 'center', margin: 10 }}>
      <Pressable
        style={{ ...styles.buttonPage, opacity: page === 1 ? 0.3 : 1 }}
        onPress={handlePrev}
      >
        <AntDesign name="arrowleft" size={30} color="#676767" />
        <Text style={styles.buttonText}>Voltar</Text>
      </Pressable>
      <View style={styles.pageCountContainer}>
        <Text style={styles.pageCount}>{page}</Text>
      </View>
      <Pressable style={styles.buttonPage} onPress={handleNext}>
        <Text style={styles.buttonText}>Próximo</Text>
        <AntDesign name="arrowright" size={30} color="#676767" />
      </Pressable>
    </View>
  );
}
