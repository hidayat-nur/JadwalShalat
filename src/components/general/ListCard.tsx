import {View, Text} from 'react-native';
import React from 'react';
import {styles} from './styles/ListCardStyles';

interface IListCard {
  label: string;
  time: string;
  isLast: boolean;
}

const ListCard = ({label, time, isLast}: IListCard) => {
  return (
    <View style={styles.container}>
      <View style={[styles.content, isLast && styles.lastContent]}>
        <Text style={styles.label}>{label}</Text>
        <Text style={styles.value}>{time}</Text>
      </View>
    </View>
  );
};

export default ListCard;
