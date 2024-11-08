import { Image, StyleSheet, View } from 'react-native'
import React from 'react'
import { moderateScale } from '../../Constants/PixelRatio'
import { Icon, Text, useTheme } from 'react-native-basic-elements'
import { FONTS } from '../../Constants/Fonts'

const ComingBookingCard = ({ item, style = {} }) => {
    const colour = useTheme()
    return (
        <View
            style={{ ...styles.bookingBox, borderColor: colour.borderColor, ...style }}>
            <View
                style={{
                    ...styles.dotAgent,
                    backgroundColor: colour.buttonColor
                }}>
                <Icon
                    name='dot-single'
                    type='Entypo'
                    color={colour.white}
                />
                <Text
                    style={{ ...styles.agentText, color: colour.white }}>
                    {item.agent}
                </Text>
            </View>

            <Text
                style={styles.dateTime}>
                {item.date}
            </Text>

            <Text
                style={styles.dateTime}>
                {item.time}
            </Text>

            <Text
                style={styles.dateTime}>
                Meeting point :{' '}
                <Text
                    style={{
                        ...styles.dateTime,
                        fontSize: moderateScale(11)
                    }}>
                    {item.location}
                </Text>
            </Text>

            <Text
                style={{
                    ...styles.dateTime,
                    marginTop: moderateScale(13),
                    fontSize: moderateScale(15)
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
                </View>
                <Image
                    source={item.img}
                    style={styles.imgStyl}
                />
            </View>
        </View>
    )
}

export default ComingBookingCard

const styles = StyleSheet.create({
    bookingBox: {
        paddingHorizontal: moderateScale(13),
        paddingVertical: moderateScale(8),
        borderWidth: moderateScale(1),
        // borderColor: 'rgba(255, 255, 255, 0.7)',
        borderRadius: moderateScale(20),
        // width:moderateScale(163),
        flex:1
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
    },
    name: {
        fontFamily: FONTS.OpenSans.bold,
        fontSize: moderateScale(10)
    },
    member: {
        fontFamily: FONTS.OpenSans.semibold,
        fontSize: moderateScale(10)
    },
    imgStyl: {
        height: moderateScale(36),
        width: moderateScale(36),
        borderRadius: moderateScale(80)
    }
})