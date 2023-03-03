import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#000000a1',
  },
  title: {
    alignSelf: 'flex-start',
    color: '#505050',
    fontSize: 16,
    marginVertical: 4,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    borderWidth: 2,
    borderRadius: 4,
    borderColor: '#c5c5c5',
    minHeight: 38,
    // width: '90%',
    flex: 1,
  },
  calendarWeek: {
    marginTop: 10,
    marginBottom: 100,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  calendarContainer: {
    margin: 14,
  },
  confirmButton: {
    width: '50%',
    alignSelf: 'center',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: '#00aad6',
  },
  confirmButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 600,
  },
});
