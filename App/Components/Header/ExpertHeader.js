import { Dimensions, Image, Pressable, StyleSheet, View } from 'react-native'
import React from 'react'
import { Icon, StatusBar, Text } from 'react-native-basic-elements'
import { moderateScale } from '../../Constants/PixelRatio'
import { FONTS } from '../../Constants/Fonts'
import NavigationService from '../../Services/Navigation'
const { height, width } = Dimensions.get('window')

const ExpertHeader = ({ title = ' ' }) => {
    return (
        <View
            style={{
                height: height / 4.5,
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
            <Image
            source={require('../../Assets/Profile/expert.png')}
            resizeMode='contain'
            style={{
                height:moderateScale(80),
                width:moderateScale(80),
                position: 'absolute',
                top: moderateScale(80),
                left: moderateScale(30),
            }}
            />
        </View>
    )
}

export default ExpertHeader

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
        fontSize: moderateScale(15),
        top: moderateScale(50),
        textAlign: 'center'
    },
})