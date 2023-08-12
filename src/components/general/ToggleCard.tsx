import {View, Text, Switch} from 'react-native';
import React from 'react';
import {styles} from './styles/ToggleCardStyles';
import {colors} from '../../config/variables';

interface IToggleCard {
  label: string;
  isEnabled: boolean;
  onToggle: () => void;
}

const ToggleCard = ({label, isEnabled, onToggle}: IToggleCard) => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.label}>{label}</Text>
        <Switch
          trackColor={{false: '#767577', true: colors.green2}}
          thumbColor={isEnabled ? colors.white : '#f4f3f4'}
          ios_backgroundColor="#3e3e3e"
          onValueChange={onToggle}
          value={isEnabled}
        />
      </View>
    </View>
  );
};

export default ToggleCard;
