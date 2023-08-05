import React from 'react'
import { View, StyleSheet, Text } from 'react-native'

export function HomeScreen({ navigation }) {
    return(
        <View style={styles.container}>
            <Text style={styles.text}>
                Welcome back
            </Text>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 10,
        paddingVertical: 10
    },
    text: {
        color: '#f00'
    }
})