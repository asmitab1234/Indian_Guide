import { Dimensions, Image, ImageBackground, Pressable, ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { AppBar, Container, Icon, StatusBar, Text, useTheme } from 'react-native-basic-elements'
import { moderateScale } from '../../Constants/PixelRatio'
import NavigationService from '../../Services/Navigation'
import { FONTS } from '../../Constants/Fonts'
import UpComingBookingCard from '../../Components/Booking/UpComingBookingCard'
import Modal from "react-native-modal";
import Filter from '../../Components/Booking/Filter'
import AgentBookingCard from '../../Components/Booking/AgentBookingCard'
const { height, width } = Dimensions.get('window')

const AgentBooking = () => {
    const colors = useTheme()

    const [Index, setIndex] = useState(0)
    const [isModalVisible, setModalVisible] = useState(false);
    const toggleModal = () => {
        setModalVisible(!isModalVisible);
    }
    const tabArr = [
        {
            tab: 'Upcoming',
        },
        {
            tab: 'Completed',
        },
        {
            tab: 'Cancelled',
        },
    ]

    const bookingArr = [
        {
            date: 'Sat, Feb 10,2024',
            time: 'At 9:00 AM',
            price: 'INR 1,500',
            name: 'Royal Agra Retreat',
            Tour: 'Multiday Tour',
            img: require('../../Assets/Agent/Home/boolingimg.png')
        },
        {
            date: 'Sat, Feb 10,2024',
            time: 'At 9:00 AM',
            price: 'INR 1,500',
            name: 'Royal Agra Retreat',
            Tour: 'Multiday Tour',
            img: require('../../Assets/Agent/Home/boolingimg.png')
        },

        {
            date: 'Sat, Feb 10,2024',
            time: 'At 9:00 AM',
            price: 'INR 1,500',
            name: 'Royal Agra Retreat',
            Tour: 'Multiday Tour',
            img: require('../../Assets/Agent/Home/boolingimg.png')
        },
        {
            date: 'Sat, Feb 10,2024',
            time: 'At 9:00 AM',
            price: 'INR 1,500',
            name: 'Royal Agra Retreat',
            Tour: 'Multiday Tour',
            img: require('../../Assets/Agent/Home/boolingimg.png')
        },
        {
            date: 'Sat, Feb 10,2024',
            time: 'At 9:00 AM',
            price: 'INR 1,500',
            name: 'Royal Agra Retreat',
            Tour: 'Multiday Tour',
            img: require('../../Assets/Agent/Home/boolingimg.png')
        },

    ]
    return (
        <Container>
            <StatusBar backgroundColor={'transparent'} translucent={true} barStyle='dark-content' />
            <ScrollView
                showsVerticalScrollIndicator={false}>

                <View
                    // source={require('../../Assets/Home/HomeImg.png')}
                    style={styles.homeImg}
                // resizeMode='cover'
                >
                    <Pressable
                        onPress={() => NavigationService.back()}
                        style={styles.backView}>
                        <Icon
                            name='chevron-small-left'
                            type='Entypo'
                            style={{
                                marginRight: moderateScale(8),
                                color: colors.primaryFontColor
                            }}
                            size={30}
                        />
                        <Text
                            style={{ ...styles.backText, color: colors.primaryFontColor }}>
                            Back
                        </Text>
                    </Pressable>

                    <Text
                        style={{ ...styles.bookingText, color: colors.primaryFontColor }}>
                        Bookings
                    </Text>

                    <View
                        style={styles.tabView}>
                        {tabArr.map((item, index) => (
                            <TouchableOpacity
                                key={index}
                                style={{
                                    ...styles.tabBox,
                                    backgroundColor: index == Index ? colors.secondaryFontColor : 'transparent',
                                    elevation: index == Index ? 5 : 0,
                                }}
                                onPress={() => setIndex(index)}
                            >
                                <Text
                                    style={{
                                        ...styles.tabText,
                                        // color: colors.primaryThemeColor
                                        color: index == Index ? colors.primaryFontColor : colors.primaryFontColor,
                                    }}>
                                    {item.tab}
                                </Text>
                            </TouchableOpacity>
                        ))}
                    </View>

                </View>

                <View
                    style={{
                        marginHorizontal: moderateScale(15)
                    }}>
                    {/* 
          <View
            style={styles.upcomingView}>
            <Text
              style={styles.upcomingText}>
              Upcoming
            </Text>
            <Pressable
              onPress={toggleModal}
              style={{
                ...styles.imgStyl,
                borderColor: colors.primaryFontColor, marginTop: moderateScale(5)
              }}>
              <Image
                source={require('../../Assets/Booking/filter.png')}
                style={styles.filterImgStyl}
                tintColor={colors.secondaryThemeColor}
              />
            </Pressable>
          </View> */}

                    {bookingArr.map((item, index) => (
                        <AgentBookingCard
                            key={index}
                            item={item}
                        />
                    ))}

                </View>
            </ScrollView>

        </Container>
    )
}

export default AgentBooking

const styles = StyleSheet.create({
    homeImg: {
        height: height / 4,
        width: width,
        borderBottomLeftRadius: moderateScale(20),
        borderBottomRightRadius: moderateScale(20),
        overflow: "hidden"
    },
    backView: {
        flexDirection: 'row',
        alignItems: 'center',
        position: 'absolute',
        top: moderateScale(50),
        left: moderateScale(10),
        zIndex: 1
    },
    backText: {
        fontFamily: FONTS.OpenSans.semibold,
        fontSize: moderateScale(14)
    },
    bookingText: {
        fontFamily: FONTS.OpenSans.bold,
        fontSize: moderateScale(20),
        top: moderateScale(50),
        textAlign: 'center'
    },
    tabView: {
        height: moderateScale(52),
        width: '90%',
        backgroundColor: 'rgba(240, 238, 238, 0.79)',
        position: 'absolute',
        bottom: moderateScale(30),
        marginHorizontal: moderateScale(15),
        borderRadius: moderateScale(10),
        flexDirection: 'row',
        alignItems: 'center',
        // justifyContent: 'space-between',
        paddingHorizontal: moderateScale(15)
    },
    tabBox: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: moderateScale(15),
        paddingVertical: moderateScale(10),
        borderRadius: moderateScale(8),

    },
    tabText: {
        fontFamily: FONTS.OpenSans.semibold,
        fontSize: moderateScale(13)
    },
    upcomingView: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    upcomingText: {
        fontFamily: FONTS.OpenSans.bold,
        fontSize: moderateScale(20),
    },
    imgStyl: {
        padding: moderateScale(10),
        borderRadius: moderateScale(8),
        borderWidth: moderateScale(1)
    },
    filterImgStyl: {
        height: moderateScale(16),
        width: moderateScale(16)
    }
})