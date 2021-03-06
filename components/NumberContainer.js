import React from 'react'
import { StyleSheet, Text, View, } from 'react-native'

import Colors from '../constants/colors'

const NumberContainer = (props) => {
    return(
        <View style={{...styles.container, ...props.style}}>
            <Text style={styles.number}>{props.children}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        fontSize: 20,
        padding: 7,
        borderColor: Colors.transparent,
        borderWidth: 2,
        borderRadius: 10,
        marginVertical: 10,
        justifyContent: 'center', 
        alignItems: 'center',
    },
    number: {
        color: Colors.transparent,
        fontSize: 25,
        paddingHorizontal: 5,
    }
})

export default NumberContainer