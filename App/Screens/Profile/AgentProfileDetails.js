import { Dimensions, Image, ImageBackground, Pressable, ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Container, Icon, StatusBar, Text, useTheme } from 'react-native-basic-elements'
import { moderateScale } from '../../Constants/PixelRatio'
import { FONTS } from '../../Constants/Fonts'
import NavigationService from '../../Services/Navigation'
import index from '../Home'
import PhotosList from '../../Components/Profile/PhotosList'
import ReviewList from '../../Components/Profile/ReviewList'
const { height, width } = Dimensions.get('window')

const AgentProfileDetails = () => {
    const colors = useTheme()
    const photoArr = [
        {
            img: require('../../Assets/Profile/photos.png')
        },
        {
            img: require('../../Assets/Profile/photos.png')
        },
        {
            img: require('../../Assets/Profile/photos.png')
        },
        {
            img: require('../../Assets/Profile/photos.png')
        },
        {
            img: require('../../Assets/Profile/photos.png')
        },
        {
            img: require('../../Assets/Profile/photos.png')
        },
    ]

    const reviewArr = [
        {
            reviewImg: require('../../Assets/Profile/reviewimg.png'),
            name: 'Suraj N',
            tour: 'Day tour to Taj Mahal & Agra fort.',
            date: 'Jan 6,2024',
            reviewDesc: 'Exceptional tour guided by Nihal! his knowledge and enthusiasm added a whole new dimension to our exploration.'
        },
        {
            reviewImg: require('../../Assets/Profile/reviewimg.png'),
            name: 'Suraj N',
            tour: 'Day tour to Taj Mahal & Agra fort.',
            date: 'Jan 6,2024',
            reviewDesc: 'Exceptional tour guided by Nihal! his knowledge and enthusiasm added a whole new dimension to our exploration.'
        },
        {
            reviewImg: require('../../Assets/Profile/reviewimg.png'),
            name: 'Suraj N',
            tour: 'Day tour to Taj Mahal & Agra fort.',
            date: 'Jan 6,2024',
            reviewDesc: 'Exceptional tour guided by Nihal! his knowledge and enthusiasm added a whole new dimension to our exploration.'
        },
    ]
    return (
        <Container>
            <StatusBar backgroundColor={'transparent'} translucent={true} barStyle='dark-content' />
            <ScrollView
                showsVerticalScrollIndicator={false}>

                <ImageBackground
                    // source={require('../../Assets/Home/HomeImg.png')}
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
                        Profile
                    </Text>

                    <Pressable
                        style={styles.refferal}
                        onPress={() => NavigationService.navigate('GuideExpert')}>
                        <Image
                            source={require('../../Assets/Profile/expert.png')}
                            style={{
                                height: moderateScale(50),
                                width: moderateScale(50)
                            }}
                            resizeMode='contain'
                        />
                    </Pressable>

                    {/* <Image
                        source={require('../../Assets/Profile/imageindianguide.png')}
                        style={styles.imgStyl}
                        resizeMode='contain'
                    /> */}

                </ImageBackground>

                <View
                    style={styles.profileNameImg}>
                    <View
                        style={styles.imageName}>
                        <Pressable
                        // onPress={() => NavigationService.navigate('EditProfile')}
                        >
                            <Image
                                source={require('../../Assets/Home/userimg.png')}
                                style={{
                                    ...styles.imageStyl,
                                    borderColor: colors.primaryFontColor
                                }}
                            />
                        </Pressable>
                        <View
                            style={{
                                flexDirection: 'row',
                                alignItems: 'center',
                                justifyContent: 'space-between',
                                flex: 1
                            }}>
                            <View
                                style={{
                                    marginLeft: moderateScale(10),
                                    marginTop: moderateScale(20)
                                }}>
                                <Text
                                    style={{ ...styles.nameText, color: colors.secondaryThemeColor }}>
                                    Nikhil Rao
                                </Text>
                                <Text
                                    style={{ ...styles.guideText, color: colors.secondaryThemeColor }}>
                                    Tour Guide
                                </Text>
                            </View>
                            <TouchableOpacity
                            // onPress={() => NavigationService.navigate('EditProfile')}
                            >
                                {/* <Icon
                                    name='edit'
                                    type='AntDesign'
                                    style={{
                                        // position:'absolute',
                                        // right:moderateScale(0)
                                    }}
                                /> */}
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>

                <View
                    style={{ marginHorizontal: moderateScale(15) }}>

                    <View
                        style={styles.profileBar}>
                        <View
                            style={{
                                ...styles.iconText,
                                backgroundColor: colors.boxColor
                            }}>
                            <Icon
                                name='location-pin'
                                type='SimpleLineIcon'
                                color={colors.primaryFontColor}
                            />
                            <Text
                                style={{ ...styles.profileBarText, color: colors.primaryFontColor }}>
                                Agra
                            </Text>
                        </View>
                        <View
                            style={{
                                ...styles.iconText,
                                backgroundColor: colors.boxColor
                            }}>
                            <Image
                                source={require('../../Assets/Profile/tour.png')}
                                style={styles.tourStyl}
                                resizeMode='contain'
                                tintColor={colors.primaryFontColor}
                            />
                            <Text
                                style={{ ...styles.profileBarText, color: colors.primaryFontColor }}>
                                46 Tours Completed
                            </Text>
                        </View>
                        <View
                            style={{
                                ...styles.iconText,
                                backgroundColor: colors.boxColor
                            }}>
                            <Icon
                                name='star'
                                type='SimpleLineIcon'
                                color={colors.primaryFontColor}
                            />
                            <Text
                                style={{ ...styles.profileBarText, color: colors.primaryFontColor }}>
                                4.5
                            </Text>
                        </View>
                    </View>

                    <Text
                        style={styles.headingText}>
                        About
                    </Text>

                    <Text
                        style={styles.textStyl}>
                        Hello, adventurers! I'm  Nihal, your enthusiastic tour
                        guide on this incredible journey. With a deep love
                        for the history, culture, and unique stories each..
                    </Text>

                    <Text
                        style={styles.headingText}>
                        Legal notice
                    </Text>



                    <View
                        style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                        }}>
                        <Text
                            style={{
                                ...styles.textStyl,
                                marginRight: moderateScale(20)
                            }}>
                            Legal company name
                        </Text>
                        <Text
                            style={{
                                ...styles.textStyl,
                                marginLeft: moderateScale(20)
                            }}>
                            The Indian Guide
                        </Text>
                    </View>
                    <View
                        style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            marginTop: moderateScale(10)
                        }}>
                        <Text
                            style={{
                                ...styles.textStyl,
                                marginRight: moderateScale(20)
                            }}>
                            Registered Address
                        </Text>
                        <Text
                            style={{
                                ...styles.textStyl,
                                marginLeft: moderateScale(20)
                            }}>
                            456789 Agra
                        </Text>
                    </View>

                    {/* 
                    <Text
                        style={styles.headingText}>
                        Locations served
                    </Text>

                    <Text
                        style={{
                            ...styles.textStyl,
                            fontFamily: FONTS.OpenSans.semibold
                        }}>
                        Taj Mahal, Agra Fort, Tomb of Akbar
                    </Text>

                    <Text
                        style={styles.headingText}>
                        Guide ID
                    </Text>

                    <Image
                        style={styles.idView}
                        source={require('../../Assets/Profile/uploadimg.png')}
                        resizeMode='contain'
                    />

                    <Text
                        style={styles.headingText}>
                        Certificates of Completion
                    </Text>

                    <Text
                        style={styles.CertificatelinkText}>
                        Language Proficiency Certificate {' '}
                        <Text
                            style={{
                                ...styles.CertificatelinkText,
                                fontSize: moderateScale(11),
                                color: '#0066FE'
                            }}>
                            https/:Languageproficiencycertificate
                        </Text>
                    </Text>

                    <Text
                        style={styles.CertificatelinkText}>
                        Language Proficiency Certificate {' '}
                        <Text
                            style={{
                                ...styles.CertificatelinkText,
                                fontSize: moderateScale(11),
                                color: '#0066FE'
                            }}>
                            https/:tourguidecertificate
                        </Text>
                    </Text>

                    <Text
                        style={styles.CertificatelinkText}>
                        Destination-specific Certification {' '}
                        <Text
                            style={{
                                ...styles.CertificatelinkText,
                                fontSize: moderateScale(11),
                                color: '#0066FE'
                            }}>
                            https/:tourguidecertificate
                        </Text>
                    </Text> */}

                    <View
                        style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            marginTop: moderateScale(20),
                            marginBottom: moderateScale(10)
                        }}>
                        <Text
                            style={{
                                ...styles.psotoText,
                            }}>
                            Customer Photos
                        </Text>
                        <Icon
                            name='chevron-small-right'
                            type='Entypo'
                            size={30}
                        />
                    </View>

                    <PhotosList
                        data={photoArr}
                    />

                    <Text
                        style={{
                            ...styles.headingText,
                            marginBottom: moderateScale(20)
                        }}>
                        Customer Reviews
                    </Text>

                    {reviewArr.map((item, index) => (
                        <ReviewList
                            key={index}
                            item={item}
                        />
                    ))}
                </View>
            </ScrollView>
        </Container >
    )
}

