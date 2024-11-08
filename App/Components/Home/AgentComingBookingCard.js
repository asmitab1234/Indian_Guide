import { Image, ImageBackground, StyleSheet, View } from 'react-native'
import React from 'react'
import { moderateScale } from '../../Constants/PixelRatio'
import { Card, Icon, Text, useTheme } from 'react-native-basic-elements'
import { FONTS } from '../../Constants/Fonts'

const AgentComingBookingCard = ({ item, style = {} }) => {
    const colour = useTheme()
    return (
        <Card
            style={{ ...styles.bookingBox, borderColor: colour.borderColor, ...style }}
            shadow={false}>
            <ImageBackground
                style={styles.imageBooking}
                source={item.agent}
                borderTopRightRadius={10}
                borderTopLeftRadius={10}
            // resizeMode='contain'
            >
                <View
                    style={styles.dayBox}>
                    <Text
                        style={{
                            ...styles.member,
                            color:colour.white}}>
                        {item.dayTour}
                    </Text>
                </View>
            </ImageBackground>

            <Text
                style={{
                    fontFamily: FONTS.OpenSans.bold,
                    fontSize: moderateScale(15),
                    marginHorizontal: moderateScale(10),
                    marginTop: moderateScale(10)
                }}>
                {item.title}
            </Text>

            <Text
                style={{
                    ...styles.pickupHead,
                    marginHorizontal: moderateScale(10),
                    marginTop: moderateScale(5)
                }}>
                Pickup Location :{' '}
                <Text
                    style={styles.dateTime}>
                    {item.pickupLocation}
                </Text>
            </Text>

            <Text
                style={{
                    ...styles.pickupHead,
                    marginHorizontal: moderateScale(10),
                    marginTop: moderateScale(5)
                }}>
                Guide's Name :{' '}
                <Text
                    style={styles.dateTime}>
                    {item.guide}
                </Text>
            </Text>

            <Text
                style={{
                    ...styles.dateTime,
                    marginHorizontal: moderateScale(10)
                }}>
                {item.date}
            </Text>
            <Text
                style={{
                    fontFamily: FONTS.OpenSans.bold,
                    marginTop: moderateScale(8),
                    fontSize: moderateScale(17),
                    marginHorizontal:moderateScale(10)
                }}>
                {item.price}
            </Text>

            <View style={{ ...styles.line, backgroundColor: colour.secondaryThemeColor }} />

            <View
                style={styles.nameImgView}>
                <View>
                    <Text
                        style={styles.name}>
                        {item.name}
                    </Text>
                    <Text
                        style={styles.member}>
                        {item.member} Members
                    </Text>
                    <Text
                        style={styles.member}>
                        {item.totalDay} Days
                    </Text>
                </View>
                <Image
                    source={item.img}
                    style={styles.imgStyl}
                />
            </View>
        </Card>
    )
}

export default AgentComingBookingCard

const styles = StyleSheet.create({
    bookingBox: {
        padding: moderateScale(0),
        paddingVertical: moderateScale(8),
        borderWidth: moderateScale(1),
        // borderColor: 'rgba(255, 255, 255, 0.7)',
        borderRadius: moderateScale(20),
        // width:moderateScale(163),
        flex: 1,
        backgroundColor: 'transparent',
        width: moderateScale(210),
        paddingVertical: 0
    },
    dotAgent: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#4E4A4A',
        borderRadius: moderateScale(5),
        // justifyContent: 'center',
        height: moderateScale(20),
        // paddingHorizontal: moderateScale(5),
        width: '75%'
    },
    agentText: {
        fontFamily: FONTS.OpenSans.semibold,
        fontSize: moderateScale(13)
    },
    dateTime: {
        fontFamily: FONTS.OpenSans.semibold,
        fontSize: moderateScale(12),
        marginTop: moderateScale(8)
    },
    line: {
        width: '100%',
        height: moderateScale(1),
        // backgroundColor: '#FFFFFF',
        marginVertical: moderateScale(10)
    },
    nameImgView: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginHorizontal:moderateScale(10),
        marginBottom:moderateScale(15)
    },
    name: {
        fontFamily: FONTS.OpenSans.bold,
        fontSize: moderateScale(15)
    },
    member: {
        fontFamily: FONTS.OpenSans.semibold,
        fontSize: moderateScale(12)
    },
    imgStyl: {
        height: moderateScale(50),
        width: moderateScale(50),
        borderRadius: moderateScale(80)
    },
    imageBooking: {
        height: moderateScale(150),
        width: '100%',
        marginHorizontal: moderateScale(0)

    },
    dayBox: {
        backgroundColor: 'rgba(0, 0, 0, 0.28)',
        height: moderateScale(25),
        width: moderateScale(100),
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        top: moderateScale(10),
        borderRadius: moderateScale(30),
        left: moderateScale(5)
    },
    pickupHead: {
        fontFamily: FONTS.OpenSans.regular,
        fontSize: moderateScale(12)
    }
})