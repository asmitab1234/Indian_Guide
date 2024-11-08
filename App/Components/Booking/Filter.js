import { Dimensions, Image, StyleSheet, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { AppButton, AppTextInput, Icon, Picker, Text, useTheme } from 'react-native-basic-elements'
import { moderateScale } from '../../Constants/PixelRatio'
import { FONTS } from '../../Constants/Fonts'
import NavigationService from '../../Services/Navigation'
import DatePicker from 'react-native-date-picker'
const { height, width } = Dimensions.get('window')

const Filter = ({ setModalVisible }) => {
    const colors = useTheme()
    const [dropdownValue, setDropdownValue] = useState('');
    const [dropdownValue1, setDropdownValue1] = useState('');
    const [date, setDate] = useState(new Date())
    const [open, setOpen] = useState(false)
    const [date1, setDate1] = useState(new Date())
    const [open1, setOpen1] = useState(false)
    return (
        <>
            <View
                style={{
                    ...styles.modalStyl,
                    backgroundColor: colors.pageBackgroundColor
                }}>
                <View
                    style={styles.filterView}>
                    <Text
                        style={styles.filterText}>
                        Filters
                    </Text>
                    <Icon
                        name='close'
                        type='AntDesign'
                        onPress={() => setModalVisible(false)}
                        style={{
                            alignSelf: 'flex-end'
                        }}
                    />
                </View>

                <Text
                    style={styles.locationText}>
                    location
                </Text>
                <View
                    style={{
                        ...styles.searchDestinatonView,
                        borderColor: colors.primaryFontColor
                    }}>
                    <AppTextInput
                        placeholder='Destination/Places'
                        inputStyle={styles.fontStyl}
                        inputContainerStyle={{
                            ...styles.inputContainerStyle,
                            borderColor: colors.buttonColor
                        }}
                        leftIcon={{
                            name: 'search1',
                            type: 'AntDesign'
                        }}
                    />
                    <Text
                        style={{
                            fontFamily: FONTS.OpenSans.regular,
                            fontSize: moderateScale(14),
                            marginLeft: moderateScale(10),
                            marginVertical: moderateScale(10)
                        }}>
                        Sikandra Fort, Agra
                    </Text>
                    <View
                        style={{
                            height: moderateScale(1),
                            width: '100%',
                            backgroundColor: colors.primaryFontColor,
                            // marginVertical: moderateScale(10)
                        }} />
                    <Text
                        style={{
                            fontFamily: FONTS.OpenSans.regular,
                            fontSize: moderateScale(14),
                            marginLeft: moderateScale(10),
                            marginVertical: moderateScale(10)
                        }}>
                        Taj Nature walk, Agra
                    </Text>
                </View>

                <Text
                    style={styles.locationText}>
                    Date
                </Text>

                <View
                    style={styles.pickerView}>
                    <TouchableOpacity
                        onPress={() => setOpen(true)}
                        style={{
                            width: '45%'
                        }}>
                        <View
                            pointerEvents='none' >
                            <AppTextInput

                                placeholder='20 Jan, 2024'
                                inputContainerStyle={styles.inputContainerSty}

                                inputStyle={styles.fontstyl}
                                leftIcon={{
                                    name: 'calendar',
                                    type: 'AntDesign'
                                }}
                            />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => setOpen1(true)}
                        style={{
                            width: '45%'
                        }}>
                        <View
                            pointerEvents='none' >
                            <AppTextInput

                                placeholder='27 Jan, 2024'
                                inputContainerStyle={styles.inputContainerSty}
                                // mainContainerStyle={{
                                //     width: '50%'
                                // }}
                                inputStyle={styles.fontstyl}
                                leftIcon={{
                                    name: 'calendar',
                                    type: 'AntDesign'
                                }}
                            />
                        </View>
                    </TouchableOpacity>
                </View>

                <Text
                    style={styles.locationText}>
                    Languages
                </Text>
                <View
                    style={{
                        flexDirection: 'row',
                        alignItems: 'center'
                    }}>
                    <TouchableOpacity
                        style={{
                            ...styles.languageBox,
                            borderColor: colors.primaryFontColor
                        }}>
                        <Text
                            style={styles.fontStyl}>
                            English
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={{
                            ...styles.languageBox,
                            borderColor: colors.primaryFontColor,
                            marginLeft: moderateScale(10)
                        }}>
                        <Text
                            style={styles.fontStyl}>
                            Hindi
                        </Text>
                    </TouchableOpacity>
                </View>

            </View>
            <View
                style={{
                    ...styles.bottomView,
                    backgroundColor: colors.boxColor
                }}>
                <Text
                    style={{
                        ...styles.fontStyl,
                    }}>
                    Reset all
                </Text>
                <AppButton
                    title='Show results'
                    textStyle={{
                        ...styles.buttonText,
                        color: colors.seondaryFontColor
                    }}
                    style={styles.buttonStyl}
                />
            </View>
            <DatePicker
                modal
                open={open}
                date={date}
                onConfirm={(date) => {
                    setOpen(false)
                    setDate(date)
                }}
                onCancel={() => {
                    setOpen(false)
                }}
                mode='date'
            />
            <DatePicker
                modal
                open={open1}
                date={date1}
                onConfirm={(date) => {
                    setOpen1(false)
                    setDate1(date)
                }}
                onCancel={() => {
                    setOpen1(false)
                }}
                mode='date'
            />
        </>
    )
}

export default Filter

const styles = StyleSheet.create({
    modalStyl: {
        height: height / 1.5,
        // width: width,
        borderRadius: moderateScale(8),
        padding: moderateScale(20),
    },
    filterView: {
        flexDirection: 'row',
        alignItems: 'center',
        // justifyContent:'center'
    },
    filterText: {
        fontFamily: FONTS.OpenSans.bold,
        fontSize: moderateScale(20),
        // marginLeft: moderateScale(30),
        flex: 1,
        textAlign: 'center',
    },
    locationText: {
        fontFamily: FONTS.OpenSans.bold,
        fontSize: moderateScale(17),
        marginTop: moderateScale(25)
    },
    searchDestinatonView: {
        padding: moderateScale(10),
        borderWidth: moderateScale(1),
        borderRadius: moderateScale(10),
        marginTop: moderateScale(15)
    },
    fontStyl: {
        fontFamily: FONTS.OpenSans.medium,
        fontSize: moderateScale(14)
    },
    inputContainerStyle: {
        height: moderateScale(35),
        borderRadius: moderateScale(30)
    },
    searchStyl: {
        height: moderateScale(17),
        width: moderateScale(17),
        tintColor: 'rgba(255, 255, 255, 0.46)'
    },
    pickerView: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent:'space-between'
    },
    pickerStyl: {
        width: '48%',
        height: moderateScale(40),
        justifyContent: 'center',
    },
    languageBox: {
        padding: moderateScale(8),
        borderWidth: moderateScale(1),
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: moderateScale(8),
        marginTop: moderateScale(10),
        width: moderateScale(100)
    },
    bottomView: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#262525',
        width: '100%',
        height: moderateScale(60),
        paddingHorizontal: moderateScale(15)
    },
    buttonText: {
        fontFamily: FONTS.OpenSans.semibold,
        fontSize: moderateScale(11)
    },
    buttonStyl: {
        height: moderateScale(25),
        width: moderateScale(103),
        borderRadius: moderateScale(6),
        marginHorizontal: 0
    },
    inputContainerSty:{
        height:moderateScale(45),
        borderRadius:moderateScale(6)
    },
    fontstyl:{
        fontFamily: FONTS.OpenSans.medium,
        fontSize: moderateScale(12)
    }
})