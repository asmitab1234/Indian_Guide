import { Image, StyleSheet, View } from 'react-native'
import React from 'react'
import { Text } from 'react-native-basic-elements'
import { FONTS } from '../../Constants/Fonts'
import { moderateScale } from '../../Constants/PixelRatio'

const ExpertComponent = ({ item }) => {
    return (
        <View>
            <Text
                style={styles.headingStyl}>
                {item.heading}
            </Text>
            <Image
                source={item.img}
                style={styles.imgStyl}
            />
            <Text
                style={styles.descText}>
                {item.desc}
            </Text>
        </View>
    )
}

export default ExpertComponent

const styles = StyleSheet.create({
    headingStyl: {
        fontFamily: FONTS.OpenSans.bold,
        fontSize: moderateScale(18),
        marginHorizontal: moderateScale(15),
        marginTop:moderateScale(10)
    },
    imgStyl: {
        height: moderateScale(100),
        width: '90%',
        marginHorizontal: moderateScale(15),
        marginVertical:moderateScale(10)
    },
    descText: {
        fontFamily: FONTS.OpenSans.medium,
        fontSize: moderateScale(13),
        marginHorizontal: moderateScale(15),
        marginBottom:moderateScale(10)
    }
})