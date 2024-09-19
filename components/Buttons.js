import { View, StyleSheet, Button } from 'react-native'

export default function Buttons({ setData, clearMemory, removeCompleted }) {
  return (
    <View>
      <View style={styles.buttonContainer}>
        <Button title="Delete Completed" onPress={removeCompleted} />
      </View>

      <View style={styles.buttonContainer}>
        <Button
          title="Clear Memory"
          onPress={() => {
            clearMemory();
            setData([]);
          }}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    buttonContainer: {
      margin: 16,
    },
  });
