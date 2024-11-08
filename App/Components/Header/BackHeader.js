import { Dimensions, Pressable, StyleSheet, View } from 'react-native'
import React from 'react'
import { Icon, StatusBar, Text } from 'react-native-basic-elements'
import { moderateScale } from '../../Constants/PixelRatio'
import { FONTS } from '../../Constants/Fonts'
import NavigationService from '../../Services/Navigation'
const { height, width } = Dimensions.get('window')

const BackHeader = ({ title = ' ' }) => {
    return (
        <View
            style={{
                height: height / 6.5,
                width: width
            }}>
            <StatusBar backgroundColor={'transparent'} translucent={true} barStyle='dark-content' />
            <Pressable
                style={styles.backView}
                onPress={() => NavigationService.back()}>
                <Icon
                    name='chevron-small-left'
                    type='Entypo'
                    style={{
                        marginRight: moderateScale(8)
                    }}
                    size={30}
                />
                <Text
                    style={styles.backText}>
                    Back
                </Text>
            </Pressable>
            <Text
                style={styles.bookingText}>
                {title}
            </Text>
        </View>
    )
}

export default BackHeader

const styles = StyleSheet.create({
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
        fontSize: moderateScale(17),
        top: moderateScale(55),
        left:moderateScale(5),
        textAlign: 'center'
    },
})