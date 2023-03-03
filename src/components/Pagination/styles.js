import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  dayTagsContainer: {},
  buttonPage: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '40%',
    margin: 10,
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 6,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.29,
    shadowRadius: 1.65,

    elevation: 5,
  },
  buttonText: {
    marginHorizontal: 4,
    fontSize: 16,
    fontWeight: 700,
    color: '#676767',
  },
  pageCountContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  pageCount: {
    marginHorizontal: 4,
    fontSize: 22,
    fontWeight: 800,
    color: '#676767',
  },
});
