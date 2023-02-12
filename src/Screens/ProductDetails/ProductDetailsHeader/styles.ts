import {StyleSheet} from 'react-native';
export const styles = StyleSheet.create({
  container: {
    backgroundColor: '#E5E5E5',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    paddingVertical: 5,
  },
  favoriteButton: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    width: 45,
    height: 45,
    borderRadius: 25,
  },
  favoriteIcon: {
    color: 'red',
    fontSize: 22,
  },
  goBack: {fontSize: 30, color: '#000000'},
});
