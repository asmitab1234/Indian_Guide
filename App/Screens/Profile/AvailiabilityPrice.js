import { Pressable, ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native'
import React, { useMemo, useRef, useState } from 'react'
import { AppButton, AppTextInput, Container, Icon, Text, useTheme } from 'react-native-basic-elements'
import BackHeader from '../../Components/Header/BackHeader'
import { moderateScale } from '../../Constants/PixelRatio'
import { FONTS } from '../../Constants/Fonts'
import DateRangePicker from "rn-select-date-range"
import moment from 'moment'
import TimePicker from 'react-native-wheel-time-picker';
import DatePicker from 'react-native-date-picker'
import Availabilitycalendar from '../../Components/Availability/Availabilitycalendar'


const MILLISECONDS_PER_MINUTE = 60 * 1000;
const MILLISECONDS_PER_HOUR = 60 * 60 * 1000;
const MILLISECONDS_PER_DAY = 24 * MILLISECONDS_PER_HOUR;

const AvailiabilityPrice = () => {
  const dayViewref = useRef(null)
  const [timeValue, setTimeValue] = useState(Date.now() % MILLISECONDS_PER_DAY);
  const [hour, min] = useMemo(() => {
    return [
      Math.floor(timeValue / MILLISECONDS_PER_HOUR),
      Math.floor((timeValue % MILLISECONDS_PER_HOUR) / MILLISECONDS_PER_MINUTE),
      Math.floor((timeValue % MILLISECONDS_PER_MINUTE) / 1000),
    ];
  }, [timeValue]);
  const colors = useTheme()
  const [Index, setIndex] = useState(0)
  const dateArr = [
    {
      day: 'Sun',
      date: 'May 21',
    },
    {
      day: 'Mon',
      date: 'May 22',
    },
    {
      day: 'Tue',
      date: 'May 23',
    },
    {
      day: 'Wed',
      date: 'May 24',
    },
    {
      day: 'Thu',
      date: 'May 25',
    },
    {
      day: 'Fri',
      date: 'May 26',
    },
    {
      day: 'Sat',
      date: 'May 27',
    },
  ]
  const [selectedRange, setRange] = useState({});
  const [date, setDate] = useState(new Date())
  const [open, setOpen] = useState(false)
  return (
    <Container>
      <BackHeader title='Set your prefrences' />
      <ScrollView
        nestedScrollEnabled
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          marginHorizontal: moderateScale(15),
          flex: 1
        }}>

        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: moderateScale(10),
          }}>
          <Text
            style={styles.AvailiabilityText}>
            Availability
          </Text>
          <TouchableOpacity
            style={{
              // backgroundColor: 'yellow',
              width: '45%'
            }}
            onPress={() => setOpen(true)}>
            <View
              pointerEvents='none' >
              <AppTextInput
                placeholder='08 April 2024'
                inputContainerStyle={styles.inputContainerSty}
                mainContainerStyle={{
                  // width: '200%'
                }}
                inputStyle={styles.fontstyl}
                leftIcon={{
                  name: 'calendar',
                  type: 'AntDesign'
                }}
              />
            </View>
          </TouchableOpacity>

        </View>
        {/* <View style={{
          // backgroundColor: "#fff"
        }}>
          <DateRangePicker
            onSelectDateRange={(range) => {
              setRange(range);
            }}
            blockSingleDateSelection={true}
            responseFormat="YYYY-MM-DD"
            maxDate={moment()}
            minDate={moment().subtract(100, "days")}
            selectedDateContainerStyle={{
              ...styles.selectedDateContainerStyle,
              backgroundColor: colors.buttonColor
            }}
            selectedDateStyle={styles.selectedDateStyle}

          />
        </View> */}
        <View
          style={{
            ...styles.dateBox,
            backgroundColor: colors.primaryThemeColor,
            borderColor: colors.tabBarColor
          }}>
          <Pressable onPress={() => {
            dayViewref.current.scrollTo({x: 0, y: 0, animated: true})
          }}>
            <Icon
              name='leftcircleo'
              type='AntDesign'
              style={{
                marginRight: moderateScale(10)
              }}
              color={colors.buttonColor}
            />
          </Pressable>
          <ScrollView
            ref={dayViewref}
            horizontal
            contentContainerStyle={{
              alignItems: 'center'
            }}
          >

            {dateArr.map((item, index) => (
              <Availabilitycalendar
                key={index}
                item={item}
                index={index}
                setIndex={setIndex}
                Index={Index}
              />
            ))}

          </ScrollView>
          <Pressable onPress={() => {
            dayViewref.current.scrollToEnd({ animated: true });
          }}>
          <Icon
            name='rightcircleo'
            type='AntDesign'
            color={colors.buttonColor}
            style={{
              marginLeft: moderateScale(10)
            }}
          />
          </Pressable>
        </View>
        <Text
          style={styles.headingText}>
          Time
        </Text>

        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between'
          }}>
          <View
            style={{
              // alignItems: 'center'
            }}>
            <View style={{
              ...styles.containerTime,
              backgroundColor: colors.boxColor
            }}>
              <TimePicker
                value={timeValue}
                wheelProps={{
                  wheelHeight: 100,
                  itemHeight: 30,
                  selectedColor: colors.buttonColor
                }}
                onChange={(newValue) => setTimeValue(newValue)}
              />
            </View>
            <Text
              style={{
                fontFamily: FONTS.OpenSans.regular,
                fontSize: moderateScale(12),
                marginTop: moderateScale(10)
              }}>
              Start Time
            </Text>
          </View>
          <View
            style={{
              // alignItems: 'center'
            }}>
            <View style={{
              ...styles.containerTime,
              backgroundColor: colors.boxColor
            }}>
              <TimePicker
                value={timeValue}
                wheelProps={{
                  wheelHeight: 100,
                  itemHeight: 15,
                  selectedColor: colors.buttonColor
                }}
                onChange={(newValue) => setTimeValue(newValue)}

              />
            </View>
            <Text
              style={{
                fontFamily: FONTS.OpenSans.regular,
                fontSize: moderateScale(12),
                marginTop: moderateScale(10)
              }}>
              End Time
            </Text>
          </View>
        </View>
        <Text
          style={styles.headingText}>
          Price
        </Text>

        <View
          style={{
            ...styles.priceBox,
            borderColor: colors.primaryFontColor
          }}>
          <View
            style={{
              width: '43%'
            }}>
            <Text
              style={{
                ...styles.setPriceText,
                color: colors.primaryFontColor
              }}>
              Full day
            </Text>
            <View
              style={{
                ...styles.priceBox2,
                backgroundColor: colors.boxColor
              }}>
              <Text
                style={{
                  ...styles.textPrice,
                  color: colors.primaryFontColor
                }}>
                INR 1,500
              </Text>
            </View>
          </View>

          <View
            style={{
              width: '43%'
            }}>
            <Text
              style={{
                ...styles.setPriceText,
                color: colors.primaryFontColor
              }}>
              Half day
            </Text>
            <View
              style={{
                ...styles.priceBox2,
                backgroundColor: colors.boxColor
              }}>
              <Text
                style={{
                  ...styles.textPrice,
                  color: colors.primaryFontColor
                }}>
                INR 1,500
              </Text>
            </View>
          </View>
        </View>

        <View style={{ flex: 1 }} />
        <AppButton
          title='Confirm'
          textStyle={{
            fontFamily: FONTS.OpenSans.bold,
            fontSize: moderateScale(17),
            color: colors.primaryThemeColor
          }}
          style={styles.buttonStyl}
        />

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

