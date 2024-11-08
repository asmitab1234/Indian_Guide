import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React, { useEffect, useState } from 'react';
import { View, ActivityIndicator, Alert } from 'react-native';
import { Theme, useTheme, StatusBar } from 'react-native-basic-elements';
import { useDispatch, useSelector } from 'react-redux';
import { setUser } from './App/Redux/reducer/User';
import AuthService from './App/Services/Auth';
import AppStack from './App/Navigation/AppStack';
import NavigationService from './App/Services/Navigation';
import AuthStack from './App/Navigation/AuthStack';

const Stack = createStackNavigator();

const App = () => {
  const dispatch = useDispatch();
  const colors = useTheme();

  const { loginStatus, light } = useSelector(state => state.User);

  const [isLoading, setIsLoading] = useState(true);
  const [isdark, setIsDark] = useState(false)

  useEffect(() => {
    ckhUser();
  }, []);
useEffect(() => {
  // Alert.alert("change"+light)

  return () => {
    
  }
}, [light])

  const ckhUser = () => {
    AuthService.getAccount()
      .then(result => {
        setIsLoading(false);
        if (result) {
          dispatch(setUser(result));
        }
      })
      .catch(err => {
        console.log('err>>>', err);
      });
  };

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#fff'
      }}
    >
      <StatusBar
        translucent={false}
        backgroundColor={'#FFFFFF'}
        barStyle='dark-content'
      />

      {
        isLoading ?
          <View
            style={{
              flex: 1,
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <ActivityIndicator
              size='large'
            />
          </View>
          :
          <Theme.Provider
            theme={{
              light: {
                primaryThemeColor: '#000000',
                secondaryThemeColor: '#FFFFFF',
                primaryFontColor: '#FFFFFF',
                secondaryFontColor: '#000000',
                cardColor: '#FFFFFF',
                headerColor: '#FFFFFF',
                pageBackgroundColor: '#000000',
                tabBarColor: '#D3D3D3',
                shadowColor: '#999',
                statusBarStyle: 'dark-content',
                buttonColor: '#D72638',
                secondaryButtoncolor: '#147C32',
                boxColor: '#303030',
                borderColor: 'rgba(109, 109, 109, 0.8)',
                themeborderColor: 'rgba(109, 109, 109, 0.8)',
                subTxtColor: 'rgba(37, 51, 58, 0.7)',
                white: '#FFFFFF',
                black: "#000",
                greycardColor: 'rgba(244, 67, 54, 0.10)',
                tabColur: "#1D1D1D",
                calanderViewColour: '#FFFFFF',
                availabilityDateColor: 'rgba(209, 96, 108, 0.42)'
              },
              dark: {
                primaryThemeColor: '#FFFFFF',
                secondaryThemeColor: '#000000',
                primaryFontColor: '#000000',
                secondaryFontColor: '#FFFFFF',
                cardColor: '#000000',
                headerColor: '#000000',
                pageBackgroundColor: '#FFFFFF',
                tabBarColor: '#4D4D4D',
                shadowColor: '#999',
                statusBarStyle: 'dark-content',
                buttonColor: '#D72638',
                secondaryButtoncolor: '#147C32',
                boxColor: '#F0EEEE',
                borderColor: 'rgba(109, 109, 109, 0.8)',
                themeborderColor: 'rgba(109, 109, 109, 0.8)',
                subTxtColor: 'rgba(37, 51, 58, 0.7)',
                white: '#FFFFFF',
                black: "#000",
                greycardColor: 'rgba(244, 67, 54, 0.10)',
                tabColur: "rgba(109, 109, 109, 0.8)",
                calanderViewColour: 'transparent',
                availabilityDateColor: 'rgba(209, 96, 108, 0.42)'
              },
            }}
            // mode={!light ? 'light' : 'dark'}
            mode={light ? 'light' : 'dark'}
          >
            {/* <NavigationContainer
              ref={r => NavigationService.setTopLevelNavigator(r)}
            >
              <Stack.Navigator
                initialRouteName="AuthStack"
                screenOptions={{
                  headerShown: false
                }}
              >
                {
                  !loginStatus ?
                    <Stack.Screen name="AuthStack" component={AuthStack} />
                    :
                    <Stack.Screen name="AppStack" component={AppStack} />
                }
              </Stack.Navigator>
            </NavigationContainer> */}

            <NavigationContainer
              ref={r => NavigationService.setTopLevelNavigator(r)}
            >
              <Stack.Navigator
                initialRouteName="AuthStack"
                screenOptions={{
                  headerShown: false
                }}
              >

                <Stack.Screen name="AuthStack" component={AuthStack} />
                <Stack.Screen name="AppStack" component={AppStack} />

              </Stack.Navigator>
            </NavigationContainer>

          </Theme.Provider>
      }

    </View >
  );
};

export default App;
