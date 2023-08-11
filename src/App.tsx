import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './pages/Home/HomeScreen';
import SettingScreen from './pages/Setting/SettingScreen';
import HeaderRight from './components/general/HeaderRight';

const App = () => {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={({navigation}) => ({
            headerTitle: '',
            headerRight: () => <HeaderRight navigation={navigation} />,
          })}
        />
        <Stack.Screen name="Setting" component={SettingScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
