import { StyleSheet, View } from 'react-native'
import React from 'react'
import { Text } from 'react-native-basic-elements'
import { moderateScale } from '../../Constants/PixelRatio'
import { FONTS } from '../../Constants/Fonts'

const ReferalList = ({ item }) => {
    return (
        <>
            <View
                style={styles.refferPriceNameView}>
                <View>
                    <Text
                    style={styles.refferName}>
                        Referred{' '}
                        <Text
                         style={styles.refferName2}>
                            {item.name}
                        </Text>
                    </Text>

                    <Text
                    style={styles.dateText}>
                        {item.date}
                    </Text>
                </View>
                <Text
                style={styles.priceText}>
                    {item.price}
                </Text>
            </View>
            <View
                style={{
                    height: moderateScale(1),
                    width: '100%',
                    backgroundColor: 'rgba(255, 255, 255, 0.22)',
                    marginTop: moderateScale(8),
                    marginBottom: moderateScale(8)
                }}
            />
        </>
    )
}

export default ReferalList

const styles = StyleSheet.create({
    refferPriceNameView: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginVertical:moderateScale(10),
    },
    refferName:{
        fontFamily:FONTS.OpenSans.regular,
        fontSize:moderateScale(13)
    },
    refferName2:{
        fontFamily:FONTS.OpenSans.bold,
        fontSize:moderateScale(12)
    },
    dateText:{
        fontFamily:FONTS.OpenSans.medium,
        fontSize:moderateScale(12),
        color:'rgba(255, 255, 255, 0.67)'
    },
    priceText:{
        fontFamily:FONTS.OpenSans.bold,
        fontSize:moderateScale(20),
        color:'#52CC5E'
    }
})