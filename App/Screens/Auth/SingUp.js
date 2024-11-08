import { Dimensions, Image, ImageBackground, Pressable, ScrollView, StyleSheet, View, } from 'react-native'
import React, { useRef, useState } from 'react'
import { AppButton, AppTextInput, Card, Container, RadioButton, StatusBar, Text, useTheme } from 'react-native-basic-elements'
import { moderateScale } from '../../Constants/PixelRatio'
import { FONTS } from '../../Constants/Fonts'
const { height, width } = Dimensions.get('window')
import RNPhoneInput from "react-native-phone-number-input";
import NavigationService from '../../Services/Navigation'
import { useDispatch } from 'react-redux'
import { setAffiliate, setLightMode, setUserType } from '../../Redux/reducer/User'


const SingUp = () => {
    const colors = useTheme()
    const [formattedValue, setFormattedValue] = useState("");
    const [value, setValue] = useState("");
    const phoneInput = useRef(null);
    const [selected, setSelected] = useState('Guide');
    const dispatch = useDispatch()

    function submitData() {
        dispatch(setUserType(selected))
        if (selected == 'Affiliate') {
            dispatch(setAffiliate(true))
        }else{
            dispatch(setAffiliate(false))
        }
        NavigationService.navigate('Login')
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
                            Join Us
                        </Text>
                        <View style={{
                            ...styles.viewLine,
                            backgroundColor: colors.buttonColor
                        }} />

                        {/* <View style={{
                        height: height /25
                    }} /> */}

                        <AppTextInput
                            placeholder='Full Name'
                            inputContainerStyle={styles.nameInputBox}
                            inputStyle={{
                                ...styles.fontStyl,
                                color: colors.secondaryFontColor
                            }}
                            mainContainerStyle={{
                                marginTop: moderateScale(35),
                                marginBottom: moderateScale(5)
                            }}
                        />

                        <AppTextInput
                            placeholder='Email Id'
                            inputContainerStyle={styles.nameInputBox}
                            inputStyle={{
                                ...styles.fontStyl,
                                color: colors.secondaryFontColor
                            }}
                            mainContainerStyle={{
                                marginBottom: moderateScale(10)
                            }}
                        />

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

                        <View
                            style={styles.radioBoxView}>
                            <Text
                                style={{
                                    ...styles.radioText,
                                    color: colors.secondaryFontColor
                                }}>
                                Register as
                            </Text>
                            <RadioButton
                                selected={selected == 'Guide'}
                                onChange={(Guide) => setSelected('Guide')}

                                size={15}
                                containerStyle={{
                                    borderWidth: moderateScale(1),
                                    marginHorizontal: moderateScale(5)
                                }}
                                activeColor={colors.buttonColor}

                            />
                            <Text
                                style={{
                                    ...styles.radioText,
                                    color: colors.secondaryFontColor,
                                    fontSize: moderateScale(11)
                                }}>
                                Guide
                            </Text>
                            <RadioButton
                                selected={selected == 'Agent'}
                                onChange={(Agent) => setSelected('Agent')}
                                size={15}
                                containerStyle={{
                                    borderWidth: moderateScale(1),
                                    marginHorizontal: moderateScale(5)
                                }}
                                activeColor={colors.buttonColor}
                            />
                            <Text
                                style={{
                                    ...styles.radioText,
                                    color: colors.secondaryFontColor,
                                    fontSize: moderateScale(11)
                                }}>
                                Agent
                            </Text>
                            <RadioButton
                                selected={selected == 'Affiliate'}
                                onChange={(Affiliate) => setSelected('Affiliate')}
                                size={15}
                                containerStyle={{
                                    borderWidth: moderateScale(1),
                                    marginHorizontal: moderateScale(5)
                                }}
                                activeColor={colors.buttonColor}

                            />
                            <Text
                                style={{
                                    ...styles.radioText,
                                    color: colors.secondaryFontColor,
                                    fontSize: moderateScale(11)
                                }}>
                                Affiliate
                            </Text>
                        </View>

                        <View style={{
                            height: height / 7
                        }} />

                        <AppButton
                            title='Sign Up'
                            style={styles.buttonStyl}
                            textStyle={{
                                ...styles.titleStyl,
                            }}
                            onPress={() => submitData()}
                        />
                    </Card>
                    <View
                        style={styles.textView}>
                        <Text
                            style={{
                                ...styles.bottomText,
                                color: colors.white
                            }}>
                            Already have an account?
                        </Text>
                        <Pressable
                            onPress={() => NavigationService.navigate('Login')}>
                            <Text
                                style={{
                                    ...styles.bottomText1,
                                    color: colors.buttonColor
                                }}>
                                Login
                            </Text>
                        </Pressable>
                    </View>
                </ScrollView>
            </ImageBackground>

        </Container>
    )
}

export default SingUp

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
        borderRadius: moderateScale(19)
    },
    loginText: {
        fontFamily: FONTS.OpenSans.bold,
        fontSize: moderateScale(16),
        textAlign: 'center'
    },
    viewLine: {
        height: moderateScale(2),
        width: '21%',
        marginTop: moderateScale(3),
        alignSelf: 'center'

    },
    inputBox: {
        // borderWidth: moderateScale(1),
        // height: moderateScale(70),
        alignSelf: 'center',
        // backgroundColor: 'transparent',
        justifyContent: 'center',
        borderColor: 'rgba(109, 109, 109, 0.8)',
        borderWidth: moderateScale(1),
        borderRadius: moderateScale(8),
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
    textView: {
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf: 'center',
        marginTop: moderateScale(5)
    },
    bottomText: {
        fontFamily: FONTS.OpenSans.regular,
        fontSize: moderateScale(14)
    },
    bottomText1: {
        fontFamily: FONTS.OpenSans.semibold,
        fontSize: moderateScale(18),
        marginLeft: moderateScale(3)
    },
    fontStyl: {
        fontFamily: FONTS.OpenSans.bold,
        fontSize: moderateScale(14),
        marginLeft: moderateScale(10)
    },
    radioBoxView: {
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf: 'center',
        marginTop: moderateScale(5),
    },
    radioText: {
        fontFamily: FONTS.OpenSans.regular,
        fontSize: moderateScale(12)
    },
    nameInputBox: {
        height: moderateScale(45)
    }

})