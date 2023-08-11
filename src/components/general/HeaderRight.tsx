import {TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {IC_SETTING} from '../../assets/images';

interface IHeaderRight {
  navigation: any;
}

const HeaderRight = ({navigation}: IHeaderRight) => {
  return (
    <TouchableOpacity onPress={() => navigation.navigate('Setting')}>
      <Image source={IC_SETTING} />
    </TouchableOpacity>
  );
};

export default HeaderRight;
