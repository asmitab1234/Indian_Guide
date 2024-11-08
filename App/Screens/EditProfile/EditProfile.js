import { Image, ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Container, Icon, Text, useTheme } from 'react-native-basic-elements'
import EditProfileHeader from '../../Components/Header/EditProfileHeader'
import { moderateScale } from '../../Constants/PixelRatio'
import { FONTS } from '../../Constants/Fonts'
import ImageCropPicker from 'react-native-image-crop-picker'

const EditProfile = () => {
    const colors = useTheme()
    const pick = () => {
        ImageCropPicker.openPicker({
            width: 300,
            height: 400,
            cropping: true,
        }).then(image => {
            console.log(image);
        });
    };
    const editListArr = [
        {
            name: 'Nikhil Rao',
            location: 'Agra',
            about: "Hello, adventurers! I'm  Nihal, your enthusiastic tour guide on this incredible journey. With a deep love for the history, culture, and unique stories each..",
            language: ''
        }
    ]
    return (
        <Container>
            <EditProfileHeader title='Edit Profile' />
            <ScrollView

                showsVerticalScrollIndicator={false}>
                <View
                    style={{
                        alignItems: 'center'
                    }}>
                    <Image
                        source={require('../../Assets/Home/userimg.png')}
                        style={{
                            ...styles.imageStyl,
                            // borderColor: colors.primaryFontColor
                        }}
                    />
                    <Text
                        style={styles.editText}>
                        Edit Picture
                    </Text>
                </View>

                <View
                    style={{
                        height: moderateScale(0.5),
                        width: '92%',
                        backgroundColor: colors.tabBarColor,
                        marginHorizontal: moderateScale(15),
                        marginVertical: moderateScale(10)
                    }} />

                <View
                    style={styles.editNameView}>
                    <View
                        style={{
                            width: '30%'
                        }}>
                        <Text
                            style={styles.headingText}>
                            Name
                        </Text>
                    </View>
                    <View
                        style={{
                            width: '70%'
                        }}>
                        <Text
                            style={{
                                ...styles.textStyl,
                                color: colors.tabBarColor
                            }}>
                            Nikhil Rao
                        </Text>
                    </View>
                </View>

                <View
                    style={styles.editNameView}>
                    <View
                        style={{
                            width: '30%'
                        }}>
                        <Text
                            style={styles.headingText}>
                            Location
                        </Text>
                    </View>
                    <View
                        style={{
                            width: '70%'
                        }}>
                        <Text
                            style={{
                                ...styles.textStyl,
                                color: colors.tabBarColor
                            }}>
                            Agra
                        </Text>
                    </View>
                </View>

                <View
                    style={styles.editNameView}>
                    <View
                        style={{
                            width: '30%'
                        }}>
                        <Text
                            style={styles.headingText}>
                            About
                        </Text>
                    </View>
                    <View
                        style={{
                            width: '70%'
                        }}>
                        <Text
                            style={{
                                ...styles.textStyl,
                                color: colors.tabBarColor,
                                fontSize:moderateScale(13)
                            }}>
                            Hello, adventurers! I'm  Nihal, your enthusiastic tour guide on this incredible journey. With a deep love for the history, culture, and unique stories each..
                        </Text>
                    </View>
                </View>

                <View
                    style={styles.editNameView}>
                    <View
                        style={{
                            width: '30%'
                        }}>
                        <Text
                            style={styles.headingText}>
                            Languages
                        </Text>
                    </View>
                    <View
                        style={{
                            width: '70%'
                        }}>
                        <Text
                            style={{
                                ...styles.textStyl,
                                color: colors.tabBarColor
                            }}>
                            English, Hindi, Spanish, French
                        </Text>
                    </View>
                </View>

                <View
                    style={styles.editNameView}>
                    <View
                        style={{
                            width: '30%'
                        }}>
                        <Text
                            style={styles.headingText}>
                            Guide ID
                        </Text>
                    </View>
                    <TouchableOpacity
                        style={{
                            ...styles.uploadStyl,
                            borderColor: colors.primaryFontColor
                        }}
                        onPress={() => pick()}>
                        <Icon
                            name='upload'
                            type='AntDesign'
                        />
                        <Text
                            style={{
                                ...styles.textStyl,
                                color: colors.tabBarColor,
                                textAlign: 'center',
                                marginTop: moderateScale(10)
                            }}>
                            Upload a file
                        </Text>
                    </TouchableOpacity>
                </View>

                <View
                    style={styles.editNameView}>
                    <View
                        style={{
                            width: '30%'
                        }}>
                        <Text
                            style={styles.headingText}>
                            Certificate Links
                        </Text>
                    </View>
                    <View
                        style={{
                            width: '70%'
                        }}>
                        <Text
                            style={{
                                ...styles.textStyl,
                                color: colors.tabBarColor
                            }}>
                            https/:Languageproficiencycertificate 
                        </Text>
                    </View>
                </View>

                <View
                    style={styles.editNameView}>
                    <View
                        style={{
                            width: '30%'
                        }}>
                        <Text
                            style={styles.headingText}>
                           Photos
                        </Text>
                    </View>
                    <TouchableOpacity
                        style={{
                            ...styles.uploadStyl,
                            borderColor: colors.primaryFontColor
                        }}
                        onPress={() => pick()}>
                        <Icon
                            name='upload'
                            type='AntDesign'
                        />
                        <Text
                            style={{
                                ...styles.textStyl,
                                color: colors.tabBarColor,
                                textAlign: 'center',
                                marginTop: moderateScale(10)
                            }}>
                            Upload from gallery
                        </Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </Container>
    )
}

export default EditProfile

const styles = StyleSheet.create({
    imageStyl: {
        height: moderateScale(100),
        width: moderateScale(100),
        borderRadius: moderateScale(80)
    },
    editText: {
        fontFamily: FONTS.OpenSans.medium,
        fontSize: moderateScale(14),
        marginVertical: moderateScale(10)
    },
    editNameView: {
        flexDirection: 'row',
        // alignItems: 'center',
        marginHorizontal: moderateScale(15),
        marginBottom: moderateScale(13),
        marginTop: moderateScale(8)
    },
    headingText: {
        fontFamily: FONTS.OpenSans.bold,
        fontSize: moderateScale(14),
        marginRight: moderateScale(20)
    },
    textStyl: {
        fontFamily: FONTS.OpenSans.medium,
        fontSize: moderateScale(15),
    },
    uploadStyl: {
        width: '70%',
        height: moderateScale(100),
        borderWidth: moderateScale(1),
        borderStyle: 'dashed',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: moderateScale(8)
    }
})