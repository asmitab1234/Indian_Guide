import { Image, StyleSheet, View } from 'react-native'
import React from 'react'
import { Text } from 'react-native-basic-elements'
import { moderateScale } from '../../Constants/PixelRatio'
import { FONTS } from '../../Constants/Fonts'
import Star from '../Star/Star'

const ReviewList = ({ item }) => {
  return (
    <View
    style={{
      marginBottom:moderateScale(20)
    }}>
      <View
        style={styles.imgNameView}>
        <Image
          source={item.reviewImg}
          style={styles.userImg}
        />
        <View
          style={{ marginLeft: moderateScale(10) }}>
          <Text
            style={styles.nameText}>
            {item.name}
          </Text>
          <Star
            starSize={13}
            ActiveStarColor='#E9B226'
            ActiveStarType='Octicons'
            ActiveStarName='star-fill'
            DeactivateStarType='Octicons'
            DeactivateStarName='star'
          />
        </View>
      </View>

      <View
        style={styles.dateLocationViwe}>
        <Text
          style={styles.tourText}>
          {item.tour}
        </Text>
        <Text
          style={{
            ...styles.tourText,
            fontSize: moderateScale(12)
          }}>
          {item.date}
        </Text>
      </View>

      <Text
        style={styles.reviewText}>
        {item.reviewDesc}
      </Text>

    </View>
  )
}

export default ReviewList

const styles = StyleSheet.create({
  imgNameView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  userImg: {
    height: moderateScale(40),
    width: moderateScale(40),
    borderRadius: moderateScale(80),
  },
  nameText: {
    fontFamily: FONTS.OpenSans.bold,
    fontSize: moderateScale(14),
    marginBottom: moderateScale(2)
  },
  tourText: {
    fontFamily: FONTS.OpenSans.semibold,
    fontSize: moderateScale(14)
  },
  dateLocationViwe: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: moderateScale(8)
  },
  reviewText: {
    fontFamily: FONTS.OpenSans.regular,
    fontSize: moderateScale(12)
  }
})