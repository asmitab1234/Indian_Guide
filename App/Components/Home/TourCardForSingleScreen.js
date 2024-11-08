import { ImageBackground, StyleSheet, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { Card, Icon, Text, useTheme } from 'react-native-basic-elements'
import { moderateScale } from '../../Constants/PixelRatio'
import Star from '../Star/Star'
import { FONTS } from '../../Constants/Fonts'

const TourCardForSingleScreen = ({ item }) => {
    const colors = useTheme()
    const [select, setSelect] = useState(false)
    const onClick = () => {
        setSelect(!select)
    }
    return (
        <Card
            shadow={false}
            style={{
                ...styles.mainCard,
                borderColor: colors.boxColor
            }}
        >
            <ImageBackground
                source={item.img}
                style={styles.imgStyl}
                borderTopLeftRadius={8}
                borderTopRightRadius={8}>
                <TouchableOpacity
                    onPress={() => onClick()}>
                    {select ?
                        <Icon
                            name='favorite'
                            type='MaterialIcon'
                            color={colors.buttonColor}
                            size={25}
                            style={{
                                alignSelf: 'flex-end',
                                marginRight: moderateScale(8),
                                marginTop: moderateScale(5),
                            }}
                        /> :
                        <Icon
                            name='favorite-outline'
                            type='MaterialIcon'
                            size={25}
                            color={colors.white}
                            style={{
                                alignSelf: 'flex-end',
                                marginRight: moderateScale(8),
                                marginTop: moderateScale(5),
                            }}
                        />}
                </TouchableOpacity>
            </ImageBackground>

            <Text
                style={{
                    ...styles.dayTourText,
                    color: colors.tabBarColor,
                    marginTop: moderateScale(10)
                }}>
                {item.tour}
            </Text>

            <Text
                style={{
                    ...styles.dayTourText,
                    marginTop: moderateScale(2),
                    marginBottom: moderateScale(10)
                }}>
                {item.location}
            </Text>

            <View
                style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginTop: moderateScale(3),
                    marginHorizontal: moderateScale(10)
                }}>
                <Star
                    ActiveStarName='star'
                    ActiveStarType='FontAwesome'
                    DeactivateStarName='star-o'
                    DeactivateStarType='FontAwesome'
                    // defaultStar={5}
                    starSize={9}
                    ActiveStarColor='#D1606C'
                    DeactivateStarColor='#D1606C'
                />
                <Text
                    style={{
                        ...styles.reviewText,
                        marginLeft: moderateScale(5)
                    }}>
                    {item.review}{' '}
                    <Text
                        style={{
                            ...styles.reviewText,
                        }}>
                        {item.count}
                    </Text>
                </Text>
            </View>

            <Text
                style={styles.priceHead}>
                Starting Price :{' '}
                <Text
                    style={styles.price}>
                    {item.price}
                </Text>
            </Text>

        </Card>
    )
}

export default TourCardForSingleScreen

const styles = StyleSheet.create({
    mainCard: {
        backgroundColor: 'transparent',
        borderWidth: moderateScale(2),
        width: moderateScale(152),
        padding: 0,
        borderRadius: moderateScale(10)

    },
    imgStyl: {
        height: moderateScale(135),
        width: moderateScale(152)
    },
    dayTourText: {
        marginHorizontal: moderateScale(10),
        fontFamily: FONTS.OpenSans.bold,
        fontSize: moderateScale(11)
    },
    reviewText: {
        fontFamily: FONTS.OpenSans.semibold,
        fontSize: moderateScale(10)
    },
    priceHead: {
        fontFamily: FONTS.OpenSans.semibold,
        fontSize: moderateScale(11),
        marginHorizontal: moderateScale(10),
        marginBottom: moderateScale(10),
        marginTop: moderateScale(5)
    },
    price: {
        fontFamily: FONTS.OpenSans.bold,
        fontSize: moderateScale(12)
    }
})