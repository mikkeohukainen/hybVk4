import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  SafeAreaView,
  FlatList,
} from "react-native";
import Constants from "expo-constants";
import Row from "./components/Row";
import Add from "./components/Add";
import Buttons from "./components/Buttons";
import { useCallback, useState, useEffect } from "react";
import uuid from "react-native-uuid";
import { getData, storeData, clearMemory } from "./data/Storage";

export default function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    getAndSetData();
  }, []);

  useEffect(() => {
    storeData(data);
  }, [data]);

  const getAndSetData = async () => {
    const data = await getData();
    setData(data);
  };

  const add = useCallback(
    (name) => {
      const newItem = {
        id: uuid.v4(),
        name: name,
        completed: false,
      };
      const tempData = [...data, newItem];
      setData(tempData);
    },
    [data]
  );

  const removeCompleted = useCallback(() => {
    const tempData = data.filter((item) => !item.completed);
    setData(tempData);
  });

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.headingText}>Todo List</Text>
      <Add add={add} />
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Row item={item} data={data} setData={setData}></Row>
        )}
      />
      <Buttons
        removeCompleted={removeCompleted}
        clearMemory={clearMemory}
        setData={setData}
      />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
  },
  headingText: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
    textAlign: "center",
    marginBottom: 16,
  },
});
