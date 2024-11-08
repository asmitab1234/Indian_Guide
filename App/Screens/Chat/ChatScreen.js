// import { Image, SectionList, StyleSheet, Text, View } from 'react-native'
// import React from 'react'
// import { AppTextInput, Container, Icon, useTheme } from 'react-native-basic-elements'
// import ChatComponent from '../../Components/Chat/ChatComponenet'
// import BackHeader from '../../Components/Header/BackHeader'
// import { FONTS } from '../../Constants/Fonts'
// import { moderateScale } from '../../Constants/PixelRatio'
// import ChatHeader from '../../Components/Header/ChatHeader'


// const ChatScreen = () => {
//     const colors = useTheme()
//     const SingleChatArray = [
//         {
//             title: 'Today',
//             data: [
//                 {
//                     msgStatus: 'msg',
//                     msgText: 'Lorem ipsum dolor sit amet consectetur.',
//                     // msgImg: require('../../Assets/images/chatimg.png'),
//                     msgType: 'send',
//                 },
//                 {
//                     msgStatus: 'image',
//                     msgText: 'Lorem ipsum dolor sit amet consectetur.',
//                     // msgImg: require('../../Assets/images/chatimg.png'),
//                     msgType: 'send',
//                 },
//                 {
//                     msgStatus: 'msg',
//                     msgText: 'Lorem ipsum dolor sit amet consectetur.',
//                     // msgImg: require('../../Assets/images/chatimg.png'),
//                     msgType: 'recieve',
//                 },
//                 {
//                     msgStatus: 'msg',
//                     msgText: 'Lorem ipsum dolor sit amet consectetur.',
//                     // msgImg: require('../../Assets/images/chatimg.png'),
//                     msgType: 'send',
//                 },
//                 {
//                     msgStatus: 'voice',
//                     msgText: 'Lorem ipsum dolor sit amet consectetur.',
//                     // msgImg: require('../../Assets/images/chatimg.png'),
//                     msgType: 'send',
//                 },
//                 {
//                     msgStatus: 'voice',
//                     msgText: 'Lorem ipsum dolor sit amet consectetur.',
//                     // msgImg: require('../../Assets/images/chatimg.png'),
//                     msgType: 'recieve',
//                 },
//             ],
//         },
//         {
//             title: 'Yesterday',
//             data: [
//                 {
//                     msgStatus: 'msg',
//                     msgText: 'Lorem ipsum dolor sit amet consectetur.',
//                     // msgImg: require('../../Assets/images/chatimg.png'),
//                     msgType: 'send',
//                 },
//                 {
//                     msgStatus: 'msg',
//                     msgText: 'Lorem ipsum dolor sit amet consectetur.',
//                     // msgImg: require('../../Assets/images/chatimg.png'),
//                     msgType: 'send',
//                 },
//                 {
//                     msgStatus: 'msg',
//                     msgText: 'Lorem ipsum dolor sit amet consectetur.',
//                     // msgImg: require('../../Assets/images/chatimg.png'),
//                     msgType: 'send',
//                 },
//                 {
//                     msgStatus: 'msg',
//                     msgText: 'Lorem ipsum dolor sit amet consectetur.',
//                     // msgImg: require('../../Assets/images/chatimg.png'),
//                     msgType: 'send',
//                 },
//                 {
//                     msgStatus: 'msg',
//                     msgText: 'Lorem ipsum dolor sit amet consectetur.',
//                     // msgImg: require('../../Assets/images/chatimg.png'),
//                     msgType: 'send',
//                 },
//                 {
//                     msgStatus: 'msg',
//                     msgText: 'Lorem ipsum dolor sit amet consectetur.',
//                     // msgImg: require('../../Assets/images/chatimg.png'),
//                     msgType: 'send',
//                 },
//                 {
//                     msgStatus: 'msg',
//                     msgText: 'Lorem ipsum dolor sit amet consectetur.',
//                     // msgImg: require('../../Assets/images/chatimg.png'),
//                     msgType: 'send',
//                 },
//                 {
//                     msgStatus: 'image',
//                     msgText: 'Lorem ipsum dolor sit amet consectetur.',
//                     // msgImg: require('../../Assets/images/chatimg.png'),
//                     msgType: 'send',
//                 },
//                 {
//                     msgStatus: 'msg',
//                     msgText: 'Lorem ipsum dolor sit amet consectetur.',
//                     // msgImg: require('../../Assets/images/chatimg.png'),
//                     msgType: 'recieve',
//                 },
//                 {
//                     msgStatus: 'msg',
//                     msgText: 'Lorem ipsum dolor sit amet consectetur.',
//                     // msgImg: require('../../Assets/images/chatimg.png'),
//                     msgType: 'send',
//                 },
//                 {
//                     msgStatus: 'voice',
//                     msgText: 'Lorem ipsum dolor sit amet consectetur.',
//                     // msgImg: require('../../Assets/images/chatimg.png'),
//                     msgType: 'send',
//                 },
//                 {
//                     msgStatus: 'voice',
//                     msgText: 'Lorem ipsum dolor sit amet consectetur.',
//                     // msgImg: require('../../Assets/images/chatimg.png'),
//                     msgType: 'recieve',
//                 },
//             ],
//         },
//     ];

