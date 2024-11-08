import { Image, Pressable, StyleSheet, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Icon, Text, useTheme } from 'react-native-basic-elements'
import { moderateScale } from '../../Constants/PixelRatio'
import { FONTS } from '../../Constants/Fonts'
import NavigationService from '../../Services/Navigation'

const SupportSection = ({ item, index, lastObject }) => {
    const colour = useTheme()
    return (
        <>
            <TouchableOpacity
                onPress={() => item.handelClick && NavigationService.navigate(item.handelClick)}
                style={styles.settingView}>
                <View
                    style={styles.iconTitleView}>
                    <Image
                        source={item.icon}
                        style={styles.iconView}
                        resizeMode='contain'
                        tintColor={colour.secondaryThemeColor}
                    />
                    <Text
                        style={{ ...styles.titleText, color: colour.secondaryThemeColor }}>
                        {item.title}
                    </Text>
                </View>
                <Icon
                    name='chevron-small-right'
                    type='Entypo'
                    size={30}
                    color={colour.secondaryThemeColor}
                />
            </TouchableOpacity>
            {lastObject &&
                <View
                    style={{
                        height: moderateScale(1),
                        width: '100%',
                        backgroundColor: 'rgba(255, 255, 255, 0.22)',
                        marginTop: moderateScale(8),
                        marginBottom: moderateScale(8)
                    }} />
            }
        </>
    )
}

export default SupportSection

const styles = StyleSheet.create({
    settingView: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    iconTitleView: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    iconView: {
        height: moderateScale(18),
        width: moderateScale(18),
        marginRight: moderateScale(10)
    },
    titleText: {
        fontFamily: FONTS.OpenSans.semibold,
        fontSize: moderateScale(14)
    }
})