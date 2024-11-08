import { StyleSheet, View } from 'react-native'
import React from 'react'
import { moderateScale } from '../../Constants/PixelRatio'
import { Text, useTheme } from 'react-native-basic-elements'
import { FONTS } from '../../Constants/Fonts'

const DateView = ({ item }) => {
    const colors = useTheme()
    return (
        <View
            style={styles.DateCalendar}>
            <Text
                style={styles.headingTimeText}>
                {item.headingTime}
            </Text>

            {item.type == 'blank' ?
                <View
                    style={{
                        ...styles.blankTimelabelView,
                        borderColor:colors.primaryFontColor
                        }}>
                    {/* <Text
                        style={{
                            ...styles.titleStyl,
                            color: colors.secondaryFontColor
                        }}>
                        {item.title}
                    </Text>
                    <Text
                        style={{
                            ...styles.titleStyl,
                            color: 'rgba(0, 0, 0, 0.5)'
                        }}>
                        {item.time}
                    </Text> */}
                </View>
                :
                <View
                    style={styles.timelabelView}>
                    <Text
                        style={{
                            ...styles.titleStyl,
                            color: colors.secondaryFontColor
                        }}>
                        {item.title}
                    </Text>
                    <Text
                        style={{
                            ...styles.titleStyl,
                            color: 'rgba(0, 0, 0, 0.5)'
                        }}>
                        {item.time}
                    </Text>
                </View>
            }

        </View>
    )
}

export default DateView

const styles = StyleSheet.create({
    DateCalendar: {
        flexDirection: 'row',
        // alignItems: 'center',
        marginTop: moderateScale(15)
    },
    timelabelView: {
        padding: moderateScale(8),
        backgroundColor: '#B5A9E3',
        borderRadius: moderateScale(10),
        marginLeft: moderateScale(25),
        width: '83%'
    },
    blankTimelabelView:{
        padding: moderateScale(8),
        borderRadius: moderateScale(10),
        marginLeft: moderateScale(25),
        width: '83%',
        borderWidth:moderateScale(1),
        height:moderateScale(60)
    },
    headingTimeText: {
        fontFamily: FONTS.OpenSans.regular,
        fontSize: moderateScale(14),

    },
    titleStyl: {
        fontFamily: FONTS.OpenSans.medium,
        fontSize: moderateScale(11),
        marginBottom: moderateScale(3)
    }
})