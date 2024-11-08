import { Dimensions, Image, ImageBackground, Pressable, ScrollView, StyleSheet, View } from 'react-native'
import React from 'react'
import { Container, Icon, StatusBar, Text, useTheme } from 'react-native-basic-elements'
import BackHeader from '../../Components/Header/BackHeader'
import NavigationService from '../../Services/Navigation'
import { FONTS } from '../../Constants/Fonts'
import { moderateScale } from '../../Constants/PixelRatio'
import index from '../Home'
import ExpertComponent from '../../Components/GuideExpert/ExpertComponent'
const { height, width } = Dimensions.get('window')

const GuideExpert = () => {
    const colors = useTheme()
    const expertArr = [
        {
            heading: 'Pack your bags and leave your worries at home!',
            desc: "Welcome to YourTourExpert, where adventure meets laughter! We're not your typical travel app - we're all about making your journey as entertaining as it is unforgettable.",
            img: require('../../Assets/Profile/expertArrImg.png')
        },
        {
            heading: 'Ready, Jet, Laugh! Your Ticket to Hilarious Adventures!',
            desc: "Gone are the days of tedious itinerary planning and endless research. With yourTourExpert, you can discover new destinations, browse top attractions, and accommodations with ease.",
            img: require('../../Assets/Profile/expertArrImg.png')
        },
        {
            heading: 'Where every wrong turn leads to a great story!"',
            desc: "Whether you're craving a solo adventure or planning a group getaway, our app has everything you need to make your travel dreams a reality.",
            img: require('../../Assets/Profile/expertArrImg.png')
        },
    ]
    return (
        <Container>
            <StatusBar backgroundColor={'transparent'} translucent={true} barStyle='dark-content' />


            <ScrollView>

                <ImageBackground
                    source={require('../../Assets/Profile/expertscreenImg.png')}
                    style={styles.homeImg}
                    resizeMode='cover'>
                    <Pressable
                        style={styles.backView}
                        onPress={() => NavigationService.back()}>
                        <Icon
                            name='chevron-small-left'
                            type='Entypo'
                            style={{
                                marginRight: moderateScale(8),
                                color: colors.white
                            }}
                            size={30}
                        />
                        <Text
                            style={{ ...styles.backText, color: colors.white }}>
                            Back
                        </Text>
                    </Pressable>
                    <Image
                        source={require('../../Assets/Profile/expert.png')}
                        style={styles.expertTextImage}
                    />
                    <View style={{
                        width: "100%",
                        position: "absolute",
                        bottom: 0,
                        alignSelf: "center",
                        height: 30,
                        backgroundColor: colors.secondaryFontColor,
                        borderTopLeftRadius: 20,
                        borderTopRightRadius: 20
                    }}>

                    </View>
                </ImageBackground>




                <View
                    style={{
                        // position: 'absolute',
                        // height: height / 1,
                        // zIndex: 1,
                        // overflow: 'hidden',
                        // top: moderateScale(100)
                    }}>
                    {expertArr.map((item, index) => (
                        <ExpertComponent
                            key={index}
                            item={item}
                        />
                    ))}
                </View>
                <ImageBackground
                    source={require('../../Assets/Profile/expertscreenImg.png')}
                    style={styles.homeImg}
                    resizeMode='cover'>


                    <View style={{
                        width: "100%",
                        position: "absolute",
                        top: 0,
                        alignSelf: "center",
                        height: 100,
                        backgroundColor: colors.secondaryFontColor,
                        borderBottomLeftRadius: 20,
                        borderBottomRightRadius: 20
                    }}>
                        <View
                            style={{
                                flexDirection: 'row',
                                alignItems: 'center',
                                marginTop: moderateScale(20),
                                justifyContent: 'center'
                            }}>
                            <Image
                                source={require('../../Assets/Profile/logowhatsapp.png')}
                                style={styles.logoStyl}
                                resizeMode='contain'
                            />
                            <Image
                                source={require('../../Assets/Profile/facebook.png')}
                                style={{
                                    ...styles.logoStyl,
                                    marginHorizontal: moderateScale(15)
                                }}
                                resizeMode='contain'
                            />
                            <Image
                                source={require('../../Assets/Profile/instagram.png')}
                                style={styles.logoStyl}
                                resizeMode='contain'
                            />
                        </View>
                    </View>
                </ImageBackground>

            </ScrollView>
        </Container>
    )
}

export default GuideExpert

const styles = StyleSheet.create({
    homeImg: {
        height: height / 2.6,
        width: width,
        borderBottomLeftRadius: moderateScale(20),
        borderBottomRightRadius: moderateScale(20),
        // overflow: "hidden"
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
    expertTextImage: {
        height: moderateScale(90),
        width: moderateScale(160),
        position: 'absolute',
        top: moderateScale(100),
        left: moderateScale(100),
    },
    logoStyl: {
        height: moderateScale(28),
        width: moderateScale(28),

    }
})