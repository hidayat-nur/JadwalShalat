import {View, Text, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {SceneMap, TabView} from 'react-native-tab-view';
import {styles} from './styles/TabBarStyles';

interface ITabBar {
  routesProps: {key: string; label: string; screen: any}[];
}

const TabBar = ({routesProps}: ITabBar) => {
  const [index, setIndex] = useState(0);
  const [_routes] = useState(
    routesProps.map((item: any) => ({key: item.key, title: item.label})),
  );
  const renderScene = SceneMap(
    routesProps.reduce(
      (obj, item) => Object.assign(obj, {[item.key]: item.screen}),
      {},
    ),
  );

  const renderTabbar = (props: any) => {
    return (
      <View style={styles.tab}>
        {props.navigationState.routes.map((route: any, i: number) => (
          <TouchableOpacity
            key={route.key}
            onPress={() => setIndex(i)}
            style={styles.tabBtn}>
            <View
              style={[styles.boxLabel, index === i && styles.boxLabelActive]}>
              <Text style={styles.label}>{route.label}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </View>
    );
  };

  return (
    <TabView
      navigationState={{index, routes: routesProps}}
      renderScene={renderScene}
      onIndexChange={setIndex}
      renderTabBar={renderTabbar}
    />
  );
};

export default TabBar;
