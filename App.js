import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect} from 'react';
import { StyleSheet, View, Button, FlatList } from 'react-native';
import GoalInput from './components/GoalInput';
import GoalItem from './components/GoalItem';

export default function App() {
  const [isAddMode, setIsAddMode] = useState(false);
  const [goals, setGoals] = useState([]);

  const addGoalHandler = (goalTitle) => {
    if (!goalTitle.trim()){
      return;
    }
    setGoals([...goals, {id: `${goalTitle}-${Math.random().toString()}`, value: goalTitle}]);
    setIsAddMode(false);
  }

  const removeGoalHandler = (goalId) => {
    setGoals(goals.filter(goal => goal.id!==goalId));
  }

  return (
    <View style={styles.screen}>
      <Button title="Add New Goal" onPress={() => setIsAddMode(true)}/>
      <GoalInput visible={isAddMode} onAddGoal = {addGoalHandler} onCancel={() => setIsAddMode(false)}/>
      <FlatList 
        keyExtractor={(item) => item.id}
        data={goals} 
        renderItem={(itemData) =>
          <GoalItem title={itemData.item.value} onDelete={() => removeGoalHandler(itemData.item.id)}/>
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50
  }
});
