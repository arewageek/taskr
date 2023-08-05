import AyncStorage from '@react-native-async-storage/async-storage'

export function getItem (item){
    const storage = AsyncStorage.getItem(item)
    console.log(storage)
}