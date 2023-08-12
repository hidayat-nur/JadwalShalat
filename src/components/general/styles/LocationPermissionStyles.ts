import {StyleSheet} from 'react-native';
import {colors} from '../../../config/variables';

export const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingTop: 30,
    paddingHorizontal: 15,
  },
  icon: {
    width: 200,
    height: 156.958,
  },
  label: {
    color: colors.black,
    textAlign: 'center',
    // font-family: SF Pro Display;
    fontSize: 20,
    // font-style: normal;
    // font-weight: 400;
    lineHeight: 24,
    letterSpacing: 0.38,
    marginTop: 30,
  },
});
