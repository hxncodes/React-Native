import { StyleSheet, Text, View, Image, ImageSourcePropType } from 'react-native'
import React, { PropsWithChildren } from 'react'

// import images
import DiceOne from '../assets/images/One.png'
import DiceTwo from '../assets/images/Two.png'
import DiceThree from '../assets/images/Three.png'
import DiceFour from '../assets/images/Four.png'
import DiceFive from '../assets/images/Five.png'
import DiceSix from '../assets/images/Six.png'

type DiceProps = PropsWithChildren<{
    imageUrl: ImageSourcePropType
}>

const Dice = ({ imageUrl }: DiceProps): JSX.Element => {
    return (
        <View>
            <Image style={styles.diceImage} source={imageUrl} />
        </View>
    )
}

const DiceApp = (): JSX.Element => {
    return (
        <View>
            <Text>hxn</Text>
        </View>
    )
}

export default DiceApp

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FFF2F2'
    },
    diceContainer: {
        margin: 12,
    },
    diceImage: {
        width: 200,
        height: 200,
    },
    rollDiceBtnText: {
        paddingVertical: 10,
        paddingHorizontal: 40,
        borderWidth: 2,
        borderRadius: 8,
        borderColor: '#E5E0FF',
        fontSize: 16,
        color: '#8EA7E9',
        fontWeight: '700',
        textTransform: 'uppercase'
    }

})