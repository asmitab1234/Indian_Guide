import { Dimensions, Image, ImageBackground, Pressable, ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { AppTextInput, Container, Icon, Picker, StatusBar, Text, useTheme } from 'react-native-basic-elements'
import { moderateScale } from '../../Constants/PixelRatio'
import { FONTS } from '../../Constants/Fonts'
import NavigationService from '../../Services/Navigation'
import MonTable from '../../Components/Earning/MonTable'
const { height, width } = Dimensions.get('window')
import { LineChart } from "react-native-gifted-charts";
import DatePicker from 'react-native-date-picker'
import Modal from "react-native-modal";
import CalendarModal from '../../Components/Earning/CalendarModal'
import PaymentTable from '../../Components/Earning/PaymentTable'

const AgentEarning = () => {
    const colors = useTheme()
    const [dropdownValue, setDropdownValue] = useState('');
    const [dropdownValue1, setDropdownValue1] = useState('');
    const [date, setDate] = useState(new Date())
    const [open, setOpen] = useState(false)
    const monthArr = [
        {
            month: 'Jan 23',
            earn: '5000',
            bookings: '10'
        },
        {
            month: 'Jan 23',
            earn: '5000',
            bookings: '10'
        },
        {
            month: 'Jan 23',
            earn: '5000',
            bookings: '10'
        },
        {
            month: 'Jan 23',
            earn: '5000',
            bookings: '10'
        },
        {
            month: 'Jan 23',
            earn: '5000',
            bookings: '10'
        },
    ]

    const data = [
        { value: 15, label: 'Jan' },
        { value: 26, label: 'Feb' },
        { value: 30, label: 'Mar' },
        { value: 40, label: 'Apr' },
        { value: 20, label: 'May' },
        { value: 40, label: 'Jun' },
        { value: 40, label: 'Jul' }
    ];
    const [isModalVisible, setModalVisible] = useState(false);
    const toggleModal = () => {
        setModalVisible(!isModalVisible);
    }

    const paymentDetailsArr = [
        {
            date: '01-01-2024',
            amount: '1,000',
            method: 'Bank Transfer',
            status: 'Completed'
        },
        {
            date: '01-01-2024',
            amount: '1,000',
            method: 'Bank Transfer',
            status: 'Completed'
        },
        {
            date: '01-01-2024',
            amount: '1,000',
            method: 'Bank Transfer',
            status: 'Pending'
        },
        {
            date: '01-01-2024',
            amount: '1,000',
            method: 'Bank Transfer',
            status: 'Completed'
        },
    ]
    return (
        <Container>
            <StatusBar backgroundColor={'transparent'} translucent={true} barStyle='dark-content' />
            <ScrollView
                showsVerticalScrollIndicator={false}>

                <View
                    //   source={require('../../Assets/Home/HomeImg.png')}
                    style={styles.homeImg}
                // resizeMode='cover'
                >
                    <Pressable
                        style={styles.backView}
                        onPress={() => NavigationService.back()}>
                        <Icon
                            name='chevron-small-left'
                            type='Entypo'
                            style={{
                                marginRight: moderateScale(8),
                                color: colors.primaryFontColor
                            }}
                            size={30}
                        />
                        <Text
                            style={{ ...styles.backText, color: colors.primaryFontColor }}>
                            Back
                        </Text>
                    </Pressable>


                    <Text
                        style={{ ...styles.bookingText, color: colors.primaryFontColor }}>
                        Total Earnings
                    </Text>

                    <Text
                        style={{ ...styles.nameTextStyl, color: colors.primaryFontColor }}>
                        ₹ 50,000
                    </Text>

                </View>

                <View
                    style={{
                        marginHorizontal: moderateScale(15)
                    }}>
                    {/* <View
                        style={styles.bookingView}> */}
                    <View
                        style={{
                            ...styles.bookingBox,
                            backgroundColor: colors.boxColor,
                            // marginBottom: moderateScale(13)
                        }}>
                        <View
                            style={{
                                flexDirection: 'row',
                                alignItems: 'center',
                            }}>
                            <Image
                                source={require('../../Assets/Agent/Earning/ticket.png')}
                                style={styles.earningImage}
                                tintColor={colors.primaryFontColor}
                            />
                            <Text
                                style={styles.tottalbookingText}>
                                Total Bookings
                            </Text>
                        </View>
                        <Text
                            style={styles.bookingNoText}>
                            789
                        </Text>
                    </View>

                    {/* </View> */}



                    <Text
                        style={styles.graphText}>
                        Earnings Overview
                    </Text>
                    <TouchableOpacity
                        onPress={toggleModal}>
                        <View
                            pointerEvents='none' >
                            <AppTextInput

                                placeholder='20 - 27 Jan, 2024'
                                inputContainerStyle={styles.inputContainerSty}
                                mainContainerStyle={{
                                    width: '50%'
                                }}
                                inputStyle={styles.fontstyl}
                                leftIcon={{
                                    name: 'calendar',
                                    type: 'AntDesign'
                                }}
                            />
                        </View>
                    </TouchableOpacity>

                    <View
                        style={{
                            ...styles.viewBox,
                            backgroundColor: colors.boxColor,
                        }}>
                        <View style={{ width: '30%' }}>
                            <Text
                                style={{ ...styles.headingText, color: colors.primaryFontColor }}>
                                Month
                            </Text>
                        </View>
                        <View style={{ width: '35%' }}>
                            <Text
                                style={{ ...styles.headingText, color: colors.primaryFontColor }}>
                                Earnings
                            </Text>
                        </View>
                        <View style={{ width: '19%' }}>
                            <Text
                                style={{ ...styles.headingText, color: colors.primaryFontColor }}>
                                Bookings
                            </Text>
                        </View>
                    </View>
                    <View style={{ height: moderateScale(10) }} />
                    {monthArr.map((item, index) => (
                        <MonTable
                            key={index}
                            item={item}
                        />
                    ))}

                    <View
                        style={{
                            ...styles.viewBox2,
                            marginTop: moderateScale(10),
                            backgroundColor: colors.boxColor
                        }}>
                        <View style={{ width: '30%' }}>
                            <Text
                                style={{ ...styles.headingText, color: colors.primaryFontColor }}>
                                Total
                            </Text>
                        </View>
                        <View style={{ width: '38%' }}>
                            <Text
                                style={{ ...styles.monthText, color: colors.primaryFontColor }}>
                                10,000
                            </Text>
                        </View>
                        <View style={{ width: '13%' }}>
                            <Text
                                style={{ ...styles.monthText, color: colors.primaryFontColor }}>
                                90
                            </Text>
                        </View>
                    </View>

                    <Text
                        style={styles.graphText}>
                        Payment Details
                    </Text>

                    <View
                        style={{
                            ...styles.paymentBox,
                            backgroundColor: colors.boxColor
                        }}>
                        <View
                            style={{
                                width: '50%'
                            }}>
                            <Text
                                style={styles.headingTextPayment}>
                                Payment Method
                            </Text>
                        </View>
                        <View
                            style={{
                                width: moderateScale(2),
                                height: '100%',
                                backgroundColor: colors.white,
                                marginRight: moderateScale(15)
                            }} />
                        <View
                            style={{
                                width: '50%'
                            }}>
                            <Text
                                style={styles.headingTextPayment}>
                                Payment Frequency
                            </Text>
                        </View>
                    </View>
                    <View
                        style={{
                            ...styles.paymentBox_1,
                            backgroundColor: colors.boxColor
                        }}>
                        <View style={{
                            width: '50%'
                        }}>
                            <Text
                                style={styles.methodText}>
                                Payment Frequency
                            </Text>
                        </View>
                        <View
                            style={{
                                width: moderateScale(2),
                                height: '100%',
                                backgroundColor: colors.white,
                                marginRight: moderateScale(15)
                            }}
                        />
                        <View style={{
                            width: '50%'
                        }}>
                            <Text
                                style={styles.methodText}>
                                Monthly
                            </Text>
                        </View>
                    </View>

                    <Text
                        style={{
                            ...styles.graphText,
                            marginBottom: moderateScale(10)
                        }}>
                        Payment Details
                    </Text>

                    <View
                        style={{
                            ...styles.viewBox,
                            backgroundColor: colors.boxColor,
                            marginBottom: moderateScale(5)
                        }}>
                        <View style={{ width: '24%' }}>
                            <Text
                                style={{ ...styles.headingText, color: colors.primaryFontColor }}>
                                Date
                            </Text>
                        </View>
                        <View style={{ width: '30%' }}>
                            <Text
                                style={{ ...styles.headingText, color: colors.primaryFontColor }}>
                                Amount
                            </Text>
                        </View>
                        <View style={{ width: '32%' }}>
                            <Text
                                style={{ ...styles.headingText, color: colors.primaryFontColor }}>
                                Payment Method
                            </Text>
                        </View>
                        <View style={{ width: '25%' }}>
                            <Text
                                style={{ ...styles.headingText, color: colors.primaryFontColor }}>
                                Status
                            </Text>
                        </View>
                    </View>


                    {paymentDetailsArr.map((item, index) => (
                        <PaymentTable
                            key={index}
                            item={item}
                        />
                    ))}

                    <View
                        style={{
                            ...styles.bookingBox,
                            backgroundColor: colors.boxColor,
                            marginTop:moderateScale(15)
                        }}>
                        <View
                            style={{
                                flexDirection: 'row',
                                alignItems: 'center',
                            }}>
                            <Image
                                source={require('../../Assets/Agent/Earning/earn.png')}
                                style={styles.earningImage}
                                tintColor={colors.primaryFontColor}
                            />
                            <Text
                                style={styles.tottalbookingText}>
                                Referral earnings
                            </Text>
                        </View>
                        <Text
                            style={styles.bookingNoText}>
                            INR 5,000
                        </Text>
                    </View>
                    <View
                        style={{
                            paddingBottom: moderateScale(20)
                        }}
                    />

                    {/* <Text
            style={styles.graphText}>
            Earnings Graph
          </Text> */}

                    {/* <LineChart
            areaChart
            data={data}
            startFillColor="rgba(194, 59, 34, 0.65)"
            startOpacity={0.8}
            endFillColor="rgba(74, 64, 62, 0.35)"
            endOpacity={0.3}
            curved
            width={width / 1.4}
            showVerticalLines
            verticalLinesColor={colors.tabBarColor}
            hideDataPoints
            rulesType='solid'
            rulesColor={colors.tabBarColor}
            yAxisColor="rgba(240, 240, 240, 1)"
            xAxisColor="rgba(240, 240, 240, 1)"
            initialSpacing={0}
          /> */}

                    {/* <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginTop: moderateScale(10),
              justifyContent: 'space-between'
            }}>
            <Text
              style={{
                fontFamily: FONTS.OpenSans.bold,
                fontSize: moderateScale(16)
              }}>
              Income Report
            </Text>
            <Picker
              options={[
                {
                  label: 'Item 1',
                  value: 'item1'
                },
                {
                  label: 'Item 2',
                  value: 'item2'
                },
              ]}
              placeholder="20 - 27 Jan, 2024"
              textStyle={{
                fontSize: 15
              }}
              selectedValue={dropdownValue1}
              onValueChange={(val) => setDropdownValue1(val)}
              containerStyle={{
                ...styles.picker,
                height: moderateScale(40)
              }}
            />
          </View>

          <View
            style={styles.textView}>
            <Text
              style={{
                ...styles.clickText,
                color: '#0066FE',
                // textDecorationLine: 'underline'
              }}>
              Click Here{' '}
            </Text>
            <Text
              style={styles.clickText}>
              to download
            </Text>
          </View> */}

                    {/* <Text
            style={{
              ...styles.clickText,
              marginTop: moderateScale(15)
            }}>
            Highest earning in a month
          </Text>

          <View
            style={styles.priceBox}>
            <Text
              style={{
                fontFamily: FONTS.OpenSans.bold,
                fontSize: moderateScale(12)
              }}>
              Jan 2023 :{' '}
              <Text
                style={{
                  fontFamily: FONTS.OpenSans.regular,
                  fontSize: moderateScale(12)
                }}>
                INR 20,000
              </Text>
            </Text>
          </View> */}

                </View>
            </ScrollView >
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
            <Modal isVisible={isModalVisible}
                animationIn={'fadeIn'}
                animationOut={'fadeOut'}
                backdropOpacity={0.3}
                style={{ flex: 1 }}
                onBackdropPress={() => setModalVisible(false)}>
                <CalendarModal
                    setModalVisible={setModalVisible} />
            </Modal>
        </Container >
    )
}

export default AgentEarning

const styles = StyleSheet.create({
    homeImg: {
        height: height / 6,
        width: width,
        borderBottomLeftRadius: moderateScale(20),
        borderBottomRightRadius: moderateScale(20),
        overflow: "hidden"
    },
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
        fontSize: moderateScale(20),
        top: moderateScale(50),
        textAlign: 'center'
    },
    nameTextStyl: {
        fontFamily: FONTS.OpenSans.bold,
        fontSize: moderateScale(20),
        top: moderateScale(50),
        textAlign: 'center'
    },
    picker: {
        width: '50%',
        height: moderateScale(45),
        justifyContent: 'center',
        // marginTop: moderateScale(15),
        // marginBottom: moderateScale(15)
    },
    viewBox: {
        height: moderateScale(42),
        width: '100%',
        // borderRadius: moderateScale(10),
        borderTopLeftRadius: moderateScale(10),
        borderTopRightRadius: moderateScale(10),
        backgroundColor: '#101010',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: moderateScale(15),
    },
    viewBox2: {
        height: moderateScale(42),
        width: '100%',
        // borderRadius: moderateScale(10),
        borderBottomLeftRadius: moderateScale(10),
        borderBottomRightRadius: moderateScale(10),
        backgroundColor: '#101010',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: moderateScale(15),
    },
    paymentBox: {
        width: '100%',
        // borderRadius: moderateScale(10),
        borderTopLeftRadius: moderateScale(10),
        borderTopRightRadius: moderateScale(10),
        backgroundColor: '#101010',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: moderateScale(15),
        marginTop: moderateScale(8)
    },
    headingText: {
        fontFamily: FONTS.OpenSans.semibold,
        fontSize: moderateScale(12)
    },
    monthText: {
        fontFamily: FONTS.OpenSans.regular,
        fontSize: moderateScale(12)
    },
    graphText: {
        fontFamily: FONTS.OpenSans.bold,
        fontSize: moderateScale(18),
        marginTop: moderateScale(10),
    },
    textView: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: moderateScale(25)
    },
    clickText: {
        fontFamily: FONTS.OpenSans.medium,
        fontSize: moderateScale(13),
    },
    priceBox: {
        padding: moderateScale(8),
        borderRadius: moderateScale(8),
        borderWidth: moderateScale(2),
        borderColor: 'rgba(255, 255, 255, 0.46)',
        marginBottom: moderateScale(15),
        marginTop: moderateScale(8),
        width: '50%'
    },
    inputContainerSty: {
        height: moderateScale(45),
        borderRadius: moderateScale(6),
        marginBottom: moderateScale(15),
        marginTop: moderateScale(15)
    },
    bookingView: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    bookingBox: {
        height: moderateScale(88),
        // width: moderateScale(155),
        borderRadius: moderateScale(14),
        alignItems: 'center',
        justifyContent: 'center',
    },
    earningImage: {
        height: moderateScale(17),
        width: moderateScale(17)
    },
    bookingNoText: {
        fontFamily: FONTS.OpenSans.bold,
        fontSize: moderateScale(20),
        marginTop: moderateScale(10)
    },
    tottalbookingText: {
        fontFamily: FONTS.OpenSans.semibold,
        fontSize: moderateScale(14),
        marginLeft: moderateScale(10)
    },
    // paymetBoxView: {
    //     flexDirection: 'row',
    //     alignItems: 'center',
    //     justifyContent: 'space-between',
    //     width: '100%',
    //     height: moderateScale(55),
    // },
    paymentBox: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        height: moderateScale(55),
        paddingHorizontal: moderateScale(15),
        borderTopRightRadius: moderateScale(10),
        borderTopLeftRadius: moderateScale(10),
        marginTop: moderateScale(15)
    },
    paymentBox_1: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        height: moderateScale(55),
        paddingHorizontal: moderateScale(15),
        borderBottomRightRadius: moderateScale(10),
        borderBottomLeftRadius: moderateScale(10),
        marginTop: moderateScale(3)
    },
    headingTextPayment: {
        fontFamily: FONTS.OpenSans.bold,
        fontSize: moderateScale(14)
    },
    methodText: {
        fontFamily: FONTS.OpenSans.regular,
        fontSize: moderateScale(14)
    }
})