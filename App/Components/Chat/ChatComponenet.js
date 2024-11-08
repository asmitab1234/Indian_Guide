import { Image, StyleSheet, View } from 'react-native';
import React from 'react';
import {
    Icon,
    Text,
    useTheme,
} from 'react-native-basic-elements';
import { moderateScale } from '../../Constants/PixelRatio';
import { FONTS } from '../../Constants/Fonts';
import LinearGradient from 'react-native-linear-gradient';

const ChatComponent = ({ item }) => {
    const colors = useTheme();
    return (
        <View
            style={{
                marginHorizontal: moderateScale(15),
                // marginTop: moderateScale(10),
            }}>
            {item.msgStatus == 'msg' ? (
                <View
                    style={{
                        ...styles.chatCardStyle,
                        alignSelf: item.msgType == 'send' ? 'flex-start' : 'flex-end',
                        borderBottomRightRadius: item.msgType == 'send' ? moderateScale(11) : 0,
                        // elevation: item.msgType == 'send' ? 2 : 0,
                        borderBottomLeftRadius: item.msgType == 'send' ? 0 : moderateScale(11),
                        backgroundColor: item.msgType == 'send' ? colors.boxColor : colors.buttonColor,

                    }}>
                    <Text style={{
                        ...styles.cardText,
                        color: item.msgType == 'send' ?
                            colors.primaryFontColor : colors.pageBackgroundColor
                    }}>
                        {item.msgText}
                    </Text>
                    <View style={styles.timetickBox}>
                        <Text style={{
                            ...styles.cardTextTime,
                            color: item.msgType == 'send' ? colors.tabBarColor : colors.white
                        }}>
                            2:30 PM
                        </Text>
                    </View>
                </View>
            ) : item.msgStatus == 'image' ? (
                <View>
                    {/* <Image
                        style={styles.chatImgStyle}
                        source={{ uri: 'https://images.unsplash.com/photo-1707968781621-db823bedc3d8?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' }} />
                    <View style={styles.timetickBox}>
                        <Text style={{ ...styles.cardTextTime, color: colors.boldFontColor }}>
                            2:30 PM
                        </Text>
                      
                    </View> */}
                </View>
            ) : null}
        </View>
    );
};

export default ChatComponent;

const styles = StyleSheet.create({
    chatCardStyle: {
        maxWidth: '88%',
        borderRadius: moderateScale(0),
        borderTopRightRadius: moderateScale(11),
        borderTopLeftRadius: moderateScale(11),
        borderBottomRightRadius: moderateScale(11),
        padding: moderateScale(10),
        // alignSelf: 'flex-start',
        marginTop: moderateScale(10),
        // borderWidth: moderateScale(1),
    },
    cardText: {
        fontFamily: FONTS.OpenSans.medium,
        fontSize: moderateScale(12),
    },
    tick: {
        height: moderateScale(9),
        width: moderateScale(9),
        marginLeft: moderateScale(5),
    },
    cardTextTime: {
        fontFamily: FONTS.OpenSans.medium,
        fontSize: moderateScale(8),
    },
    timetickBox: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: moderateScale(5),
        alignSelf: 'flex-end',
    },
    chatImgStyle: {
        width: moderateScale(229),
        height: moderateScale(225),
        borderRadius: moderateScale(15),
        marginTop: moderateScale(20),
        alignSelf: 'flex-end',
    },

    voiceCardStyle: {
        maxWidth: '75%',
        borderRadius: moderateScale(0),
        borderTopRightRadius: moderateScale(11),
        borderTopLeftRadius: moderateScale(11),
        borderBottomRightRadius: moderateScale(11),
        elevation: 0,
        padding: moderateScale(10),
    },
    voiceImg: {
        width: moderateScale(22),
        height: moderateScale(22),
    },
    voicePlayImg: {
        width: moderateScale(130),
        height: moderateScale(15),
    },
    styleBoxVoice: {
        width: moderateScale(41),
        height: moderateScale(41),
        borderWidth: moderateScale(2),
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: moderateScale(5),
        marginRight: moderateScale(10),
    },
    pauseStyle: {
        width: moderateScale(32),
        height: moderateScale(32),
    },
    pauseBox: {
        height: moderateScale(58),
        width: moderateScale(56),
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: moderateScale(11),
        marginLeft: moderateScale(12),
    },
});
