import { Dimensions, Image, ImageBackground, Pressable, ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { AppButton, Container, Icon, Picker, StatusBar, Text, useTheme } from 'react-native-basic-elements'
import { moderateScale } from '../../Constants/PixelRatio'
import { FONTS } from '../../Constants/Fonts'
import NavigationService from '../../Services/Navigation'
const { height, width } = Dimensions.get('window')

const RecentlyTourScreen = () => {
    const [dropdownValue, setDropdownValue] = useState('');
    const colors = useTheme()
    return (
        <Container>
            <StatusBar backgroundColor={'transparent'} translucent={true} barStyle='dark-content' />
            <ScrollView
                showsVerticalScrollIndicator={false}
            // contentContainerStyle={{ flex: 1 }}
            >

                <View
                    // source={require('../../Assets/Home/HomeImg.png')}
                    style={styles.homeImg}
                // resizeMode='cover'
                >
                    <Pressable
                        style={styles.backView}
                        onPress={() => NavigationService.back()}>
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
                        Recenty Completed
                    </Text>

                </View>

                <View
                    style={{
                        marginHorizontal: moderateScale(15),
                        flex: 1
                    }}>

                    <Text
                        style={styles.userDetails}>
                        User Details
                    </Text>

                    <View
                        style={styles.nameImg}>
                        <View
                            style={{
                                marginBottom: moderateScale(20)
                            }}>
                            <Text
                                style={styles.textStyl}>
                                Name : {' '}
                                <Text
                                    style={{
                                        ...styles.textStyl,
                                        fontFamily: FONTS.OpenSans.regular
                                    }}>
                                    Namrata Singh
                                </Text>
                            </Text>
                            <Text
                                style={styles.textStyl}>
                                Members : {' '}
                                <Text
                                    style={{
                                        ...styles.textStyl,
                                        fontFamily: FONTS.OpenSans.regular
                                    }}>
                                    5
                                </Text>
                            </Text>
                            <Text
                                style={styles.textStyl}>
                                Ratings : {' '}
                                <Text
                                    style={{
                                        ...styles.textStyl,
                                        fontFamily: FONTS.OpenSans.regular
                                    }}>
                                    4.5
                                </Text>
                            </Text>

                            {/* <Text
                                style={styles.textStyl}>
                                Language : {' '}
                                <Text
                                    style={{
                                        ...styles.textStyl,
                                        fontFamily: FONTS.OpenSans.regular
                                    }}>
                                    English
                                </Text>
                            </Text> */}
                            <Text
                                style={styles.textStyl}>
                                No. of Days : {' '}
                                <Text
                                    style={{
                                        ...styles.textStyl,
                                        fontFamily: FONTS.OpenSans.regular
                                    }}>
                                    4
                                </Text>
                            </Text>
                            <Text
                                style={styles.textStyl}>
                                Tour Guide : {' '}
                                <Text
                                    style={{
                                        ...styles.textStyl,
                                        fontFamily: FONTS.OpenSans.regular
                                    }}>
                                    Nikhil Rao
                                </Text>
                            </Text>
                            <Text
                                style={styles.textStyl}>
                                Contact No. : {' '}
                                <Text
                                    style={{
                                        ...styles.textStyl,
                                        fontFamily: FONTS.OpenSans.regular
                                    }}>
                                    1234567890
                                </Text>
                            </Text>

                        </View>
                        <Image
                            source={require('../../Assets/Home/agentImg.png')}
                            style={styles.userImg}
                        />
                    </View>



                    <Text
                        style={styles.userDetails}>
                        Package Name
                    </Text>
                    <View
                        style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            // marginBottom: moderateScale(20)
                        }}>
                        <Image
                            source={require('../../Assets/Agent/Home/boolingimg.png')}
                            style={{
                                height: moderateScale(100),
                                width: moderateScale(100),
                                borderRadius: moderateScale(8),
                            }} />
                        <View
                            style={{
                                marginLeft: moderateScale(8)
                            }}>
                            <Text
                                style={{
                                    ...styles.agentName,
                                    color: colors.tabBarColor,
                                }}>
                                Multiday Tour
                            </Text>
                            <Text
                                style={{
                                    fontFamily: FONTS.OpenSans.bold,
                                    fontSize: moderateScale(14)
                                }}>
                                Royal Agra Retreat
                            </Text>
                            <Text
                                style={styles.tajSubText}>
                                (Private Guided tour with{'\n'}Experience)
                            </Text>
                        </View>
                    </View>

                    {/* <View style={{
                        height: moderateScale(1),
                        width: '36%',
                        backgroundColor: colors.tabBarColor,
                        marginBottom: moderateScale(25)
                    }} /> */}


                    <Text
                        style={styles.tajText}>
                        Special Requests / Notes
                    </Text>

                    <View
                        style={{
                            ...styles.noteBox,
                            borderColor: colors.primaryFontColor
                        }}>
                        <Text
                            style={styles.noteText}>
                            A tour that focuses on photography opportunities and
                            tips for capturing the best shots.
                        </Text>
                    </View>
                    <View style={{
                        height: moderateScale(1),
                        width: '100%',
                        backgroundColor: colors.tabBarColor,
                        marginBottom: moderateScale(15)
                    }} />

                    <Text
                        style={styles.textStyl}>
                        Date : {' '}
                        <Text
                            style={{
                                ...styles.textStyl,
                                fontFamily: FONTS.OpenSans.regular
                            }}>
                            Mon, Feb 05, 2024
                        </Text>
                    </Text>
                    <Text
                        style={styles.textStyl}>
                        Time : {' '}
                        <Text
                            style={{
                                ...styles.textStyl,
                                fontFamily: FONTS.OpenSans.regular
                            }}>
                            9:40AM - 11:00 AM
                        </Text>
                    </Text>
                    <Text
                        style={styles.textStyl}>
                        Location : {' '}
                        <Text
                            style={{
                                ...styles.textStyl,
                                fontFamily: FONTS.OpenSans.regular
                            }}>
                            Agra fort & Taj Mahal
                        </Text>
                    </Text>
                    <Text
                        style={styles.textStyl}>
                        Meeting Point : {' '}
                        <Text
                            style={{
                                ...styles.textStyl,
                                fontFamily: FONTS.OpenSans.regular
                            }}>
                            Agra Fort
                        </Text>
                    </Text>
                    <Text
                        style={styles.textStyl}>
                        Amount Paid : {' '}
                        <Text
                            style={{
                                ...styles.textStyl,
                                fontFamily: FONTS.OpenSans.regular
                            }}>
                            INR 1000 (Full /Partial /Unpaid)
                        </Text>
                    </Text>


                    {/* <Text
                        style={{
                            ...styles.textStyl,
                            marginTop: moderateScale(10)
                        }}>
                        Select Guide
                    </Text>
                    <Picker
                        options={[
                            {
                                label: 'Item 1',
                                value: 'item1'
                            },
                            {
                                label: 'Item 2',
                                value: 'item2'
                            },
                            {
                                label: 'Item 3',
                                value: 'item3'
                            },
                        ]}
                        placeholder="Nikhil Rao"
                        textStyle={{
                            fontSize: 15
                        }}
                        selectedValue={dropdownValue}
                        onValueChange={(val) => setDropdownValue(val)}
                        dropdownIconColor={colors.primaryFontColor}
                        containerStyle={styles.picker}
                    /> */}

                    {/* <View style={{ flex: 1 }} /> */}
                    {/* <TouchableOpacity> */}
                    {/* <AppButton
                        title='Cancel Booking'
                        style={styles.buttonStyyl}
                        textStyle={{ ...styles.buttonText, color: colors.primaryThemeColor }}
                    /> */}
                    {/* </TouchableOpacity> */}
                </View>
            </ScrollView>
        </Container>
    )
}

