import { Image, ScrollView, StyleSheet, View } from 'react-native'
import React from 'react'
import { moderateScale } from '../../Constants/PixelRatio'

const PhotosListGuide = ({ item }) => {
    return (
        <View>
            <Image
                source={item.img}
                style={styles.imgStyl}
                resizeMode='cover'
            />
        </View>
    )
}

export default PhotosListGuide

const styles = StyleSheet.create({

    imgStyl: {
        height: moderateScale(100),
        width: moderateScale(100),
        borderRadius: moderateScale(10),
        marginHorizontal: moderateScale(5)
    }
})