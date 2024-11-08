import { Dimensions, Image, ImageBackground, Pressable, ScrollView, StyleSheet, View } from 'react-native'
import React from 'react'
import { Container, Icon, StatusBar, Text, useTheme } from 'react-native-basic-elements'
import { moderateScale } from '../../Constants/PixelRatio'
import NavigationService from '../../Services/Navigation'
import { FONTS } from '../../Constants/Fonts'
import ReferalList from '../../Components/Profile/ReferalList'
const { height, width } = Dimensions.get('window')

const TotalReferral = () => {
    const colour = useTheme()
    const refferalArr = [
        {
            name: 'Mohit Shetty',
            date: 'Mon, Feb 05,2024',
            price: '+100'
        },
        {
            name: 'Mohit Shetty',
            date: 'Mon, Feb 05,2024',
            price: '+100'
        },
        {
            name: 'Mohit Shetty',
            date: 'Mon, Feb 05,2024',
            price: '+100'
        },
        {
            name: 'Mohit Shetty',
            date: 'Mon, Feb 05,2024',
            price: '+100'
        },
        {
            name: 'Mohit Shetty',
            date: 'Mon, Feb 05,2024',
            price: '+100'
        },
        {
            name: 'Mohit Shetty',
            date: 'Mon, Feb 05,2024',
            price: '+100'
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
                    resizeMode='cover'>
                    <Pressable
                        style={styles.backView}
                        onPress={() => NavigationService.back()}>
                        <Icon
                            name='chevron-small-left'
                            type='Entypo'
                            style={{
                                marginRight: moderateScale(8),
                                color: colour.white
                            }}
                            size={30}
                        />
                        <Text
                            style={{ ...styles.backText, color: colour.white }}>
                            Back
                        </Text>
                    </Pressable>

                    <Text
                        style={{ ...styles.bookingText, color: colour.white }}>
                        Total Earnings
                    </Text>

                    <Text
                        style={{ ...styles.nameTextStyl, color: colour.white }}>
                        ₹ 400
                    </Text>
                </ImageBackground>

                <View
                    style={{
                        marginHorizontal: moderateScale(15),
                    }}>
                    <View
                        style={{ ...styles.referView }}>
                        <Text
                            style={styles.headingText}>
                            Refer via
                        </Text>
                        <View
                            style={{
                                flexDirection: 'row',
                                alignItems: 'center'
                            }}>
                            <Image
                                source={require('../../Assets/Profile/logowhatsapp.png')}
                                style={styles.whtsappImg}
                            />
                            <Icon
                                name='share'
                                type='Entypo'
                                size={24}
                                color={colour.secondaryThemeColor}
                            />
                        </View>
                    </View>

                    <View
                        style={{ ...styles.refferCodeBox, borderColor: colour.secondaryThemeColor }}>
                        <View>
                            <Text
                                style={{ ...styles.refferText, color: colour.secondaryThemeColor }}>
                                Referral Code
                            </Text>
                            <Text
                                style={{ ...styles.headingText, color: colour.secondaryThemeColor }}>
                                JKlM34nOrAS
                            </Text>
                        </View>
                        <View
                            style={{
                                flexDirection: 'row',
                                alignItems: 'center'
                            }}>
                            <Text
                                style={styles.copyText}>
                                Tap to copy
                            </Text>
                            <Image
                                source={require('../../Assets/Profile/copy.png')}
                                style={styles.copyImg}
                            />
                        </View>
                    </View>

                    <Text
                        style={{
                            ...styles.headingText,
                            marginBottom: moderateScale(15)
                        }}>
                        Your Referal
                    </Text>

                    {refferalArr.map((item, index) => (
                        <ReferalList
                            key={index}
                            item={item}
                        />
                    ))}

                </View>
            </ScrollView>
        </Container>
    )
}

export default TotalReferral

const styles = StyleSheet.create({
    homeImg: {
        height: height / 3.4,
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
        fontSize: moderateScale(20),
        top: moderateScale(50),
        textAlign: 'center'
    },
    nameTextStyl: {
        fontFamily: FONTS.OpenSans.bold,
        fontSize: moderateScale(20),
        top: moderateScale(50),
        textAlign: 'center'
    },
    referView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: moderateScale(20),
        marginBottom: moderateScale(10),
    },
    headingText: {
        fontFamily: FONTS.OpenSans.bold,
        fontSize: moderateScale(17),
    },
    whtsappImg: {
        height: moderateScale(24),
        width: moderateScale(24),
        marginRight: moderateScale(18)
    },
    refferCodeBox: {
        borderWidth: moderateScale(1),
        // borderColor: 'rgba(255, 255, 255, 0.7)',
        borderRadius: moderateScale(10),
        padding: moderateScale(10),
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: moderateScale(20),
        marginBottom: moderateScale(24)
    },
    refferText: {
        fontFamily: FONTS.OpenSans.semibold,
        fontSize: moderateScale(14),
        color: 'rgba(255, 255, 255, 0.74)',
        marginBottom: moderateScale(8)
    },
    copyText: {
        color: '#3F85D7',
        fontFamily: FONTS.OpenSans.medium,
        fontSize: moderateScale(13)
    },
    copyImg: {
        height: moderateScale(24),
        width: moderateScale(24),
        marginLeft: moderateScale(10)
    },

})