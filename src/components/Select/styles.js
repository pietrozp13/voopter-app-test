import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#000000a1',
  },
  title: {
    marginHorizontal: 4,
    alignSelf: 'flex-start',
    fontSize: 24,
    fontWeight: 500,
    color: 'gray',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
  },
  input: {
    flexWrap: 'wrap',
    marginHorizontal: 6,
    flexDirection: 'row',
    borderWidth: 1,
    borderRadius: 6,
    borderColor: 'gray',
    minHeight: 38,
    width: '100%',
  },
});
