import { Dimensions, Image, ImageBackground, ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Container, Icon, StatusBar, Text, useTheme } from 'react-native-basic-elements'
import { moderateScale } from '../../Constants/PixelRatio'
import { FONTS } from '../../Constants/Fonts'
import index from '.'
import ComingBookingCard from '../../Components/Home/ComingBookingCard'
import NextBookingCard from '../../Components/Home/NextBookingCard'
import PastBookingCard from '../../Components/Home/PastBookingCard'
import EarningTable from '../../Components/Profile/EarningTable'
import { Switch } from 'react-native-switch';
import { useDispatch } from 'react-redux'
import { setLightMode } from '../../Redux/reducer/User'
import AgentComingBookingCard from '../../Components/Home/AgentComingBookingCard'
import CompletedTourCArd from '../../Components/Home/CompletedTourCArd'
import AllTourCard from '../../Components/Home/AllTourCard'
import NavigationService from '../../Services/Navigation'
const { height, width } = Dimensions.get('window')

const AgentHomeScreen = () => {
    const dispatch = useDispatch()
    const colors = useTheme()
    const [themChange, setThemChange] = useState(false)
    useEffect(() => {
        // dispatch(setLightMode(themChange))
        return () => {
        }
    }, [themChange])

    const comingBookingArr = [
        {
            agent: require('../../Assets/Agent/Home/boolingimg.png'),
            dayTour: 'Multiday Tour',
            title: 'Royal Agra Retreat',
            pickupLocation: 'Jama Masjid',
            guide: 'Nihal Rao',
            date: 'Sat, Feb 10,2024 -\nSun, Feb 11, 3:00 PM',
            price: 'INR 1,500',
            name: 'Namrata Singh',
            member: '9',
            totalDay: '7',
            img: require('../../Assets/Home/agentImg.png')
        },
        {
            agent: require('../../Assets/Agent/Home/boolingimg.png'),
            dayTour: 'Multiday Tour',
            title: 'Royal Agra Retreat',
            pickupLocation: 'Jama Masjid',
            guide: 'Nihal Rao',
            date: 'Sat, Feb 10,2024 -\nSun, Feb 11, 3:00 PM',
            price: 'INR 1,500',
            name: 'Namrata Singh',
            member: '9',
            totalDay: '7',
            img: require('../../Assets/Home/agentImg.png')
        },
        {
            agent: require('../../Assets/Agent/Home/boolingimg.png'),
            dayTour: 'Multiday Tour',
            title: 'Royal Agra Retreat',
            pickupLocation: 'Jama Masjid',
            guide: 'Nihal Rao',
            date: 'Sat, Feb 10,2024 -\nSun, Feb 11, 3:00 PM',
            price: 'INR 1,500',
            name: 'Namrata Singh',
            member: '9',
            totalDay: '7',
            img: require('../../Assets/Home/agentImg.png')
        },

    ]

    const completedArr = [
        {
            agent: require('../../Assets/Agent/Home/boolingimg.png'),
            dayTour: 'Guided Tour',
            title: 'Royal Agra Retreat',
            pickupLocation: 'Jama Masjid',
            guide: 'Nihal Rao',
            date: 'Sat, Feb 10,2024 -\nSun, Feb 11, 3:00 PM',
            price: 'INR 1,500',
            name: 'Namrata Singh',
            member: '9',
            totalDay: '7',
            img: require('../../Assets/Home/agentImg.png')
        },
        {
            agent: require('../../Assets/Agent/Home/boolingimg.png'),
            dayTour: 'Guided Tour',
            title: 'Royal Agra Retreat',
            pickupLocation: 'Jama Masjid',
            guide: 'Nihal Rao',
            date: 'Sat, Feb 10,2024 -\nSun, Feb 11, 3:00 PM',
            price: 'INR 1,500',
            name: 'Namrata Singh',
            member: '9',
            totalDay: '7',
            img: require('../../Assets/Home/agentImg.png')
        },
        {
            agent: require('../../Assets/Agent/Home/boolingimg.png'),
            dayTour: 'Guided Tour',
            title: 'Royal Agra Retreat',
            pickupLocation: 'Jama Masjid',
            guide: 'Nihal Rao',
            date: 'Sat, Feb 10,2024 -\nSun, Feb 11, 3:00 PM',
            price: 'INR 1,500',
            name: 'Namrata Singh',
            member: '9',
            totalDay: '7',
            img: require('../../Assets/Home/agentImg.png')
        },


    ]

    const AllTourArr = [
        {
            agent: require('../../Assets/Agent/Home/boolingimg.png'),
            dayTour: 'Package Tour',
            title: 'Royal Agra Retreat',
            pickupLocation: 'Jama Masjid',
            date: 'Sat, Feb 10,2024 -\nSun, Feb 11, 3:00 PM',
            price: 'INR 1,500',
            name: 'Namrata Singh',
            bookings: '500',
            review: '4.2 (1914 reviews)'
        },
        {
            agent: require('../../Assets/Agent/Home/boolingimg.png'),
            dayTour: 'Package Tour',
            title: 'Royal Agra Retreat',
            pickupLocation: 'Jama Masjid',
            date: 'Sat, Feb 10,2024 -\nSun, Feb 11, 3:00 PM',
            price: 'INR 1,500',
            name: 'Namrata Singh',
            bookings: '500',
            review: '4.2 (1914 reviews)'
        },
        {
            agent: require('../../Assets/Agent/Home/boolingimg.png'),
            dayTour: 'Package Tour',
            title: 'Royal Agra Retreat',
            pickupLocation: 'Jama Masjid',
            date: 'Sat, Feb 10,2024 -\nSun, Feb 11, 3:00 PM',
            price: 'INR 1,500',
            name: 'Namrata Singh',
            bookings: '500',
            review: '4.2 (1914 reviews)'
        },

    ]

    return (
        <Container>
            <StatusBar backgroundColor={'transparent'} translucent={true} barStyle='dark-content' />
            <ScrollView
                showsVerticalScrollIndicator={false}>

                <ImageBackground
                    source={require('../../Assets/Home/HomeImg.png')}
                    style={styles.homeImg}
                    resizeMode='cover'
                >
                    <View
                        style={styles.flagIcon}>


                        {/* <Image
                            source={require('../../Assets/Home/flag.png')}
                            style={{ ...styles.flag, marginLeft: moderateScale(15) }}
                        />
                        <Text
                            style={styles.engStyl}>
                            ENG
                        </Text>
                        <Icon
                            name='caretdown'
                            type='AntDesign'
                            size={10}
                        /> */}
                    </View>
                    <View
                        style={styles.imgNameView}>
                        <Image
                            source={require('../../Assets/Agent/Home/agentprofile.png')}
                            style={styles.userImg}
                        />
                        <View
                            style={{
                                marginLeft: moderateScale(10)
                            }}>
                            <Text
                                style={{ ...styles.nameText, color: colors.white }}>
                                Welcome Karthik Rathod!
                            </Text>
                            <View
                                style={{
                                    flexDirection: 'row',
                                    alignItems: 'center'
                                }}>
                                <Icon
                                    name='star'
                                    type='AntDesign'
                                    color={colors.white}
                                />
                                <Text style={{ ...styles.ratingText, color: colors.white }}>
                                    4.5 {''}
                                    <Text
                                        style={{ ...styles.ratingText2, color: colors.white }}>
                                        (1914 Reviews)
                                    </Text>
                                </Text>
                            </View>
                        </View>
                    </View>
                </ImageBackground>

                <View
                    style={{
                        marginHorizontal: moderateScale(15),
                        flex: 1
                    }}>

                    <View
                        style={{
                            ...styles.cardHeading,
                            marginTop: moderateScale(20)
                        }}>
                        <Text
                            style={styles.nextCardHeading}>
                            Upcoming  Bookings
                        </Text>
                        <Icon
                            name='chevron-small-right'
                            type='Entypo'
                            size={30}
                        />
                    </View>

                    {/* <View
                        style={styles.cardHeading}>
                        <Text
                            style={styles.todayPriceText}>
                            Today’s Estimates : INR 20,000
                        </Text>
                        <Icon
                            name='chevron-small-right'
                            type='Entypo'
                            size={30}
                        />
                    </View> */}

                    <ScrollView
                        horizontal
                        contentContainerStyle={styles.bookingMap}>
                        {comingBookingArr.map((item, index) => (
                            <AgentComingBookingCard
                                key={index}
                                item={item}
                                style={{
                                    marginLeft: index != 0 ? moderateScale(8) : 0,
                                    marginRight: index != comingBookingArr.length - 1 ? moderateScale(8) : 0
                                }}
                            />
                        ))}
                    </ScrollView>

                    {/* <View
                        style={{
                            ...styles.cardHeading,
                            marginVertical: moderateScale(20)
                        }}>
                        <Text
                            style={styles.nextCardHeading}>
                            Your Next Available Slots
                        </Text>
                        <Icon
                            name='chevron-small-right'
                            type='Entypo'
                            size={30}
                        />
                    </View> */}

                    {/* <ScrollView
                        horizontal
                        contentContainerStyle={styles.bookingMap}>
                        {nextBookingArr.map((item, index) => (
                            <NextBookingCard
                                key={index}
                                item={item}
                            />
                        ))}
                    </ScrollView> */}

                    <View
                        style={{
                            ...styles.cardHeading,
                            marginVertical: moderateScale(20)
                        }}>
                        <Text
                            style={styles.nextCardHeading}>
                            Recently Completed Tour
                        </Text>
                        <TouchableOpacity
                        // onPress={() => NavigationService.navigate('RecentlyTourScreen')}
                        >
                            <Icon
                                name='chevron-small-right'
                                type='Entypo'
                                size={30}
                            />
                        </TouchableOpacity>
                    </View>

                    <ScrollView
                        horizontal
                        contentContainerStyle={{
                            ...styles.bookingMap,
                            // marginBottom: moderateScale(25)
                        }}>
                        {completedArr.map((item, index) => (
                            <CompletedTourCArd
                                key={index}
                                item={item}
                                style={{
                                    marginLeft: index != 0 ? moderateScale(8) : 0,
                                    marginRight: index != comingBookingArr.length - 1 ? moderateScale(8) : 0
                                }}
                            />
                        ))}
                    </ScrollView>

                    <View
                        style={{
                            ...styles.cardHeading,
                            marginTop: moderateScale(20)
                        }}>
                        <Text
                            style={styles.nextCardHeading}>
                            All Tours
                        </Text>
                        <TouchableOpacity
                        onPress={() => NavigationService.navigate('AllTourScreen')}
                        >
                            <Icon
                                name='chevron-small-right'
                                type='Entypo'
                                size={30}
                            />
                        </TouchableOpacity>
                    </View>

                    <ScrollView
                        horizontal
                        contentContainerStyle={{
                            ...styles.bookingMap,
                            marginBottom: moderateScale(25)
                        }}>
                        {AllTourArr.map((item, index) => (
                            <AllTourCard
                                key={index}
                                item={item}
                                style={{
                                    marginLeft: index != 0 ? moderateScale(8) : 0,
                                    marginRight: index != comingBookingArr.length - 1 ? moderateScale(8) : 0
                                }}
                            />
                        ))}
                    </ScrollView>

                </View>
            </ScrollView>
        </Container >
    )
}

