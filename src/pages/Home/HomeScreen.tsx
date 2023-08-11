import {View, Text} from 'react-native';
import React from 'react';
import {styles} from './styles/HomeStyles';
import Today from './_parts/Today';
import Tomorrow from './_parts/Tomorrow';
import TabBar from '../../components/general/TabBar';

const HomeScreen = () => {
  const tabBarRoutes = [
    {
      key: 'today',
      label: 'Hari ini',
      screen: Today,
    },
    {
      key: 'tomorrow',
      label: 'Besok',
      screen: Tomorrow,
    },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>KEBUMEN</Text>
      <Text style={styles.subtitle}>1 Jam 20 menit lagi menuju maghrib</Text>
      <TabBar routesProps={tabBarRoutes} />
    </View>
  );
};

export default HomeScreen;
