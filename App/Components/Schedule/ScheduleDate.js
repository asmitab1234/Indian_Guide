import { Pressable, ScrollView, StyleSheet, View } from 'react-native'
import React, { useState } from 'react'
import { Text, useTheme } from 'react-native-basic-elements'
import { moderateScale } from '../../Constants/PixelRatio'
import { FONTS } from '../../Constants/Fonts'
import { useSelector } from 'react-redux'

const ScheduleDate = ({ item, index, Index, setIndex }) => {
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
                    backgroundColor: index == Index ? colors.primaryFontColor : 'transparent',
                    elevation: index == Index ? 2 : null,
                    borderWidth: index == Index ? 0.5 : null,
                   
                }}>
                <Text
                    style={{
                        ...styles.textStyl,
                        color: index == Index ? colors.secondaryFontColor : colors.primaryFontColor
                    }}>
                    {item.day}
                </Text>
                <Text
                    style={{
                        ...styles.textStyl,
                        color: index == Index ? colors.secondaryFontColor : colors.primaryFontColor
                    }}>
                    {item.date}
                </Text>
            </Pressable>

        </View>
    )
}

export default ScheduleDate

const styles = StyleSheet.create({
    dateTextView: {
        alignItems: 'center',
        // justifyContent:'center',
        marginHorizontal: moderateScale(8),
        padding: moderateScale(3),
        borderRadius: moderateScale(10),
        borderWidth:1
    },
    textStyl: {
        fontFamily: FONTS.OpenSans.regular,
        fontSize: moderateScale(12),
        // color:'red'
    }
})