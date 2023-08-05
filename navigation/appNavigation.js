import { StatusBar } from 'expo-status-bar'
import React, { useEffect, useState } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { StyleSheet, View } from 'react-native'

import { getItem } from '../utils/asyncStorage'
import { HomeScreen, OnboardingScreen, Signin } from '../screens'

const Stack = createNativeStackNavigator();

export default function(){
    const [isNewUser, setIsNewUser] = useState(1)
    
    const checkOnboardingState = async () => {
        const checkIfUserIsNew = await getItem('isNewUser')
        if(checkIfUserIsNew){
            console.log("New")
        }
        else{
            console.log("No")
        }
    }

    useState(() => {
        checkOnboardingState()
    }, [checkIfUserIsNew])
    
    return(
        <NavigationContainer>
            <View style={styles.container}>
                <StatusBar
                    backgroundColor='#fff'
                    barStyle="light-content"
                />
                <Stack.Navigator initialRouteName={"Home"}>
                    <Stack.Screen name="Taskr" component={OnboardingScreen} />
                    <Stack.Screen name="Home" component={HomeScreen} />
                    <Stack.Screen name="Signin" component={Signin} />
                </Stack.Navigator>
            </View>
        </NavigationContainer>
    )
}

const styles = StyleSheet.create({
    container: {
      // paddingHorizontal: 20,
      // paddingVertical: 10,
      backgroundColor: '#fff',
      color: '#888',
      flex: 1, 
      justifyContent: 'center',
    }
})