export default AgentHomeScreen

const styles = StyleSheet.create({
    homeImg: {
        height: height / 3.4,
        width: width,
        borderBottomLeftRadius: moderateScale(20),
        borderBottomRightRadius: moderateScale(20),
        overflow: "hidden"
    },

    engStyl: {
        fontFamily: FONTS.OpenSans.semibold,
        fontSize: moderateScale(14),
        marginHorizontal: moderateScale(8)
    },
    flag: {
        height: moderateScale(12),
        width: moderateScale(20)
    },
    imgNameView: {
        flexDirection: 'row',
        alignItems: 'center',
        position: 'absolute',
        bottom: moderateScale(15),
        left: moderateScale(10)
    },
    userImg: {
        height: moderateScale(95),
        width: moderateScale(95),
        barStyle: moderateScale(200)
    },
    nameText: {
        fontFamily: FONTS.OpenSans.bold,
        fontSize: moderateScale(16)
    },
    ratingText: {
        fontFamily: FONTS.OpenSans.bold,
        fontSize: moderateScale(18),
        marginLeft: moderateScale(8)
    },
    ratingText2: {
        fontFamily: FONTS.OpenSans.regular,
        fontSize: moderateScale(14)
    },
    viewBox: {
        paddingVertical: moderateScale(8),
        paddingHorizontal: moderateScale(20),
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: moderateScale(20),
        // backgroundColor: '#1D1D1D',
        marginTop: moderateScale(10),
        justifyContent: 'space-between'
    },
    avilability: {
        fontFamily: FONTS.OpenSans.bold,
        fontSize: moderateScale(12),
        textAlign: 'center'
    },
    circleStyl: {
        height: moderateScale(22),
        width: moderateScale(22),
        borderRadius: moderateScale(40),
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: moderateScale(15),
        // alignSelf:'center'
    },
    priceDayView: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        // backgroundColor: 'red'
    },
    priceBox: {
        alignItems: 'center',
        justifyContent: 'center',
        height: moderateScale(30),
        // width: moderateScale(70),
        paddingHorizontal: moderateScale(8),
        borderWidth: moderateScale(1),
        borderRadius: moderateScale(10),
        borderColor: 'rgba(255, 255, 255, 0.4)',
        marginTop: moderateScale(5),
        // alignSelf:'center'
    },
    dayText: {
        fontFamily: FONTS.OpenSans.regular,
        fontSize: moderateScale(11)
    },
    upcomingBookingText: {
        fontFamily: FONTS.OpenSans.bold,
        fontSize: moderateScale(20),
        marginVertical: moderateScale(20)
    },
    cardHeading: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: moderateScale(15)
    },
    todayPriceText: {
        fontFamily: FONTS.OpenSans.medium,
        fontSize: moderateScale(13),
    },
    bookingMap: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: moderateScale(5)
    },
    nextCardHeading: {
        fontFamily: FONTS.OpenSans.bold,
        fontSize: moderateScale(20),
    },
    erningView: {
        padding: moderateScale(10),
        borderWidth: moderateScale(1),
        borderRadius: moderateScale(10),
        // borderColor: '#000',
    },
    erningText: {
        fontFamily: FONTS.OpenSans.medium,
        fontSize: moderateScale(12),
        textAlign: 'center',
        marginBottom: moderateScale(10)
    }
})