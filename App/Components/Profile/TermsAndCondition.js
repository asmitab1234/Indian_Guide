import { ScrollView, StyleSheet, View } from 'react-native'
import React from 'react'
import { Container, Text, useTheme } from 'react-native-basic-elements'
import BackHeader from '../Header/BackHeader'
import { FONTS } from '../../Constants/Fonts'
import { moderateScale } from '../../Constants/PixelRatio'
import ExpertHeader from '../Header/ExpertHeader'

const TermsAndCondition = () => {
    const colors = useTheme()
    return (
        <Container>
            <ExpertHeader title='Terms & conditions' />

            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{
                    marginHorizontal: moderateScale(15)
                }}>

                <Text
                    style={{
                        ...styles.versionText,
                    }}>
                    Version 24.9.2
                </Text>

                <Text
                    style={styles.termsConditionsTxt}>
                    Terms and Conditions of Use
                </Text>
                <Text
                    style={styles.termsConditionSubText}>
                    These terms and conditions  govern your use of the YourTourExpert ,
                    provided by our Company. By downloading, installing, or using the App,
                    you agree to be bound by these Terms. If you do not agree with these Terms,
                    you must not use the App.
                </Text>
                <Text
                    style={styles.termsConditionsTxt}>
                    Account Registration
                </Text>
                <Text
                    style={styles.termsConditionSubText}>
                    1. You may be required to create an account
                    to access certain features of the App.
                    You agree to provide accurate, current, and complete
                    information during the registration process and to keep
                    your account information updated.
                </Text>
                <Text
                    style={styles.termsConditionsTxt}>
                    Use of the App
                </Text>
                <Text
                    style={styles.termsConditionSubText}>
                    2.The App is intended for personal, non-commercial use only.
                    You may not use the App for any unlawful purpose or in any manner
                    that violates these Terms.
                </Text>
                <Text
                    style={styles.termsConditionsTxt}>
                    Contact Us
                </Text>
                <Text
                    style={styles.termsConditionSubText}>
                    3.If you have any questions or concerns about these Terms,
                    please contact us at [Your Contact Information].
                </Text>
                <Text
                    style={styles.termsConditionsTxt}>
                    Governing Law
                </Text>
                <Text
                    style={styles.termsConditionSubText}>
                    4.These Terms shall be governed by and construed in accordance
                    with the laws of [Your Jurisdiction],
                    without regard to its conflict of law principles.
                </Text>
            </ScrollView>
        </Container>
    )
}

export default TermsAndCondition

const styles = StyleSheet.create({
    versionText: {
        fontFamily: FONTS.OpenSans.light,
        fontSize: moderateScale(13),
        textAlign: 'center'
    },
    termsConditionsTxt: {
        fontFamily: FONTS.OpenSans.bold,
        fontSize: moderateScale(13),
        marginVertical: moderateScale(5)
    },
    termsConditionSubText: {
        fontFamily: FONTS.OpenSans.medium,
        fontSize: moderateScale(11),
        marginVertical:moderateScale(10)
    }
})