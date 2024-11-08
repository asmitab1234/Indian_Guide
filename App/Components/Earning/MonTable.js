import { StyleSheet, View } from 'react-native'
import React from 'react'
import { Container, Text, useTheme } from 'react-native-basic-elements'
import { moderateScale } from '../../Constants/PixelRatio'
import { FONTS } from '../../Constants/Fonts'

const MonTable = ({ item }) => {
    const colour = useTheme()
    return (
        <Container style={{ backgroundColor: colour.boxColor }}>
            <View
                style={styles.viewBox}>
                <View style={{ width: '30%' }}>
                    <Text
                        style={{ ...styles.monthText, color: colour.primaryFontColor }}>
                        {item.month}
                    </Text>
                </View>
                <View style={{ width: '36%' }}>
                    <Text
                        style={{ ...styles.monthText, color: colour.primaryFontColor }}>
                        {item.earn}
                    </Text>
                </View>
                <View style={{ width: '13%' }}>
                    <Text
                        style={{ ...styles.monthText, color: colour.primaryFontColor }}>
                        {item.bookings}
                    </Text>
                </View>
            </View>
        </Container>
    )
}

export default MonTable

const styles = StyleSheet.create({
    viewBox: {
        // height: moderateScale(42),
        width: '100%',
        // borderRadius: moderateScale(10),
        // backgroundColor: '#101010',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: moderateScale(15),
        marginVertical: moderateScale(5),
    },
    monthText: {
        fontFamily: FONTS.OpenSans.regular,
        fontSize: moderateScale(12)
    }
})