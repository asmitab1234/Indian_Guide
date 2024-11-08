import { Image, ScrollView, StyleSheet, View } from 'react-native'
import React from 'react'
import { moderateScale } from '../../Constants/PixelRatio'
import { Text } from 'react-native-basic-elements'

const PhotosList = ({ data }) => {
    return (
        <View
            style={{
                height: 200,
                flex: 1,
                flexDirection: 'row'
            }}
        >
            <View
                style={{
                    flex: 1,
                    borderRadius: 10,
                    overflow: 'hidden',
                    marginRight: 5
                }}
            >
                <Image
                    source={data[0].img}
                    style={styles.imgStyl}
                    resizeMode='cover'
                />
            </View>

            <View
                style={{
                    flex: 1,
                    marginLeft: 5
                }}
            >
                <View
                    style={{
                        flex: 1,
                        borderRadius: 10,
                        overflow: 'hidden',
                        marginBottom: 5
                    }}
                >
                    <Image
                        source={data[1].img}
                        style={styles.imgStyl}
                    />
                </View>

                <View
                    style={{
                        flex: 1,
                        borderRadius: 10,
                        overflow: 'hidden',
                        marginTop: 5
                    }}
                >
                    <Image
                        source={data[2].img}
                        style={styles.imgStyl}
                    />

                    <View
                        style={{
                            height: '100%',
                            width: '100%',
                            backgroundColor: '#00000079',
                            position: 'absolute',
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}
                    >
                        <Text style={{color: '#fff'}}>+{data.length - 3}</Text>
                    </View>
                </View>

            </View>
        </View>
    )
}

export default PhotosList

const styles = StyleSheet.create({

    imgStyl: {
        height: '100%',
        width: '100%'
    }
})