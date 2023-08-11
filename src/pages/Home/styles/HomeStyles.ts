import {StyleSheet} from 'react-native';
import {colors} from '../../../config/variables';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 20,
    paddingHorizontal: 15,
    backgroundColor: colors.semiWhite,
  },
  title: {
    color: colors.black,
    // font-family: SF Pro Display;
    fontSize: 34,
    // font-style: normal;
    // font-weight: 700;
    lineHeight: 41,
    letterSpacing: 0.374,
  },
  subtitle: {
    color: colors.green,
    // font-family: SF Pro Display;
    fontSize: 20,
    // font-style: normal;
    // font-weight: 400;
    lineHeight: 24,
    letterSpacing: 0.38,
    marginTop: 10,
  },
});
