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
import NavigationService from '../../Services/Navigation'
const { height, width } = Dimensions.get('window')

const Home = () => {
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
            agent: 'Direct',
            date: '10 Feb,2024',
            time: '9:00 AM - 11:00 AM',
            location: 'Agra\nFort',
            price: 'INR 1,500',
            name: 'Namrata Singh',
            member: '9',
            img: require('../../Assets/Home/agentImg.png')
        },
        {
            agent: 'Via Agent',
            date: '10 Feb,2024',
            time: '9:00 AM - 11:00 PM',
            location: 'Agra\nFort',
            price: 'INR 1,500',
            name: 'Namrata Singh',
            member: '9',
            img: require('../../Assets/Home/agentImg.png')
        },
        {
            agent: 'Direct',
            date: '10 Feb,2024',
            time: '9:00 AM - 11:00 AM',
            location: 'Agra\nFort',
            price: 'INR 1,500',
            name: 'Namrata Singh',
            member: '9',
            img: require('../../Assets/Home/agentImg.png')
        },

    ]

    const nextBookingArr = [
        {
            date: 'Sat, Feb 10,2024',
            time: '9:00 AM - 11:00 AM',
            secondTime: '3:00 PM - 5:00 PM',
            hour: '800 / hr'
        },
        {
            date: 'Sat, Feb 10,2024',
            time: '9:00 AM - 11:00 AM',
            secondTime: '3:00 PM - 5:00 PM',
            hour: '800 / hr'
        },
        {
            date: 'Sat, Feb 10,2024',
            time: '9:00 AM - 11:00 AM',
            secondTime: '3:00 PM - 5:00 PM',
            hour: '800 / hr'
        },

    ]

    const pastBookingArr = [
        {
            date: 'Feb 10,2024',
            time: '9:00 AM - 11:00 AM',
            location: 'Agra\nFort',
            price: 'INR 1,500',
            name: 'Namrata Singh',
            member: '9',
            img: require('../../Assets/Home/agentImg.png')
        },
        {
            date: 'Feb 10,2024',
            time: '9:00 AM - 11:00 PM',
            location: 'Agra\nFort',
            price: 'INR 1,500',
            name: 'Namrata Singh',
            member: '9',
            img: require('../../Assets/Home/agentImg.png')
        },
        {
            date: 'Feb 10,2024',
            time: '9:00 AM - 11:00 AM',
            location: 'Agra\nFort',
            price: 'INR 1,500',
            name: 'Namrata Singh',
            member: '9',
            img: require('../../Assets/Home/agentImg.png')
        },

    ]
    const earningArr = [
        {
            title: 'Total Trip Hours',
            month: '10 hours',
            year: '80 hours'
        },
        {
            title: 'Earnings',
            month: '8,000/-',
            year: '10,210/-'
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
                            source={require('../../Assets/Home/userimg.png')}
                            style={styles.userImg}
                        />
                        <View
                            style={{
                                marginLeft: moderateScale(10)
                            }}>
                            <Text
                                style={{ ...styles.nameText, color: colors.white }}>
                                Welcome Nihal Rao!
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
                                    {/* <Text
                                        style={{ ...styles.ratingText2, color: colors.white }}>
                                        Ratings
                                    </Text> */}
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
                        style={{ ...styles.viewBox, backgroundColor: colors.boxColor }}>

                        <View style={{ flex: 5 }}>
                            <Text
                                style={{
                                    ...styles.avilability,
                                    fontSize: moderateScale(15)
                                }}>
                                Availability
                            </Text>
                            <View
                                style={{
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    justifyContent: 'space-evenly'
                                }}>
                                <View
                                    style={{
                                        ...styles.circleStyl,
                                        backgroundColor: '#FF3B30'
                                    }}>
                                    <Icon
                                        name='close'
                                        type='AntDesign'
                                        color={'#000000'}
                                        size={17}
                                    />
                                </View>
                                <View
                                    style={{
                                        ...styles.circleStyl,
                                        backgroundColor: '#4ECB71'
                                    }}>
                                    <Icon
                                        name='check'
                                        type='AntDesign'
                                        color={'#000000'}
                                        size={17}
                                    />
                                </View>
                            </View>
                        </View>
                        <View
                            style={{
                                height: '100%',
                                width: moderateScale(1),
                                backgroundColor: 'rgba(255, 255, 255, 0.24)',
                                marginHorizontal: moderateScale(15)
                            }} />

                        <View
                            style={{ flex: 6 }}>
                            <Text
                                style={{
                                    ...styles.avilability,
                                    fontSize: moderateScale(15)
                                }}>
                                Price
                            </Text>
                            <View
                                style={styles.priceDayView}>
                                <View
                                    style={{
                                        alignItems: 'center'
                                    }}>
                                    <Text
                                        style={{
                                            ...styles.dayText,
                                            color: colors.tabBarColor
                                        }}>
                                        Full day
                                    </Text>
                                    <View
                                        style={{ ...styles.priceBox, borderColor: colors.secondaryThemeColor }}
                                    >
                                        <Text
                                            style={{
                                                ...styles.avilability,
                                                fontSize: moderateScale(10)
                                            }}>
                                            INR 1,500
                                        </Text>
                                    </View>
                                </View>
                                <View style={{ flex: 1 }} />
                                <View
                                    style={{
                                        alignItems: 'center',
                                        // marginLeft: moderateScale(10)
                                    }}>
                                    <Text
                                        style={{
                                            ...styles.dayText,
                                            color: colors.tabBarColor
                                        }}>
                                        Half day
                                    </Text>
                                    <View
                                        style={{ ...styles.priceBox, borderColor: colors.secondaryThemeColor }}
                                    >
                                        <Text
                                            style={{
                                                ...styles.avilability,
                                                fontSize: moderateScale(10)
                                            }}>
                                            INR 1,500
                                        </Text>
                                    </View>
                                </View>
                            </View>
                        </View>

                    </View>

                    <Text
                        style={styles.upcomingBookingText}>
                        Upcoming Bookings
                    </Text>

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
                            <ComingBookingCard
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
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            marginVertical: moderateScale(15)
                        }}>
                        <Text
                            style={styles.nextCardHeading}>
                            Earnings
                        </Text>
                        <TouchableOpacity
                        onPress={()=>NavigationService.navigate('AgentEarning')}>
                            <Icon
                                name='chevron-small-right'
                                type='Entypo'
                                size={30}
                            />
                        </TouchableOpacity>
                    </View>

                    <View
                        style={{ ...styles.erningView, borderColor: colors.secondaryThemeColor }}>
                        <View
                            style={{
                                flexDirection: 'row',
                                alignItems: 'center',
                                justifyContent: 'space-between',
                                marginBottom: moderateScale(5)
                            }}>
                            <View
                                style={{
                                    width: '25%',

                                }}>
                            </View>
                            <View
                                style={{
                                    height: '100%',
                                    width: moderateScale(2),
                                    backgroundColor: colors.secondaryThemeColor,
                                    marginHorizontal: moderateScale(3),
                                }}
                            />
                            <View
                                style={{
                                    width: '30%',
                                }}>
                                <Text
                                    style={styles.erningText}>
                                    Current Month
                                </Text>
                                {/* <Text
                                    style={styles.erningText}>
                                    (January)
                                </Text> */}
                            </View>
                            <View
                                style={{
                                    height: '100%',
                                    width: moderateScale(2),
                                    backgroundColor: colors.secondaryThemeColor,
                                    marginHorizontal: moderateScale(10),
                                }}
                            />
                            <View
                                style={{
                                    width: '30%',
                                }}>
                                <Text
                                    style={styles.erningText}>
                                    Current Year
                                </Text>
                                {/* <Text
                                    style={styles.erningText}>
                                    (2024)
                                </Text> */}
                            </View>
                        </View>
                        <View
                            style={{
                                height: moderateScale(1),
                                width: '100%',
                                backgroundColor: colors.secondaryThemeColor,
                                // marginTop: moderateScale(2),
                                // marginBottom: moderateScale(2)
                            }}
                        >
                        </View>

                        {earningArr.map((item, index, lastObject) => (
                            <EarningTable
                                lastObject={(earningArr.length - 1) != index}
                                key={index}
                                item={item}
                            />
                        ))}


                    </View>


                    {/* <View
                        style={{
                            ...styles.cardHeading,
                            marginVertical: moderateScale(20)
                        }}>
                        <Text
                            style={styles.nextCardHeading}>
                            Your past bookings
                        </Text>
                        <Icon
                            name='chevron-small-right'
                            type='Entypo'
                            size={30}
                        />
                    </View> */}

                    {/* <ScrollView
                        horizontal
                        contentContainerStyle={{
                            ...styles.bookingMap,
                            marginBottom: moderateScale(25)
                        }}>
                        {pastBookingArr.map((item, index) => (
                            <PastBookingCard
                                key={index}
                                item={item}
                                style={{
                                    marginLeft: index != 0 ? moderateScale(8) : 0,
                                    marginRight: index != comingBookingArr.length - 1 ? moderateScale(8) : 0
                                }}
                            />
                        ))}
                    </ScrollView> */}

                </View>
            </ScrollView>
        </Container>
    )
}

export default Home

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