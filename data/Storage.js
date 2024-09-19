import AsyncStorage from "@react-native-async-storage/async-storage";

const STORAGE_KEY = "@shopping_list";

const getData = async () => {
  try {
    const value = await AsyncStorage.getItem(STORAGE_KEY);
    const json = JSON.parse(value);
    return json;
  } catch (e) {
    console.log(e);
    console.log("Error getting data");
  }
};

const storeData = async (value) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem(STORAGE_KEY, jsonValue);
  } catch (e) {
    console.log(e);
    console.log("Error storing data");
  }
};

const clearMemory = async () => {
  try {
    await AsyncStorage.clear();
  } catch (e) {
    console.log(e);
    console.log("Error clearing memory");
  }
};

export { getData, storeData, clearMemory };