export default RecentlyTourScreen

const styles = StyleSheet.create({
    homeImg: {
        height: height / 8,
        width: width,
        borderBottomLeftRadius: moderateScale(20),
        borderBottomRightRadius: moderateScale(20)
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
        fontSize: moderateScale(16),
        top: moderateScale(55),
        textAlign: 'center',
        left:moderateScale(15)
    },
    userDetails: {
        fontFamily: FONTS.OpenSans.bold,
        fontSize: moderateScale(20),
        marginVertical: moderateScale(12)
    },
    nameImg: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    textStyl: {
        fontFamily: FONTS.OpenSans.bold,
        fontSize: moderateScale(14),
        marginBottom: moderateScale(3)
    },
    userImg: {
        height: moderateScale(90),
        width: moderateScale(90)
    },
    noteBox: {
        padding: moderateScale(8),
        borderWidth: moderateScale(1),
        borderRadius: moderateScale(10),
        marginBottom: moderateScale(20),
        height: moderateScale(100)
    },
    noteText: {
        fontFamily: FONTS.OpenSans.regular,
        fontSize: moderateScale(13),
    },
    buttonStyyl: {
        marginHorizontal: 0,
        height: moderateScale(48),
        marginVertical: moderateScale(10)
    },
    buttonText: {
        fontFamily: FONTS.OpenSans.bold,
        fontSize: moderateScale(16)
    },
    tajText: {
        fontFamily: FONTS.OpenSans.bold,
        fontSize: moderateScale(16),
        marginBottom: moderateScale(12),
        marginTop:moderateScale(15)
    },
    tajSubText: {
        fontFamily: FONTS.OpenSans.medium,
        fontSize: moderateScale(14),
    },
    agentName: {
        fontFamily: FONTS.OpenSans.medium,
        fontSize: moderateScale(14),
        // color:'rgba(0, 0, 0, 0.6)',
        // color:'#FFFFFF',
        // marginBottom: moderateScale(15),
        // textDecorationLine: 'underline'
    },
    picker:{
        height:moderateScale(40),
        justifyContent:'center',
        width:'50%'
    }
})