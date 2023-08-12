import {View, Text, Image} from 'react-native';
import React from 'react';
import {styles} from './styles/LocationPermissionStyles';
import {IC_LOCATION_PERMISSION} from '../../assets/images';

const LocationPermission = () => {
  return (
    <View style={styles.container}>
      <Image source={IC_LOCATION_PERMISSION} style={styles.icon} />
      <Text style={styles.label}>
        Silahkan aktifkan izin lokasi di setting, untuk mengetahui jadwal sholat
        di kota anda
      </Text>
    </View>
  );
};

export default LocationPermission;
