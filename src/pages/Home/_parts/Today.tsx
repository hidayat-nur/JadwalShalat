import {View} from 'react-native';
import React from 'react';
import CardSchedule from '../../../components/general/CardSchedule';
import {styles} from './styles/general';

const Today = () => {
  const schedule = [
    {
      label: 'Shubuh',
      time: '03:58',
    },
    {
      label: 'Dzuhur',
      time: '11:58',
    },
    {
      label: 'Ashar',
      time: '15:00',
    },
    {
      label: 'Maghrib',
      time: '17:00',
    },
    {
      label: 'Isya',
      time: '19:00',
    },
  ];

  return (
    <View style={styles.container}>
      {schedule.map((item: any, index: number, arr: any) => (
        <CardSchedule
          label={item.label}
          time={item.time}
          key={index}
          isLast={index === arr.length - 1}
        />
      ))}
    </View>
  );
};

export default Today;
