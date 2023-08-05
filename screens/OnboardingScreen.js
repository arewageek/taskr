import React from 'react'
import { View, Image, Text, StyleSheet, Dimensions } from "react-native";
import Onboarding from "react-native-onboarding-swiper";
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useNavigation } from '@react-navigation/native'

import LottieView from 'lottie-react-native'

const {width, height} = Dimensions.get('window')

export function OnboardingScreen({ navigation }) {

    const handleDone = () => {
        AsyncStorage.setItem('userIsNew', 'false')
        navigation.navigate('Home')
    }
    
    return(
        <View style={styles.container}>
            <Onboarding
                pages={[
                    {
                        backgroundColor: '#048',
                        image: (
                            <View style={styles.lottie}>
                                <LottieView 
                                    style={styles.lottieAnimation} 
                                    source={require('../assets/lotties/welcome.json')} 
                                    autoPlay 
                                    loop 
                                    speed={0.5} />
                            </View>
                        ),
                        title: 'Welcome to Taskr',
                        subtitle: "Take control of your tasks, increase productivity, and stay organized with Taskr. Let's get started on your journey to better task management!"
                    },

                    {
                        backgroundColor: 'purple',
                        image: (
                            <View style={styles.lottie}>
                                <LottieView 
                                    style={styles.lottieAnimation} 
                                    source={require('../assets/lotties/join.json')} 
                                    autoPlay 
                                    loop 
                                    speed={0.5} />
                            </View>
                        ),
                        title: 'Stay on Top of Your To-Dos',
                        subtitle: "With Taskr, you can easily create tasks, set due dates, and organize them into categories. Never miss a deadline again and keep your priorities in check."
                    },

                    {
                        backgroundColor: 'lightblue',
                        image: (
                            <View style={styles.lottie}>
                                <LottieView 
                                    style={styles.lottieAnimation} 
                                    source={require('../assets/lotties/remember.json')} 
                                    autoPlay 
                                    loop 
                                    speed={0.5} />
                            </View>
                        ),
                        title: 'Never Forget Anything',
                        subtitle: "Stay on track with customizable reminders and notifications. Taskr will help you stay focused and ensure you never miss an important task or event."
                    },

                    {
                        backgroundColor: '#fff',
                        image: (
                            <View style={styles.lottie}>
                                <LottieView 
                                    style={styles.lottieAnimation} 
                                    source={require('../assets/lotties/analyse.json')} 
                                    autoPlay 
                                    loop 
                                    speed={0.5} />
                            </View>
                        ),
                        title: 'Analyze and Improve',
                        subtitle: "Monitor your progress, track completed tasks, and gain insights into your productivity. Taskr empowers you to analyze your performance and make improvements for better efficiency."
                    },
                ]}

                containerStyles={styles.slides}
                onDone={handleDone}
                onSkip={handleDone}
            />
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        flex: 1,
    },
    slides: {
        fontSize: 5,
        width: width * 0.9,
        height: width * 0.8,
    },
    lottie: {
        height: width,
        width: width * 0.9,
    },
    lottieAnimation: {
        height: width,
        width: width * 0.9,
    }
})