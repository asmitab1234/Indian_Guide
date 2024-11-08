//import liraries
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import React, { Component } from 'react';
import Home from '../Screens/Home/Home';
import BottomTab from './BottomTab';
import ProfileDetails from '../Screens/Profile/ProfileDetails';
import TotalReferral from '../Screens/Profile/TotalReferral';
import AvailiabilityPrice from '../Screens/Profile/AvailiabilityPrice';
import { useSelector } from 'react-redux';
import GuideExpert from '../Screens/GuideExpert/GuideExpert';
import ChatScreen from '../Screens/Chat/ChatScreen';
import TermsAndCondition from '../Components/Profile/TermsAndCondition';
import LeagleNotice from '../Components/Profile/LeagleNotice';
import EditProfile from '../Screens/EditProfile/EditProfile';
import AgentBooking from '../Screens/Booking/AgentBooking';
import AgentUserDetails from '../Screens/Booking/AgentUserDetails';
import ResultScreen from '../Screens/Booking/ResultScreen';
import AgentProfileDetails from '../Screens/Profile/AgentProfileDetails';
import RecentlyTourScreen from '../Screens/Home/RecentlyTourScreen';
import AllTourScreen from '../Screens/Home/AllTourScreen';

const Stack = createStackNavigator();

const AppStack = () => {
  const { loginStatus, light, affiliate, userType } = useSelector(state => state.User);
  return (
    <Stack.Navigator
      initialRouteName="BottomTab"
      screenOptions={{
        headerShown: false,
      }}
    >
      {affiliate ? <>
        {/* <Stack.Screen name="ProfileDetails" component={ProfileDetails} /> */}
        <Stack.Screen name="TotalReferral" component={TotalReferral} />
      </> : <>
        <Stack.Screen name="BottomTab" component={BottomTab} />

        {/* booking */}
        <Stack.Screen name="ResultScreen" component={userType == 'Guide' ? ResultScreen : AgentUserDetails} />

        {/* Profile */}
        <Stack.Screen name="ProfileDetails" component={userType == 'Guide' ? ProfileDetails : AgentProfileDetails} />
        <Stack.Screen name="TotalReferral" component={TotalReferral} />
        <Stack.Screen name="AvailiabilityPrice" component={AvailiabilityPrice} />
        <Stack.Screen name="TermsAndCondition" component={TermsAndCondition} />
        <Stack.Screen name="LeagleNotice" component={LeagleNotice} />

        {/* expert */}
        <Stack.Screen name="GuideExpert" component={GuideExpert} />
        <Stack.Screen name="ChatScreen" component={ChatScreen} />

        {/* EdiitProfile */}
        <Stack.Screen name="EditProfile" component={EditProfile} />
      </>}

      {/* Agent */}
      {/* booking */}
      <Stack.Screen name="AgentUserDetails" component={AgentUserDetails} />
      {/* profile */}
      <Stack.Screen name="AgentProfileDetails" component={AgentProfileDetails} />
      {/* home */}
      <Stack.Screen name="RecentlyTourScreen" component={RecentlyTourScreen} />
      <Stack.Screen name="AllTourScreen" component={AllTourScreen} />

    </Stack.Navigator>
  );
};

export default AppStack;
