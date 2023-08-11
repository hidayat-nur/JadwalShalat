import {StyleSheet} from 'react-native';
import {colors} from '../../../config/variables';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
  },
  content: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 15,
    borderBottomWidth: 0.5,
    borderBottomColor: colors.gray,
    paddingRight: 15,
    paddingVertical: 11,
  },
  lastContent: {
    borderBottomWidth: 0,
  },
  label: {
    color: colors.black,
    // font-family: SF Pro Text;
    fontSize: 17,
    // font-style: normal;
    // font-weight: 400;
    lineHeight: 22,
    letterSpacing: -0.408,
  },
  value: {
    color: colors.gray2,
    // font-family: SF Pro Text;
    fontSize: 17,
    // font-style: normal;
    // font-weight: 400;
    lineHeight: 22,
    letterSpacing: -0.408,
  },
});
