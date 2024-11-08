import { Dimensions, Pressable, StyleSheet, View } from 'react-native'
import React from 'react'
import { Icon, StatusBar, Text } from 'react-native-basic-elements'
import { moderateScale } from '../../Constants/PixelRatio'
import { FONTS } from '../../Constants/Fonts'
import NavigationService from '../../Services/Navigation'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
const { height, width } = Dimensions.get('window')

const EditProfileHeader = ({ title = ' ' }) => {
    const inset = useSafeAreaInsets()
    return (
        <View
            style={{
                // backgroundColor: 'white',
                height: moderateScale(60) + inset.top,
                flexDirection: 'row',
                paddingTop: inset.top,
                alignItems: 'center'
            }}
        >
            <StatusBar backgroundColor={'transparent'} translucent={true} barStyle='light-content' />
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
            <View
                style={{
                    position: 'absolute',
                    width,
                    height: moderateScale(60),
                    top: inset.top,
                    justifyContent: 'center'
                }}
            >

                <Text
                    style={styles.bookingText}>
                    {title}
                </Text>
            </View>
            <Text
                style={{
                    ...styles.backText,
                    // color: 'red',
                    position: 'absolute',
                    right: moderateScale(15),
                    top: moderateScale(60)
                }}>
                Save
            </Text>
        </View>
    )
}

export default EditProfileHeader

const styles = StyleSheet.create({
    backView: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: moderateScale(10),
        zIndex: 1
    },
    backText: {
        fontFamily: FONTS.OpenSans.semibold,
        fontSize: moderateScale(14)
    },
    bookingText: {
        fontFamily: FONTS.OpenSans.bold,
        fontSize: moderateScale(15),
        textAlign: 'center'
    },
})