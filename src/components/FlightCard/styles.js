import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  cardContainer: {
    // flex: 1,
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    flexDirection: 'row',
    height: 100,
    marginVertical: 6,
    marginHorizontal: 4,
    borderRadius: 6,
    paddingHorizontal: 4,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.29,
    shadowRadius: 1.65,

    elevation: 5,
  },
  imageAirlineLogo: {
    height: 55,
    width: 55,
    resizeMode: 'contain',
  },
  basicText: {
    fontSize: 12,
    fontWeight: 600,
    color: 'gray',
  },
});