//     return (
//         <Container>
//             <ChatHeader title='Chat' />
//             <SectionList
//                 inverted={true}
//                 sections={SingleChatArray}
//                 keyExtractor={(item, index) => item + index}
//                 renderItem={({ item, index }) => (
//                     <ChatComponent
//                         key={index}
//                         item={item}
//                     />
//                 )}
//                 renderSectionFooter={({ section }) => (
//                     <View style={{ alignItems: 'center', justifyContent: 'center' }}>
//                         <Text
//                             style={{
//                                 ...styles.dayTimeText,
//                                 color: colors.primaryFontColor,
//                                 backgroundColor: colors.pageBackgroundColor,
//                             }}>
//                             {section.title}
//                         </Text>
//                     </View>
//                 )}
//             />
//             <View
//                 style={styles.bottomInput}>
//                 <AppTextInput
//                     placeholder='Write A Message'
//                     inputContainerStyle={styles.inputContainer}
//                     mainContainerStyle={styles.inputBox}
//                     inputStyle={styles.fontStyl}
//                     leftIcon={{
//                         name: 'paperclip',
//                         type: 'FoundationIcon',
//                         size: moderateScale(26),
//                     }}
//                 // rightAction={[
//                 //     <Icon
//                 //         name='paperclip'
//                 //         type='FoundationIcon'
//                 //         size={27}
//                 //     />
//                 // ]}
//                 />
//                 <View
//                     style={styles.sendBox}>
//                     <Icon
//                         name='send'
//                         type='FontAwesome'
//                         color={colors.buttonColor}
//                     />
//                 </View>
//             </View>
//         </Container>
//     )
// }

// export default ChatScreen

// const styles = StyleSheet.create({
//     dayTimeText: {
//         fontFamily: FONTS.OpenSans.medium,
//         fontSize: moderateScale(12),
//         elevation: 3,
//         paddingVertical: moderateScale(5),
//         paddingHorizontal: moderateScale(16),
//         borderRadius: moderateScale(15),
//         marginVertical: moderateScale(10),
//     },
//     inputContainer: {
//         borderRadius: moderateScale(50),
//         height: moderateScale(40),
//     },
//     inputBox: {
//         width: '85%',
//     },
//     fontStyl: {
//         fontFamily: FONTS.OpenSans.medium,
//         fontSize: moderateScale(12)
//     },
//     bottomInput: {
//         flexDirection: 'row',
//         alignItems: 'center',
//         marginHorizontal: moderateScale(15),
//         justifyContent: 'space-between',
//         marginVertical: moderateScale(10)
//     },
//     sendBox: {
//         padding: moderateScale(10),
//         borderRadius: moderateScale(50),
//         alignItems: 'center',
//         justifyContent: 'center',
//         backgroundColor: '#F7F7F7',
//         elevation: 1
//     }
// })


// Call US
import { Image, StyleSheet, View } from 'react-native'
import React from 'react'
import { Container, Text } from 'react-native-basic-elements'
import BackHeader from '../../Components/Header/BackHeader'
import { FONTS } from '../../Constants/Fonts'
import { moderateScale } from '../../Constants/PixelRatio'

const ChatScreen = () => {
    return (
        <Container>
            <BackHeader title='Call Us' />
            <View
                style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginHorizontal: moderateScale(15)
                }}>
                <Image
                    style={styles.imgSTyl}
                    source={require('../../Assets/Profile/support3.png')} />
                <Text
                    style={{
                        ...styles.textStyl,
                        fontFamily: FONTS.OpenSans.regular
                    }}>
                    1234567890
                </Text>
            </View>
        </Container>
    )
}

export default ChatScreen

const styles = StyleSheet.create({
    textStyl: {
        fontFamily: FONTS.OpenSans.medium,
        fontSize: moderateScale(15),
        marginHorizontal: moderateScale(15)
    },
    imgSTyl: {
        height: moderateScale(17),
        width: moderateScale(17)
    }
})