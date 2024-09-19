import { Text, StyleSheet, Pressable } from "react-native";

export default function Row({ item, data, setData }) {
  const toggleComplete = () => {
    const updatedData = data.map((d) =>
      d.id === item.id ? { ...d, completed: !d.completed } : d
    );
    setData(updatedData);
  };

  return (
    <Pressable style={styles.row} onPress={toggleComplete}>
      <Text
        style={[item.completed ? styles.rowTextStrikeThrough : styles.rowText]}
      >
        {item.name}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  rowText: {
    fontSize: 18,
    padding: 4,
    margin: 4,
  },
  rowTextStrikeThrough: {
    fontSize: 18,
    padding: 4,
    margin: 4,
    textDecorationLine: "line-through",
  },
});
