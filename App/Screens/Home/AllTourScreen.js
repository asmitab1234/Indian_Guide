import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Container } from 'react-native-basic-elements'
import BackHeader from '../../Components/Header/BackHeader'
import { moderateScale } from '../../Constants/PixelRatio'
import TourCardForSingleScreen from '../../Components/Home/TourCardForSingleScreen'

const AllTourScreen = () => {
    const tourArr = [
        {
            img: require('../../Assets/Agent/Home/boolingimg.png'),
            tour: 'Day Tour',
            location: 'From Delhi : Red Fort & Taj Mahal',
            review: '4.2',
            count: '(1914  reviews)',
            price: 'INR 500'
        },
        {
            img: require('../../Assets/Agent/Home/boolingimg.png'),
            tour: 'Day Tour',
            location: 'From Delhi : Red Fort & Taj Mahal',
            review: '4.2',
            count: '(1914 reviews)',
            price: 'INR 500'
        },
        {
            img: require('../../Assets/Agent/Home/boolingimg.png'),
            tour: 'Day Tour',
            location: 'From Delhi : Red Fort & Taj Mahal',
            review: '4.2',
            count: '(1914  reviews)',
            price: 'INR 500'
        },
        {
            img: require('../../Assets/Agent/Home/boolingimg.png'),
            tour: 'Day Tour',
            location: 'From Delhi : Red Fort & Taj Mahal',
            review: '4.2',
            count: '(1914  reviews)',
            price: 'INR 500'
        },
        {
            img: require('../../Assets/Agent/Home/boolingimg.png'),
            tour: 'Day Tour',
            location: 'From Delhi : Red Fort & Taj Mahal',
            review: '4.2',
            count: '(1914  reviews)',
            price: 'INR 500'
        },
        {
            img: require('../../Assets/Agent/Home/boolingimg.png'),
            tour: 'Day Tour',
            location: 'From Delhi : Red Fort & Taj Mahal',
            review: '4.2',
            count: '(1914  reviews)',
            price: 'INR 500'
        },
    ]
    return (
        <Container>
            <BackHeader title='All Tour' />
            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{
                    marginHorizontal: moderateScale(15),
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                    justifyContent: 'space-between',
                    gap: 15
                }}>
                {tourArr.map((item, index) => (
                    <TourCardForSingleScreen
                        key={index}
                        item={item}
                    />
                ))}
            </ScrollView>
        </Container>
    )
}

export default AllTourScreen

const styles = StyleSheet.create({})