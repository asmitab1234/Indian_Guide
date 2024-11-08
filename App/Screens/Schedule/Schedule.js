import { Dimensions, ImageBackground, Pressable, ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { AppTextInput, Container, Icon, StatusBar, Text, useTheme } from 'react-native-basic-elements'
import { moderateScale } from '../../Constants/PixelRatio'
import NavigationService from '../../Services/Navigation'
import { FONTS } from '../../Constants/Fonts'
import ScheduleDate from '../../Components/Schedule/ScheduleDate'
import DataView from '../../Components/Schedule/DateView'
import DatePicker from 'react-native-date-picker'
const { height, width } = Dimensions.get('window')

const Schedule = () => {
  const colors = useTheme()
  const [Index, setIndex] = useState(0)
  const [date, setDate] = useState(new Date())
  const [open, setOpen] = useState(false)
  const dateArr = [
    {
      day: 'Sun',
      date: '1',
    },
    {
      day: 'Mon',
      date: '2',
    },
    {
      day: 'Tue',
      date: '3',
    },
    {
      day: 'Wed',
      date: '4',
    },
    {
      day: 'Thu',
      date: '5',
    },
    {
      day: 'Fri',
      date: '6',
    },
    {
      day: 'Sat',
      date: '7',
    },
  ]

  const calendarArr = [
    {
      headingTime: '8:00',
      title: 'Unavailable',
      time: '8:00 AM - 9:00 AM'
    },
    {
      type: 'blank',
      headingTime: '8:00',
      // title: 'Booking to Agra Fort, 5  Members',
      // time: '8:00 AM - 9:00 AM'
    },
    {
      headingTime: '8:00',
      title: 'Booking to Agra Fort, 5  Members',
      time: '8:00 AM - 9:00 AM'
    },
    {
      headingTime: '8:00',
      title: 'Booking to Agra Fort, 5  Members',
      time: '8:00 AM - 9:00 AM'
    },
    {
      type: 'blank',
      headingTime: '8:00',
      // title: 'Booking to Agra Fort, 5  Members',
      // time: '8:00 AM - 9:00 AM'
    },
    {
      headingTime: '8:00',
      title: 'Unavailable',
      time: '8:00 AM - 9:00 AM'
    },
  ]
  return (
    <Container>
      <StatusBar backgroundColor={'transparent'} translucent={true} barStyle='dark-content' />
      <ScrollView
        showsVerticalScrollIndicator={false}>

        <ImageBackground
          source={require('../../Assets/Home/HomeImg.png')}
          style={styles.homeImg}
          resizeMode='cover'
        >
          <Pressable
            style={styles.backView}
            onPress={() => NavigationService.back()}>
            <Icon
              name='chevron-small-left'
              type='Entypo'
              style={{
                marginRight: moderateScale(8)
                , color: colors.white
              }}
              size={30}
            />
            <Text
              style={{ ...styles.backText, color: colors.white }}>
              Back
            </Text>
          </Pressable>

          <Text
            style={{ ...styles.bookingText, color: colors.white }}>
            Schedule
          </Text>

          <View
            style={styles.nameEdit}>
            <Text
              style={{ ...styles.nameTextStyl, color: colors.white }}>
              Hey Nihal Rao, Here are your slots!
            </Text>
            <View style={{ flex: 1 }} />
            <TouchableOpacity>
              <Icon
                name='edit'
                type='MaterialIcon'
                color={colors.white}
              />
            </TouchableOpacity>
          </View>
        </ImageBackground>

        <View
          style={{
            marginHorizontal: moderateScale(15)
          }}>
          <TouchableOpacity
            onPress={() => setOpen(true)}
            style={{
              marginTop: moderateScale(15)
            }}
          >
            <View
              pointerEvents='none' >
              <AppTextInput

                placeholder='08 April 2024'
                inputContainerStyle={styles.inputContainerSty}
                mainContainerStyle={{
                  width: '43%'
                }}
                inputStyle={styles.fontstyl}
                leftIcon={{
                  name: 'calendar',
                  type: 'AntDesign'
                }}
              />
            </View>
          </TouchableOpacity>
          <View

            style={{ ...styles.dateBox, elevation: 1, backgroundColor: colors.primaryThemeColor, 
            borderColor:colors.boxColor }}>
            <ScrollView
              horizontal>
              {dateArr.map((item, index) => (
                <ScheduleDate
                  key={index}
                  item={item}
                  index={index}
                  setIndex={setIndex}
                  Index={Index}
                />
              ))}
            </ScrollView>
          </View>

          <Text
            style={styles.todayText}>
            Today
          </Text>

          <View
            style={{
              marginBottom: moderateScale(20)
            }}>
            {calendarArr.map((item, index) => (
              <DataView
                key={index}
                item={item}
              />
            ))}
          </View>

        </View>
      </ScrollView>
      <DatePicker
        modal
        open={open}
        date={date}
        onConfirm={(date) => {
          setOpen(false)
          setDate(date)
        }}
        onCancel={() => {
          setOpen(false)
        }}
        mode='date'
      />
    </Container>
  )
}

export default Schedule

const styles = StyleSheet.create({
  homeImg: {
    height: height / 3.4,
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
  nameEdit: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: moderateScale(21),
    position: 'absolute',
    bottom: moderateScale(20),
    flex: 1
  },
  nameTextStyl: {
    fontFamily: FONTS.OpenSans.bold,
    fontSize: moderateScale(15),
  },
  dateBox: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: moderateScale(8),
    borderRadius: moderateScale(10),
    backgroundColor: 'rgba(255, 255, 255, 0.98)',
    width: '100%',
    marginTop: moderateScale(10),
    borderWidth:1,
    elevation: 1,
    // backgroundColor:'red'
  },
  todayText: {
    fontFamily: FONTS.OpenSans.semibold,
    fontSize: moderateScale(15),
    marginTop: moderateScale(15)
  },
  inputContainerSty:{
    height:moderateScale(35),
    borderRadius:moderateScale(6)
  }

})