import {View} from 'react-native';
import React, {useState} from 'react';
import ToggleCard from '../../components/general/ToggleCard';
import {styles} from './styles/SettingStyles';

const SettingScreen = () => {
  const [reminder, setReminder] = useState<boolean>(false);
  const [location, setLocation] = useState<boolean>(false);

  const onReminder = () => {
    setReminder(!reminder);
  };

  const onLocation = () => {
    setLocation(!location);
  };

  return (
    <View style={styles.container}>
      <ToggleCard
        label="Pengingat"
        isEnabled={reminder}
        onToggle={onReminder}
      />
      <ToggleCard
        label="Izin lokasi"
        isEnabled={location}
        onToggle={onLocation}
      />
    </View>
  );
};

export default SettingScreen;
