import { Image, StyleSheet, View } from 'react-native'
import React from 'react'
import { moderateScale } from '../../Constants/PixelRatio'
import { Icon, Text, useTheme } from 'react-native-basic-elements'
import { FONTS } from '../../Constants/Fonts'

const NextBookingCard = ({ item }) => {
    const colour = useTheme()
    return (
        <View
            style={{ ...styles.bookingBox, borderColor: colour.secondaryThemeColor }}>


            <Text
                style={{
                    ...styles.dateTime,
                    fontSize: moderateScale(15)
                }}>
                {item.date}
            </Text>

            <Text
                style={styles.dateTime}>
                {item.time}
            </Text>

            <Text
                style={styles.dateTime}>
                {item.secondTime}
            </Text>
            <Text
                style={{
                    ...styles.dateTime,
                    marginBottom: moderateScale(10)
                }}>
                at {' '}
                <Text
                    style={{
                        ...styles.dateTime,
                        fontSize: moderateScale(14)
                    }}>
                    {item.hour}
                </Text>
            </Text>
        </View>
    )
}

export default NextBookingCard

const styles = StyleSheet.create({
    bookingBox: {
        paddingHorizontal: moderateScale(13),
        paddingVertical: moderateScale(8),
        borderWidth: moderateScale(1),
        // borderColor: 'rgba(255, 255, 255, 0.7)',
        borderRadius: moderateScale(20),
        marginHorizontal: moderateScale(5)
    },
    dotAgent: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#4E4A4A',
        borderRadius: moderateScale(5),
        // justifyContent: 'center',
        height: moderateScale(20),
        paddingHorizontal: moderateScale(5),
        width: '60%'
    },
    agentText: {
        fontFamily: FONTS.OpenSans.semibold,
        fontSize: moderateScale(13)
    },
    dateTime: {
        fontFamily: FONTS.OpenSans.semibold,
        fontSize: moderateScale(13),
        marginTop: moderateScale(8)
    },
    line: {
        width: '100%',
        height: moderateScale(1),
        backgroundColor: '#FFFFFF',
        marginVertical: moderateScale(10)
    },
    nameImgView: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    name: {
        fontFamily: FONTS.OpenSans.semibold,
        fontSize: moderateScale(10)
    },
    member: {
        fontFamily: FONTS.OpenSans.semibold,
        fontSize: moderateScale(10)
    },
    imgStyl: {
        height: moderateScale(40),
        width: moderateScale(40),
        borderRadius: moderateScale(80)
    }
})