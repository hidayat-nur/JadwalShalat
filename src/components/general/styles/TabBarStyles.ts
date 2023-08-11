import {StyleSheet} from 'react-native';
import {colors} from '../../../config/variables';

export const styles = StyleSheet.create({
  tab: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderRadius: 8.91,
    backgroundColor: colors.dark,
    height: 32,
    padding: 2,
    marginTop: 20,
    marginHorizontal: 15,
  },
  tabBtn: {
    flex: 1,
  },
  boxLabel: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  label: {
    color: colors.black,
    // font-family: SF Pro Text;
    fontSize: 13,
    // font-style: normal;
    // font-weight: 600;
    lineHeight: 20,
    letterSpacing: -0.08,
  },
  boxLabelActive: {
    borderRadius: 6.93,
    borderWidth: 0.5,
    borderColor: colors.semiBlack,
    backgroundColor: colors.white,
  },
});
