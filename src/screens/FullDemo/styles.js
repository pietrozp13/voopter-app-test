import { StyleSheet } from 'react-native';

export const colors = {
  priceGreen: '#19c80c',
  basicGray: '#a9a9a9',
  vooperBlueBasic: '#00aad6',
};

export const styles = StyleSheet.create({
  mainContainer: { flex: 1, alignItems: 'center' },
  logoContainer: {
    width: '100%',
    height: '40%',
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#009FCD',
  },
  image: {
    borderRadius: 6,
    backgroundColor: '#fff',
    width: 200,
    height: 70,
    resizeMode: 'contain',
  },
  cardContainer: {
    width: '92%',
    // height: '40%',
    top: '-5%',
    borderRadius: 6,
    padding: 14,
    alignItems: 'center',
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.29,
    shadowRadius: 1.65,

    elevation: 5,
  },
  buttonContainer: {
    width: '85%',
    height: 50,
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#009FCD',

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.29,
    shadowRadius: 1.65,

    elevation: 5,
  },
  searchIda: { height: 80, width: '100%', zIndex: 10 },
  searchVolta: { height: 80, width: '100%', zIndex: 9 },
  datePickerContainer: { width: '100%', marginTop: 4, zIndex: 7 },
  divider: { flex: 1, width: '100%', borderBottomWidth: 1, borderColor: '#cacaca96' },
  buttonText: { color: '#fff', fontSize: 20, fontWeight: 700 },
});
