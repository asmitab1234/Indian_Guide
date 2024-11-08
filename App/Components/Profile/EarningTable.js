import { StyleSheet, View } from 'react-native'
import React from 'react'
import { Text, useTheme } from 'react-native-basic-elements'
import { moderateScale } from '../../Constants/PixelRatio'
import { FONTS } from '../../Constants/Fonts'

const EarningTable = ({ item, lastObject }) => {
    const colour = useTheme()
    return (
        <>
            <View
                style={{
                    padding: moderateScale(5),
                }}>
                <View
                    style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        // marginBottom: moderateScale(5),
                        // backgroundColor:"red"
                    }}>
                    <View style={{ width: '25%' }}>
                        <Text
                            style={{ ...styles.erningText }}>
                            {item.title}
                        </Text>
                    </View>
                    <View
                        style={{
                            // height: '100%',
                            height: moderateScale(35),
                            width: moderateScale(2),
                            backgroundColor: colour.secondaryThemeColor,
                            marginRight: moderateScale(35),
                        }}
                    />
                    <View style={{ width: '25%' }}>
                        <Text
                            style={{ ...styles.erningText }}>
                            {item.month}
                        </Text>
                    </View>
                    <View
                        style={{
                            // height: '100%',
                            height: moderateScale(35),
                            width: moderateScale(2),
                            backgroundColor: colour.secondaryThemeColor,
                            marginRight: moderateScale(35),
                        }}
                    />
                    <View
                        style={{
                            width: '20%',
                        }}>
                        <Text
                            style={{ ...styles.erningText }}>
                            {item.year}
                        </Text>
                    </View>
                </View>
            </View>
            {lastObject &&
                <View

                    style={{
                        height: moderateScale(1),
                        width: '100%',
                        backgroundColor: colour.secondaryThemeColor,
                        // marginTop: moderateScale(8),
                        // marginBottom: moderateScale(8)
                    }}
                />}

        </>
    )
}

export default EarningTable

const styles = StyleSheet.create({
    erningText:{
        fontFamily:FONTS.OpenSans.regular,
        fontSize:moderateScale(12)
    }
})