export default AgentProfileDetails

const styles = StyleSheet.create({
    homeImg: {
        height: height / 5,
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
    imgStyl: {
        height: moderateScale(50),
        width: moderateScale(50),
        position: 'absolute',
        bottom: moderateScale(8),
        right: moderateScale(15),
    },
    imageName: {
        flexDirection: 'row',
        alignItems: 'center',
        position: 'absolute',
        bottom: moderateScale(-73),
        marginHorizontal: moderateScale(15)
    },
    imageStyl: {
        height: moderateScale(105),
        width: moderateScale(105),
        borderRadius: moderateScale(100),
        borderWidth: moderateScale(2)
    },
    nameText: {
        fontFamily: FONTS.OpenSans.bold,
        fontSize: moderateScale(16)
    },
    guideText: {
        fontFamily: FONTS.OpenSans.regular,
        fontSize: moderateScale(14),
        color: 'rgba(255, 255, 255, 0.75)'
    },
    profileNameImg: {
        width: width,
        marginBottom: moderateScale(95),
        //    backgroundColor:'red'
    },
    profileBar: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    iconText: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: moderateScale(8),
        backgroundColor: '#7D7D7D',
        borderRadius: moderateScale(8)
    },
    profileBarText: {
        fontFamily: FONTS.OpenSans.semibold,
        fontSize: moderateScale(12),
        marginLeft: moderateScale(5)
    },
    tourStyl: {
        height: moderateScale(20),
        width: moderateScale(20)
    },
    headingText: {
        fontFamily: FONTS.OpenSans.bold,
        fontSize: moderateScale(17),
        marginTop: moderateScale(20),
        marginBottom: moderateScale(10)
    },
    textStyl: {
        fontFamily: FONTS.OpenSans.regular,
        fontSize: moderateScale(12)
    },
    idView: {
        height: moderateScale(159),
        width: '100%',
        borderWidth: moderateScale(2),
        borderColor: "#000"
    },
    CertificatelinkText: {
        fontFamily: FONTS.OpenSans.semibold,
        fontSize: moderateScale(12),
        marginTop: moderateScale(5)
    },
    psotoText: {
        fontFamily: FONTS.OpenSans.bold,
        fontSize: moderateScale(17),
    },
    photosMap: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: moderateScale(10),
    },
    refferal: {
        position: 'absolute',
        top: moderateScale(50),
        right: moderateScale(10),
    }
})