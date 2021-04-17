import AsyncStorage from '@react-native-async-storage/async-storage';

export default class Storage {
    static instance = new Storage();

    store = async (key, value) =>{
        try {
            await AsyncStorage.setItem(key, value);
            return true;
        } catch (e) {
        // saving error
            console.log("storage store err",e);
            return false;
        }
    }

    get = async (key) =>{
        try{
            return await AsyncStorage.getItem(key);
        }catch(e){
            console.log("storage get err",e);
            throw Error(e);
        }
    }


    multiGet = async (keys) =>{
        try{
            return await AsyncStorage.multiGet(keys);
        }catch(e){
            console.log("storage multiGet err",e);
            throw Error(e);
        }
    }

    getAllKeys = async () =>{
        try{
            return await AsyncStorage.getAllKeys();
        }catch(e){
            console.log("storage getAllKeys err",e);
            throw Error(e);
        }
    }


    remove = async (key) =>{
        try{
            await AsyncStorage.removeItem(key);
            return true;
        }catch(e){
            console.log("storage remove err",e);
            return false;
        }
    }
}

