import { StyleSheet, View } from 'react-native'
import React, { useState } from 'react'
import { moderateScale } from '../../Constants/PixelRatio'
import { Icon, Text, useTheme } from 'react-native-basic-elements'
import DateRangePicker from 'rn-select-date-range'
import moment from 'moment'
import { FONTS } from '../../Constants/Fonts'

const CalendarModal = ({ setModalVisible }) => {
    const colors = useTheme()
    const [selectedRange, setRange] = useState({});

    return (
        <View
            style={{
                ...styles.modalStyl,
                backgroundColor: "#fff"
            }}>
            <View
                style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between'
                }}>
                <Text
                    style={styles.calendarText}>
                    Calendar
                </Text>
                <Icon
                    name='close'
                    type='AntDesign'
                    color={'#D30808'}
                    size={27}
                    onPress={() => setModalVisible(false)}
                />
            </View>
            <View style={{
                marginTop: moderateScale(20)
            }}>
                <DateRangePicker
                    onSelectDateRange={(range) => {
                        setRange(range);
                    }}
                    blockSingleDateSelection={true}
                    responseFormat="YYYY-MM-DD"
                    maxDate={moment()}
                    minDate={moment().subtract(100, "days")}
                    selectedDateContainerStyle={{
                        ...styles.selectedDateContainerStyle,
                        borderRadius: moderateScale(20),
                    }}
                    selectedDateStyle={styles.selectedDateStyle}
                />
            </View>
        </View>
    )
}

export default CalendarModal

const styles = StyleSheet.create({
    modalStyl: {
        borderRadius: moderateScale(10),
        padding: moderateScale(20)
    },
    calendarText: {
        fontFamily: FONTS.OpenSans.bold,
        fontSize: moderateScale(20),
        
    },
    selectedDateContainerStyle: {
        height: moderateScale(30),
        width: moderateScale(30),
        alignItems: "center",
        justifyContent: "center",
        backgroundColor:"red",
        
      },
      selectedDateStyle: {
        fontWeight: "bold",
        
      },
})