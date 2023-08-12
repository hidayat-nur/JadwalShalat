import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './pages/Home/HomeScreen';
import SettingScreen from './pages/Setting/SettingScreen';
import HeaderRight from './components/general/HeaderRight';
import SplashScreen from 'react-native-splash-screen';

const App = () => {
  const Stack = createNativeStackNavigator();

  useEffect(() => {
    SplashScreen.hide();
  }, []);

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
