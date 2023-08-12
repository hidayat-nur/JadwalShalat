import {StyleSheet} from 'react-native';
import {colors} from '../../../config/variables';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
  },
  content: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 0.5,
    borderBlockColor: colors.gray,
    marginLeft: 15,
    height: 44,
    paddingRight: 15,
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
});