export default AvailiabilityPrice

const styles = StyleSheet.create({
  headingText: {
    fontFamily: FONTS.OpenSans.bold,
    fontSize: moderateScale(17),
    marginBottom: moderateScale(10),
    marginTop: moderateScale(20)
  },

  // selectedDateStyle: {
  //   fontWeight: "bold",

  // },
  priceBox: {
    paddingVertical: moderateScale(8),
    borderWidth: moderateScale(0.1),
    borderRadius: moderateScale(5),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    // paddingHorizontal: moderateScale(20),
    // backgroundColor:'red',
    // width: '100%',

  },
  setPriceText: {
    fontFamily: FONTS.OpenSans.medium,
    fontSize: moderateScale(12),
    color: 'rgba(255, 255, 255, 0.66)'
  },
  priceBox2: {
    padding: moderateScale(8),
    borderRadius: moderateScale(10),
    marginTop: moderateScale(8),
    // width: '135%',
    alignItems: 'center',
    justifyContent: 'center'

  },
  textPrice: {
    fontFamily: FONTS.OpenSans.semibold,
    fontSize: moderateScale(13)
  },
  buttonStyl: {
    height: moderateScale(45),
    marginVertical: moderateScale(18),
    marginHorizontal: 0
  },
  selectedDateContainerStyle: {
    height: moderateScale(30),
    width: moderateScale(30),
    alignItems: "center",
    justifyContent: "center",
    borderRadius: moderateScale(20),
  },
  selectedDateStyle: {
    fontWeight: "bold",
    color: "white",
  },
  containerTime: {
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: '#303030',
    height: moderateScale(153),
    width: moderateScale(150),
    borderRadius: moderateScale(10)
  },
  timeValue: {
    marginVertical: 20,
  },
  AvailiabilityText: {
    fontFamily: FONTS.OpenSans.bold,
    fontSize: moderateScale(17),
  },
  fontstyl: {
    fontFamily: FONTS.OpenSans.medium,
    fontSize: moderateScale(13)
  },
  inputContainerSty: {
    height: moderateScale(45),
    borderRadius: moderateScale(6),
    // width:moderateScale(15)
  },
  dateBox: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: moderateScale(8),
    borderRadius: moderateScale(10),
    backgroundColor: 'rgba(255, 255, 255, 0.98)',
    width: '100%',
    marginTop: moderateScale(10),
    borderWidth: 1,
    elevation: 1,
    // backgroundColor:'red'
  }
})