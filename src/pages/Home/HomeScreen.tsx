import {View, Text} from 'react-native';
import React, {useState} from 'react';
import {styles} from './styles/HomeStyles';
import {SceneMap, TabView} from 'react-native-tab-view';
import Today from './_parts/Today';
import Tomorrow from './_parts/Tomorrow';

const HomeScreen = () => {
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    {key: 'today', title: 'Hari ini'},
    {key: 'tomorrow', title: 'Besok'},
  ]);
  const renderScene = SceneMap({
    today: Today,
    tomorrow: Tomorrow,
  });

  return (
    <View style={styles.container}>
      <Text style={styles.title}>KEBUMEN</Text>
      <Text style={styles.subtitle}>1 Jam 20 menit lagi menuju maghrib</Text>

      <TabView
        navigationState={{index, routes}}
        renderScene={renderScene}
        onIndexChange={setIndex}
        // initialLayout={{ width: layout.width }}
      />
    </View>
  );
};

export default HomeScreen;
