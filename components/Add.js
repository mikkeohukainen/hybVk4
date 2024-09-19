import { View, TextInput, StyleSheet, Button } from "react-native";
import { useState } from "react";

export default function Add({ add }) {
  const [name, setName] = useState("");

  const save = () => {
    add(name);
    setName("");
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.form}
        value={name}
        onChangeText={(text) => setName(text)}
        placeholder="Add item..."
      />
      <Button title="save" onPress={() => save(name)} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 16,
    marginBottom: 16,
  },
  form: {
    fontSize: 18,
  },
});