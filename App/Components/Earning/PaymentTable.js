import { StyleSheet, View } from 'react-native'
import React from 'react'
import { moderateScale } from '../../Constants/PixelRatio'
import { FONTS } from '../../Constants/Fonts'
import { Text, useTheme } from 'react-native-basic-elements'

const PaymentTable = ({ item }) => {
    const colors = useTheme()
    return (

        <View
            style={{
                ...styles.viewBox,
                backgroundColor: colors.boxColor
            }}>
            <View style={{ width: '28%' }}>
                <Text
                    style={{ ...styles.headingText, color: colors.primaryFontColor }}>
                    {item.date}
                </Text>
            </View>
            <View style={{ width: '20%' }}>
                <Text
                    style={{ ...styles.headingText, color: colors.primaryFontColor }}>
                    {item.amount}
                </Text>
            </View>
            <View style={{ width: '32%' }}>
                <Text
                    style={{ ...styles.headingText, color: colors.primaryFontColor }}>
                    {item.method}
                </Text>
            </View>
            <View style={{ width: '25%' }}>
                <Text
                    style={{ ...styles.headingText, color: colors.primaryFontColor }}>
                    {item.status}
                </Text>
            </View>
        </View>
    )
}

export default PaymentTable

const styles = StyleSheet.create({
    viewBox: {
        height: moderateScale(30),
        width: '100%',
        // borderRadius: moderateScale(10),
        backgroundColor: '#101010',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: moderateScale(15),
        // marginVertical:moderateScale(5)
    },
    headingText: {
        fontFamily: FONTS.OpenSans.semibold,
        fontSize: moderateScale(12)
    },
    monthText: {
        fontFamily: FONTS.OpenSans.regular,
        fontSize: moderateScale(12)
    },
})