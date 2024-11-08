import { ScrollView, StyleSheet, View } from 'react-native'
import React, { useState } from 'react'
import { Container, Text, useTheme } from 'react-native-basic-elements'
import BackHeader from '../../Components/Header/BackHeader'
import { FONTS } from '../../Constants/Fonts'
import { moderateScale } from '../../Constants/PixelRatio'
import index from '../Home'
import SettingSection from '../../Components/Profile/SettingSection'
import SupportSection from '../../Components/Profile/SupportSection'
import PrivacySection from '../../Components/Profile/PrivacySection'
import { useSelector } from 'react-redux'
import DeleteSection from '../../Components/Profile/DeleteSection'
import Modal from "react-native-modal";
import LogOutModal from '../../Components/Profile/LogOutModal'
import DeleteModal from '../../Components/Profile/DeleteModal'
import { Colors } from 'react-native/Libraries/NewAppScreen'

const Profile = () => {
  const colors = useTheme()
  const [isModalVisible, setModalVisible] = useState(false);
  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  }

  const [isDeleteModalVisible, setDeleteModalVisible] = useState(false);
  const toggleDeleteModal = () => {
    setDeleteModalVisible(!isDeleteModalVisible);
  }
  const settingsArr = [
    {
      icon: require('../../Assets/Profile/setting1.png'),
      title: 'Profile',
      handelClick: 'ProfileDetails'
      // handelClick: 'AgentProfileDetails' //Agent
    },
    // {
    //   icon: require('../../Assets/Profile/setting2.png'),
    //   title: 'Language',
    // },
    // {
    //   icon: require('../../Assets/Profile/setting3.png'),
    //   title: 'Currency'
    // },
    {
      icon: require('../../Assets/Profile/setting4.png'),
      title: 'Your Referrals',
      handelClick: 'TotalReferral'
    },
    // {
    //   icon: require('../../Assets/Profile/setting5.png'),
    //   title: 'Availability & Price',
    //   handelClick: 'AvailiabilityPrice'
    // },
    // {
    //   icon: require('../../Assets/Profile/setting6.png'),
    //   title: 'Schedule Update'
    // },
    // {
    //   icon: require('../../Assets/Profile/setting6.png'),
    //   title: 'Chat',
    //   handelClick: 'ChatScreen'
    // },
  ]

  const supportArr = [
    // {
    //   icon: require('../../Assets/Profile/support1.png'),
    //   title: 'Help center'
    // },
    {
      icon: require('../../Assets/Profile/support2.png'),
      title: 'About Us'
    },
    {
      icon: require('../../Assets/Profile/support3.png'),
      title: 'Call Us',
      // handelClick: 'ChatScreen'
    },
  ]

  const privacyArr = [
    {
      icon: require('../../Assets/Profile/privacy1.png'),
      title: 'Terms & Conditions',
      handelClick: 'TermsAndCondition'
    },
    {
      icon: require('../../Assets/Profile/privacy2.png'),
      title: 'Legal Notice',
      handelClick: 'LeagleNotice'
    },
  ]

  const deleteArr = [
    {
      icon: require('../../Assets/Profile/logout.png'),
      title: 'Logout',
      handelClick: () => toggleModal()
    },
    {
      icon: require('../../Assets/Profile/delete.png'),
      title: 'Delete Account',
      handelClick: () => toggleDeleteModal()
    },
  ]
  return (
    <Container>
      <BackHeader title='Profile' />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ marginHorizontal: moderateScale(15) }}
      >

        <Text
          style={styles.heading}>
          Settings
        </Text>

        <View
          style={{
            ...styles.settingBox,
            backgroundColor: colors.boxColor
          }}>
          {settingsArr.map((item, index) => (
            <SettingSection
              lastObject={(settingsArr.length - 1) != index}
              key={index}
              item={item}
              index={index}
            />
          ))}
        </View>

        <Text
          style={styles.heading}>
          Support
        </Text>

        <View
          style={{
            ...styles.settingBox,
            backgroundColor: colors.boxColor
          }}>
          {supportArr.map((item, index) => (
            <SupportSection
              lastObject={(supportArr.length - 1) != index}
              key={index}
              item={item}
              index={index}
            />
          ))}
        </View>

        <Text
          style={styles.heading}>
          Privacy
        </Text>

        <View
          style={{
            ...styles.settingBox,
            backgroundColor: colors.boxColor
          }}>
          {privacyArr.map((item, index) => (
            <PrivacySection
              lastObject={(privacyArr.length - 1) != index}
              key={index}
              item={item}
              index={index}
            />
          ))}
        </View>

        <View
          style={{
            ...styles.settingBox,
            backgroundColor: colors.boxColor
          }}>
          {deleteArr.map((item, index) => (
            <DeleteSection
              lastObject={(privacyArr.length - 1) != index}
              key={index}
              item={item}
              index={index}
            />
          ))}
        </View>

      </ScrollView>
      <Modal isVisible={isModalVisible}
        backdropOpacity={0.3}
        style={{ justifyContent: 'flex-end', margin: moderateScale(0) }}
        onBackdropPress={() => setModalVisible(false)}>
        <LogOutModal
          setModalVisible={setModalVisible} />
      </Modal>
      <Modal isVisible={isDeleteModalVisible}
        backdropOpacity={0.3}
        style={{ justifyContent: 'flex-end', margin: moderateScale(0) }}
        onBackdropPress={() => setDeleteModalVisible(false)}>
        <DeleteModal
          setDeleteModalVisible={setDeleteModalVisible} />
      </Modal>
    </Container>
  )
}

export default Profile

const styles = StyleSheet.create({
  heading: {
    fontFamily: FONTS.OpenSans.semibold,
    fontSize: moderateScale(18)
  },
  settingBox: {
    // backgroundColor: '#101010',
    // backgroundColor: 'rgba(240, 238, 238, 0.55)',
    padding: moderateScale(8),
    borderRadius: moderateScale(10),
    marginTop: moderateScale(15),
    marginBottom: moderateScale(15)
  }
})