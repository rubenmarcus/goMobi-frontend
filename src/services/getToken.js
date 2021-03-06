import AsyncStorage from '@react-native-async-storage/async-storage';

const getToken = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('@storage_Key')


      return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch(e) {
      // error reading value
    }
  }


  export default getToken;