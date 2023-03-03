import { StyleSheet } from 'react-native';

export const colors = {
  priceGreen: '#19c80c',
  basicGray: '#a9a9a9',
  vooperBlueBasic: '#00aad6',
};

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
  bodyContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    marginHorizontal: 6,
  },
  basicText: {
    fontSize: 12,
    fontWeight: 600,
    color: 'gray',
  },
  divider: {
    marginVertical: 6,
    borderTopColor: colors.basicGray,
    opacity: 0.4,
    borderTopWidth: 1,
  },
  containerJustifyCenter: {
    justifyContent: 'center',
    padding: 2,
  },
  destinyContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  dateInfosContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  textContainer: {
    flexDirection: 'column',
    marginHorizontal: 4,
    alignItems: 'center',
  },
  priceText: {
    color: colors.priceGreen,
    fontSize: 14,
    fontWeight: 800,
  },
});
