import { Pressable, ScrollView, StyleSheet, View } from 'react-native'
import React, { useState } from 'react'
import { Icon, Text, useTheme } from 'react-native-basic-elements'
import { moderateScale } from '../../Constants/PixelRatio'
import { FONTS } from '../../Constants/Fonts'
import { useSelector } from 'react-redux'

const Availabilitycalendar = ({ item, index, Index, setIndex }) => {
    const { loginStatus, light } = useSelector(state => state.User);
    const colors = useTheme()
    return (
        <View
            horizontal
            showsHorizontalScrollIndicator={false} style={{}}>
            <Pressable
                onPress={() => setIndex(index)}
                style={{
                    ...styles.dateTextView,
                    backgroundColor: index == Index ? colors.availabilityDateColor : 'transparent',
                    // elevation: index == Index ? 2 : null,
                    borderWidth: index == Index ?1 : null,
                    borderColor:index == Index ? colors.buttonColor : 'transparent',
                }}>
                <Text
                    style={{
                        ...styles.textStyl,
                        color: index == Index ? colors.buttonColor : colors.primaryFontColor
                    }}>
                    {item.day}
                </Text>
                <Text
                    style={{
                        ...styles.textStyl,
                        color: index == Index ? colors.buttonColor : colors.primaryFontColor
                    }}>
                    {item.date}
                </Text>
            </Pressable>

        </View>
    )
}

export default Availabilitycalendar

const styles = StyleSheet.create({
    dateTextView: {
        alignItems: 'center',
        justifyContent:'center',
        padding: moderateScale(5),
        borderRadius: moderateScale(10),
        height:moderateScale(49),
        width:moderateScale(49),
        borderWidth:1
    },
    textStyl: {
        fontFamily: FONTS.OpenSans.regular,
        fontSize: moderateScale(11),
        // color:'red'
    }
})