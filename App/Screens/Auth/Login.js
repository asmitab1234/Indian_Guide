import { Dimensions, Image, ImageBackground, Pressable, ScrollView, StyleSheet, Switch, ToastAndroid, View, } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import { AppButton, Card, Container, StatusBar, Text, useTheme } from 'react-native-basic-elements'
import { moderateScale } from '../../Constants/PixelRatio'
import { FONTS } from '../../Constants/Fonts'
const { height, width } = Dimensions.get('window')
import RNPhoneInput from "react-native-phone-number-input";
import NavigationService from '../../Services/Navigation'
import { useDispatch, useSelector } from 'react-redux'
import { setLightMode } from '../../Redux/reducer/User'


const Login = () => {
    const { loginStatus, light } = useSelector(state => state.User);
    const dispatch = useDispatch()
    const colors = useTheme()
    const [themChange, setThemChange] = useState(false)
    useEffect(() => {
        // dispatch(setLightMode(themChange))
    }, [themChange])

    const [value, setValue] = useState("");
    const phoneInput = useRef(null);
    const [formattedValue, setFormattedValue] = useState("");

    const lginArr = [
        {
            img: light ? require('../../Assets/apple.png') : require('../../Assets/whiteapple.png'),
            title: 'Continue with Apple'
        },
        {
            img: require('../../Assets/google.png'),
            title: 'Continue with Google'
        },
        // {
        //     img: require('../../Assets/facebook.png'),
        //     title: 'Continue with Facebook'
        // },
    ]
    return (
        <Container>
            <StatusBar translucent={true} barStyle='dark-content' backgroundColor={'transparent'} />
            <ImageBackground
                source={require('../../Assets/main.jpeg')}
                style={styles.imageStyl}
                // imageStyle={{opacity:0.70}}
                blurRadius={5}
            >
                <View
                    style={styles.flagIcon}>

                    <Switch
                        value={themChange}
                        // onValueChange={(val) => console.log(val)}
                        onValueChange={(val) => { setThemChange(val); dispatch(setLightMode(!light)) }}
                        disabled={false}
                        activeText={'On'}
                        inActiveText={'Off'}
                        circleSize={22}
                        barHeight={10}
                        circleBorderWidth={3}
                        backgroundActive={'#fff'}
                        backgroundInactive={'#000'}
                        circleActiveColor={'#fff'}
                        circleInActiveColor={'#000000'}
                        // renderInsideCircle={() => <CustomComponent />} // custom component to render inside the Switch circle (Text, Image, etc.)
                        changeValueImmediately={true} // if rendering inside circle, change state immediately or wait for animation to complete
                        innerCircleStyle={{ alignItems: "center", justifyContent: "center" }} // style for inner animated circle for what you (may) be rendering inside the circle
                        outerCircleStyle={{}} // style for outer animated circle
                        renderActiveText={false}
                        renderInActiveText={false}
                        switchLeftPx={2} // denominator for logic when sliding to TRUE position. Higher number = more space from RIGHT of the circle to END of the slider
                        switchRightPx={2} // denominator for logic when sliding to FALSE position. Higher number = more space from LEFT of the circle to BEGINNING of the slider
                        switchWidthMultiplier={2} // multiplied by the `circleSize` prop to calculate total width of the Switch
                        switchBorderRadius={30} // Sets the border Radius of the switch slider. If unset, it remains the circleSize.
                    />
                </View>
                <ScrollView
                    showsVerticalScrollIndicator={false}>
                    <Text
                        style={{
                            ...styles.textStyl,
                        }}>
                        Your Tour Expert
                    </Text>
                    <Card
                        style={{
                            ...styles.loginView
                        }}>
                        <Text
                            style={{
                                ...styles.loginText,
                                color: colors.secondaryFontColor
                            }}>
                            Login
                        </Text>
                        <View style={{
                            ...styles.viewLine,
                            backgroundColor: colors.buttonColor
                        }} />


                        <RNPhoneInput
                            ref={phoneInput}
                            defaultValue={value}
                            defaultCode="IN"
                            layout="first"
                            onChangeText={(text) => {
                                setValue(text);
                            }}
                            onChangeFormattedText={(text) => {
                                setFormattedValue(text);
                            }}
                            withDarkTheme
                            withShadow
                            autoFocus
                            containerStyle={{
                                ...styles.inputBox,
                                borderRadius: moderateScale(10),
                                height: moderateScale(45)
                            }}
                            textContainerStyle={{
                                width: '80%',
                                height: '100%',
                                borderRadius: moderateScale(10),
                                paddingVertical: 0,
                                marginHorizontal: moderateScale(2)
                            }}
                            countryPickerButtonStyle={{
                                borderRightWidth: 1,
                            }}
                            textInputProps={{
                                placeholderTextColor: '#999'
                            }}
                        />

                        <AppButton
                            title='Continue'
                            style={styles.buttonStyl}
                            textStyle={{
                                ...styles.titleStyl,
                            }}
                            onPress={() => {
                                NavigationService.navigate('Otp');
                                ToastAndroid.show('Please enter the OTP sent to 9897829066', ToastAndroid.SHORT)
                            }}
                        />

                        {/* <View
                            style={styles.orStyl}>
                            <View style={{
                                ...styles.orViewLine,
                                backgroundColor: colors.secondaryFontColor
                            }} />
                            <Text
                                style={{
                                    ...styles.orText,
                                    color: colors.secondaryFontColor
                                }}>
                                Or
                            </Text>
                            <View style={{
                                ...styles.orViewLine,
                                backgroundColor: colors.secondaryFontColor
                            }} />
                        </View> */}

                        {/* {lginArr.map((item, index) => (
                            <View
                                key={index}
                                style={styles.loginBox}>
                                <View
                                    style={styles.imgWidth}>
                                    <Image
                                        style={styles.iconStyl}
                                        source={item.img}
                                        resizeMode='contain'
                                    />
                                </View>
                                <View
                                    style={styles.textWidth}>
                                    <Text
                                        style={{
                                            ...styles.continueText,
                                            color: colors.secondaryFontColor,
                                        }}>
                                        {item.title}
                                    </Text>
                                </View>
                            </View>
                        ))} */}
                    </Card>
                    <View
                        style={styles.textView}>
                        <Text
                            style={{
                                ...styles.bottomText
                            }}>
                            Don’t have an account?
                        </Text>
                        <Pressable
                            onPress={() => NavigationService.navigate('SingUp')}>
                            <Text
                                style={{
                                    ...styles.bottomText1,
                                    color: colors.buttonColor
                                }}>
                                Signup
                            </Text>
                        </Pressable>
                    </View>
                </ScrollView>
            </ImageBackground>
        </Container>
    )
}

