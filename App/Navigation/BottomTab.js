import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../Screens/Home/Home';
import Booking from '../Screens/Booking/Booking';
import Profile from '../Screens/Profile/Profile';
import Earning from '../Screens/Earning/Earning';
import Schedule from '../Screens/Schedule/Schedule';
import { Image, StyleSheet } from 'react-native';
import { moderateScale } from '../Constants/PixelRatio';
import { FONTS } from '../Constants/Fonts';
import { useTheme } from 'react-native-basic-elements';
import { useSelector } from 'react-redux';
import AgentHomeScreen from '../Screens/Home/AgentHomeScreen';
import AgentBooking from '../Screens/Booking/AgentBooking';
import AgentEarning from '../Screens/Earning/AgentEarning';

const Tab = createBottomTabNavigator();

function BottomTab() {
    const colors = useTheme()
    const { loginStatus, light, userType } = useSelector(state => state.User);
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarStyle: {
                    backgroundColor: colors.primaryThemeColor,
                },
                tabBarLabelStyle: {
                    fontFamily: FONTS.OpenSans.regular,
                    fontSize: moderateScale(9),
                    marginBottom:moderateScale(5)
                },
                tabBarInactiveTintColor: '#939393',
                tabBarActiveTintColor: colors.buttonColor
            }}
        >
            <Tab.Screen
                options={{
                    tabBarLabel: 'Home',
                    tabBarIcon: ({ color, size, focused }) => (
                        <Image
                            source={require('../Assets/Home/home.png')}
                            style={{
                                ...styles.bottomImg,
                                tintColor: focused ? colors.buttonColor : '#939393'
                            }}
                            resizeMode='contain'
                        />
                    )
                }}
                // name="Home" component={Home}
                // ==Agent==
                name="Home"
                component={userType == 'Agent' ? AgentHomeScreen : Home} />
            <Tab.Screen
                options={{
                    tabBarLabel: 'Bookings',
                    tabBarIcon: ({ color, size, focused }) => (
                        <Image
                            source={require('../Assets/Home/booking.png')}
                            style={{
                                ...styles.bottomImg,
                                tintColor: focused ? colors.buttonColor : '#939393'
                            }}
                            resizeMode='contain'
                        />
                    )
                }}
                // name="Bookings" component={Booking}
                // ==agent==
                name="AgentBooking"
                component={userType == 'Agent' ? AgentBooking : Booking}
            />
            {
                userType == 'Guide' ?
                    <Tab.Screen
                        options={{
                            tabBarLabel: 'Schedule',
                            tabBarIcon: ({ color, size, focused }) => (
                                <Image
                                    source={require('../Assets/Home/calendar.png')}
                                    style={{
                                        ...styles.bottomImg,
                                        tintColor: focused ? colors.buttonColor : '#939393'
                                    }}
                                    resizeMode='contain'
                                />
                            )
                        }}
                        name="Schedule"
                        component={Schedule}
                    />
                    :
                    null
            }

            <Tab.Screen
                options={{
                    tabBarLabel: 'Earnings',
                    tabBarIcon: ({ color, size, focused }) => (
                        <Image
                            source={require('../Assets/Home/earning.png')}
                            style={{
                                ...styles.bottomImg,
                                tintColor: focused ? colors.buttonColor : '#939393'
                            }}
                            resizeMode='contain'
                        />
                    )
                }}
                // name="Earnings" component={Earning}
                // ==Agent==
                name="AgentEarning" 
                component={userType == 'Agent' ? AgentEarning : Earning}
            />
            <Tab.Screen
                options={{
                    tabBarLabel: 'Profile',
                    tabBarIcon: ({ color, size, focused }) => (
                        <Image
                            source={require('../Assets/Home/profile.png')}
                            style={{
                                ...styles.bottomImg,
                                tintColor: focused ? colors.buttonColor : '#939393'
                            }}
                            resizeMode='contain'
                        />
                    )
                }}
                name="Profile" component={Profile} />
        </Tab.Navigator>
    );
}
export default BottomTab
const styles = StyleSheet.create({
    bottomImg: {
        height: moderateScale(23),
        width: moderateScale(23)
    }
})