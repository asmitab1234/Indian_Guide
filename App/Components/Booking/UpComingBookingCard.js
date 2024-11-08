import { Image, StyleSheet, View } from 'react-native'
import React from 'react'
import { moderateScale } from '../../Constants/PixelRatio'
import { AppButton, Text, useTheme } from 'react-native-basic-elements'
import { FONTS } from '../../Constants/Fonts'
import NavigationService from '../../Services/Navigation'

const UpComingBookingCard = ({ item }) => {
    const colors = useTheme()
    return (
        <>
            <View
                style={styles.bookingView}>
                <Image
                    source={item.img}
                    style={styles.imgStyl}
                />
                <View
                    style={{ marginLeft: moderateScale(15), flex: 1 }}>
                    <Text
                        style={{
                            ...styles.nameText,
                            marginBottom: moderateScale(4)
                        }}>
                        {item.name}
                    </Text>
                    <Text
                        style={styles.dateTimePlace}>
                        {item.date}
                    </Text>
                    <Text
                        style={styles.dateTimePlace}>
                        {item.time}
                    </Text>
                    <Text
                        style={styles.dateTimePlace}>
                        {item.location}
                    </Text>
                    <View style={{ flex: 1 }} />
                    <View style={styles.buttonPrice}>
                        <Text
                            style={{
                                ...styles.nameText,
                                marginTop: moderateScale(4)
                            }}>
                            {item.price}
                        </Text>
                        <AppButton
                            title='More Details'
                            textStyle={{ ...styles.buttonText, color: colors.primaryThemeColor }}
                            style={styles.buttonStyl}
                            onPress={() => NavigationService.navigate('ResultScreen')}
                        />
                    </View>
                </View>
            </View>
            <View
                style={{
                    height: moderateScale(1),
                    width: '100%',
                    backgroundColor: colors.secondaryThemeColor,
                    marginVertical: moderateScale(10)
                }} />
        </>
    )
}

export default UpComingBookingCard

const styles = StyleSheet.create({
    bookingView: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: moderateScale(10),
        // flex:1
    },
    imgStyl: {
        height: moderateScale(80),
        width: moderateScale(80),
        borderRadius: moderateScale(100)
    },
    nameText: {
        fontFamily: FONTS.OpenSans.semibold,
        fontSize: moderateScale(15)
    },
    dateTimePlace: {
        fontFamily: FONTS.OpenSans.regular,
        fontSize: moderateScale(12)
    },
    buttonPrice: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    buttonText: {
        fontFamily: FONTS.OpenSans.semibold,
        fontSize: moderateScale(10)
    },
    buttonStyl: {
        height: moderateScale(25),
        width: moderateScale(71),
        borderRadius: moderateScale(6),
        marginHorizontal: 0
    }
})