export default Login

const styles = StyleSheet.create({
    flagIcon: {
        flexDirection: 'row',
        alignItems: 'center',
        position: 'absolute',
        top: moderateScale(55),
        right: moderateScale(20),
        zIndex: 99
    },
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
        marginTop: moderateScale(150),
        borderRadius: moderateScale(19),
        // paddingBottom:moderateScale(50)
    },
    loginText: {
        fontFamily: FONTS.OpenSans.bold,
        fontSize: moderateScale(16),
        textAlign: 'center'
    },
    viewLine: {
        height: moderateScale(2),
        width: '15%',
        alignSelf: 'center'

    },
    inputBox: {
        // borderWidth: moderateScale(1),
        // height: moderateScale(70),
        alignSelf: 'center',
        // backgroundColor: 'transparent',
        justifyContent: 'center',
        marginTop: moderateScale(30),
        borderColor: 'rgba(109, 109, 109, 0.8)',
        borderWidth: moderateScale(1),
        borderRadius: moderateScale(8),
    },
    buttonStyl: {
        marginHorizontal: 0,
        marginTop: moderateScale(20),
        height: moderateScale(48),
    },
    titleStyl: {
        fontFamily: FONTS.OpenSans.bold,
        fontSize: moderateScale(16)
    },
    orStyl: {
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf: 'center'
    },
    orViewLine: {
        backgroundColor: 'rgba(0, 0, 0, 0.4)',
        width: '41%',
        height: moderateScale(1),
        marginVertical: moderateScale(30)
    },
    orText: {
        marginHorizontal: moderateScale(15),
        fontFamily: FONTS.OpenSans.semibold,
        color: 'rgba(0, 0, 0, 0.7)'
    },
    loginBox: {
        height: moderateScale(48),
        borderWidth: moderateScale(1),
        marginBottom: moderateScale(15),
        borderRadius: moderateScale(10),
        borderColor: 'rgba(109, 109, 109, 0.8)',
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: moderateScale(10)
    },
    imgWidth: {
        width: '20%'
    },
    iconStyl: {
        height: moderateScale(20),
        width: moderateScale(20),
        // marginRight: moderateScale(25)
    },
    textWidth: {
        width: '70%',
        paddingHorizontal: moderateScale(5),
        // alignSelf:'center'
    },
    continueText: {
        fontFamily: FONTS.OpenSans.semibold,
        fontSize: moderateScale(14),
        textAlign: 'center'
    },
    textView: {
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf: 'center',
        marginTop: moderateScale(5)
    },
    bottomText: {
        fontFamily: FONTS.OpenSans.regular,
        fontSize: moderateScale(14),
        color: '#FFFFFF'
    },
    bottomText1: {
        fontFamily: FONTS.OpenSans.semibold,
        fontSize: moderateScale(18),
        marginLeft: moderateScale(3)
    },


})