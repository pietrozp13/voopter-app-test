import { StyleSheet } from 'react-native';

export const colors = {
  basicGray: '#505050',
};

export const styles = StyleSheet.create({
  autocompleteContainer: {
    // Hack required to make the autocomplete work on Andrdoid
    flex: 1,
    left: 0,
    position: 'absolute',
    right: 0,
    top: 0,
    zIndex: 1,
    flexDirection: 'column',
  },
  autocompleteStyle: {
    height: 34,
  },
  inputContainerStyle: {
    borderRadius: 4,
    borderWidth: 2,
    borderColor: '#c5c5c5',
  },
  shadowCard: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.29,
    shadowRadius: 1.65,

    elevation: 5,
  },
  autocompleteListContainer: {
    margin: 5,
    height: 40,
    borderBottomWidth: 1,
    borderColor: '#cecece',
    flexDirection: 'column',
  },
  title: {
    color: colors.basicGray,
    fontSize: 16,
    marginVertical: 4,
  },
  closeButton: {
    position: 'absolute',
    top: 35,
    right: 10,
    zIndex: 100,
  },
});
