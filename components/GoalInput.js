import React, {useState} from 'react';
import { View, TextInput, Button, Modal, StyleSheet } from 'react-native';

const GoalInput = (props) => {
    const [enteredGoal, setEnteredGoal] = useState('');

    const addGoalHandler = () => {
        props.onAddGoal(enteredGoal);
        setEnteredGoal('');
    }

    const cancelGoalHandler = () => {
        props.onCancel();
        setEnteredGoal('');
    }

    return (
        <Modal visible={props.visible} animationType="slide">
            <View style={styles.inputContainer}>
                <TextInput 
                    placeholder="Course Goal" 
                    value={enteredGoal}
                    onChangeText={setEnteredGoal}
                    style={styles.input}
                />
                <View style={styles.buttonGroup}>
                    <View style={styles.button}>
                        <Button title="Cancel" color="red" onPress={cancelGoalHandler} />
                    </View>
                    <View style={styles.button}>
                        <Button title="Add" onPress={addGoalHandler} />
                    </View>
                </View>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        justifyContent: 'center', 
        alignItems: 'center',
      },
      input: {
        width: '80%', 
        borderColor: 'black', 
        borderWidth: 1, 
        padding: 10,
        marginBottom: 10,
      },
      buttonGroup: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '60%',
        marginTop: 20,
      },
      button: {
          width: '40%'
      }
});

export default GoalInput;