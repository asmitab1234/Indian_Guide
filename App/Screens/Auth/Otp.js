import { Alert, Dimensions, Image, ImageBackground, Pressable, ScrollView, StyleSheet, View, } from 'react-native'
import React, { useRef, useState } from 'react'
import { AppButton, AppTextInput, Card, Container, RadioButton, StatusBar, Text, useTheme } from 'react-native-basic-elements'
import { moderateScale } from '../../Constants/PixelRatio'
import { FONTS } from '../../Constants/Fonts'
const { height, width } = Dimensions.get('window')
import RNPhoneInput from "react-native-phone-number-input";
import NavigationService from '../../Services/Navigation'
import OTPInputView from '@twotalltotems/react-native-otp-input'
import { useDispatch, useSelector } from 'react-redux'
import { setLightMode } from '../../Redux/reducer/User'

const Otp = () => {
    const { loginStatus, light } = useSelector(state => state.User);
    const dispatch = useDispatch()
    const colors = useTheme()
    const [value, setValue] = useState("");
    const phoneInput = useRef(null);
    const [selected, setSelected] = useState(false);


    function submitData() {

        NavigationService.navigate("AppStack")
        setTimeout(() => {
            dispatch(setLightMode(!light))

        }, 100);
    }
    return (
        <Container>
            <StatusBar translucent={true} barStyle='dark-content' backgroundColor={'transparent'} />
            <ImageBackground
                source={require('../../Assets/main.jpeg')}
                style={styles.imageStyl}
                // imageStyle={{opacity:0.70}}
                blurRadius={5}
            >
                <ScrollView showsVerticalScrollIndicator={false}>
                    <Text
                        style={{
                            ...styles.textStyl,
                        }}>
                        Your Tour Expert
                    </Text>

                    <View style={{
                        height: height / 9
                    }} />

                    <Card
                        style={{
                            ...styles.loginView
                        }}>
                        <Text
                            style={{
                                ...styles.loginText,
                                color: colors.secondaryFontColor
                            }}>
                            Verify your Number
                        </Text>

                        <Text
                            style={{
                                ...styles.subText,
                                color: colors.secondaryFontColor
                            }}>
                            we send you a 4 - digit code to verify your number
                        </Text>

                        <View
                            style={{
                                alignSelf: 'center',
                                marginHorizontal: moderateScale(15),
                                width: '90%',
                                height: moderateScale(90),
                                // backgroundColor: 'pink'
                            }}
                        >
                            <OTPInputView
                                style={{
                                    alignSelf: 'center',

                                }}
                                pinCount={4}
                                // code={this.state.code} //You can supply this prop or not. The component will be used as a controlled / uncontrolled component respectively.
                                // onCodeChanged = {code => { this.setState({code})}}
                                autoFocusOnLoad
                                codeInputFieldStyle={styles.underlineStyleBase}
                                codeInputHighlightStyle={{ borderColor: colors.buttonColor }}
                                onCodeFilled={(code => {
                                    console.log(`Code is ${code}, you are good to go!`)
                                })}
                            />
                        </View>

                        <AppButton
                            title='Verify'
                            style={styles.buttonStyl}
                            textStyle={{
                                ...styles.titleStyl,
                            }}
                            onPress={() => submitData()}
                        />
                        <Text
                            style={{
                                ...styles.otpText,
                                color: colors.primaryThemeColor
                            }}>
                            Resend OTP
                        </Text>
                    </Card>
                </ScrollView>
            </ImageBackground>
        </Container>
    )
}

export default Otp

const styles = StyleSheet.create({
    imageStyl: {
        height: '100%',
        width: width,
        // alignItems: 'center',
        // justifyContent: 'center',
        paddingHorizontal: moderateScale(15)
    },
    textStyl: {
        fontFamily: FONTS.Philosopher.bold,
        fontSize: moderateScale(36),
        textAlign: 'center',
        marginTop: moderateScale(80),
        color: '#FFFFFF'
    },
    loginView: {
        padding: moderateScale(20),
        marginTop: moderateScale(35),
        borderRadius: moderateScale(19),
    },
    loginText: {
        fontFamily: FONTS.OpenSans.bold,
        fontSize: moderateScale(16),
        textAlign: 'center'
    },
    buttonStyl: {
        marginHorizontal: 0,
        marginTop: moderateScale(15),
        height: moderateScale(48),
    },
    titleStyl: {
        fontFamily: FONTS.OpenSans.bold,
        fontSize: moderateScale(16)
    },
    subText: {
        fontFamily: FONTS.OpenSans.regular,
        fontSize: moderateScale(14),
        textAlign: 'center',
        marginTop: moderateScale(15)
    },
    borderStyleBase: {
        width: 30,
        height: 45
    },

    borderStyleHighLighted: {
        borderColor: "#03DAC6",
    },

    underlineStyleBase: {
        width: moderateScale(50),
        height: moderateScale(50),
        backgroundColor: '#D9D9D9',
        borderRadius: moderateScale(8),
        color: '#000000',
        fontFamily: FONTS.OpenSans.bold,
        fontSize: moderateScale(14)
    },


    otpText: {
        fontFamily: FONTS.OpenSans.semibold,
        fontSize: moderateScale(14),
        color: 'rgba(0, 0, 0, 0.5)',
        marginBottom: moderateScale(15),
        marginTop: moderateScale(5)
    }
})