import { StyleSheet, View } from 'react-native'
import React from 'react'
import { AppButton, Icon, Text, useTheme } from 'react-native-basic-elements'
import { moderateScale } from '../../Constants/PixelRatio'
import { FONTS } from '../../Constants/Fonts'
import NavigationService from '../../Services/Navigation'

const LogOutModal = ({ setModalVisible }) => {
    const colors = useTheme()
    return (
        <View
            style={{
                ...styles.modalStyl,
                backgroundColor: colors.secondaryFontColor
            }}>
            <View
                style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginBottom: moderateScale(25)
                }}>
                <Text
                    style={{
                        ...styles.textSize,
                        color: colors.primaryFontColor
                    }}>
                    Are you sure you want to logout?
                </Text>
                <Icon
                    name='close'
                    type='AntDesign'
                    color={'#910F0F'}
                    onPress={() => setModalVisible(false)}
                />
            </View>

            <View
                style={styles.buttonView}>
                <AppButton
                    title='Cancel'
                    style={{
                        ...styles.buttonStyl_1,
                        borderColor: colors.buttonColor
                    }}
                    textStyle={{
                        ...styles.buttonText,
                        color: colors.primaryFontColor
                    }}
                />
                <AppButton
                    title='Logout'
                    style={styles.buttonStyl}
                    textStyle={{
                        ...styles.buttonText,
                        color: colors.secondaryFontColor
                    }}
                    onPress={() => {
                        NavigationService.navigate('Login');
                        setModalVisible(false)
                    }}
                />

            </View>
        </View>
    )
}

export default LogOutModal

const styles = StyleSheet.create({
    modalStyl: {
        padding: moderateScale(10),
        borderTopRightRadius: moderateScale(10),
        borderTopLeftRadius: moderateScale(10)
    },
    textSize: {
        fontFamily: FONTS.OpenSans.regular,
        fontSize: moderateScale(14)
    },
    buttonView: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    buttonStyl: {
        marginHorizontal: 0,
        height: moderateScale(40),
        borderRadius: moderateScale(6),
        width: '45%'
    },
    buttonStyl_1: {
        marginHorizontal: 0,
        height: moderateScale(40),
        borderRadius: moderateScale(6),
        backgroundColor: 'transparent',
        width: '45%',
        borderWidth: 1
    },
    buttonText: {
        fontFamily: FONTS.OpenSans.semibold,
        fontSize: moderateScale(16)
    }
})