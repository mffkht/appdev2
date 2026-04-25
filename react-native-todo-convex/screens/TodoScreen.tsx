import { useState } from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import {
  Alert,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

import { useQuery, useMutation } from "convex/react";
import { api } from "../convex/_generated/api";
import { Id } from "../convex/_generated/dataModel";

const TodoScreen = () => {
  const [task, setTask] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  const todoList = useQuery(api.todos.get);
  const addTodo = useMutation(api.todos.add);
  const toggleTodoMutation = useMutation(api.todos.toggle);
  const deleteTodoMutation = useMutation(api.todos.remove);

  if (todoList === undefined) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Loading tasks...</Text>
      </View>
    );
  }

  const filterTodos = todoList.filter((item) =>
    item.text.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleAddTodo = async () => {
    if (task.trim().length === 0) return;
    await addTodo({ text: task });
    setTask("");
  };

  const toggleTodo = (id: Id<"todos">, currentStatus: boolean) => {
    toggleTodoMutation({ id, isCompleted: !currentStatus });
  };

  const confirmDelete = (id: Id<"todos">) => {
    Alert.alert("Delete Task", "Are you sure you want to remove this?", [
      { text: "Cancel", style: "cancel" },
      {
        text: "Delete",
        style: "destructive",
        onPress: () => deleteTodoMutation({ id }),
      },
    ]);
  };

  return (
    <View style={styles.container}>
      {/* HEADER */}
      <View style={styles.header}>
        <Text style={styles.title}>My Tasks</Text>

        <View style={styles.searchContainer}>
          <Ionicons name="search-outline" size={20} color="#666" />
          <TextInput
            placeholder="Search todos..."
            style={styles.searchBar}
            value={searchQuery}
            onChangeText={setSearchQuery}
          />
        </View>
      </View>

      {/* BODY */}
      <View style={styles.bodyContainer}>
        <ScrollView showsVerticalScrollIndicator={false}>
          {filterTodos.map((item) => (
            <View style={styles.todoItem} key={item._id}>
              <TouchableOpacity
                style={styles.textWrapper}
                onPress={() => toggleTodo(item._id, item.isCompleted)}
              >
                <Ionicons
                  name={
                    item.isCompleted
                      ? "checkmark-circle"
                      : "ellipse-outline"
                  }
                  size={28}
                  color={item.isCompleted ? "#7D7AFF" : "#CCC"}
                />
                <Text
                  style={[
                    styles.todoText,
                    item.isCompleted && styles.todoCompleted,
                  ]}
                >
                  {item.text}
                </Text>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => confirmDelete(item._id)}>
                <Ionicons name="trash-outline" size={24} color="#FF5252" />
              </TouchableOpacity>
            </View>
          ))}
        </ScrollView>

        {/* INPUT */}
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
          <View style={styles.inputWrapper}>
            <TextInput
              placeholder="Add a new task"
              style={styles.input}
              value={task}
              onChangeText={setTask}
            />
            <TouchableOpacity style={styles.addButton} onPress={handleAddTodo}>
              <Ionicons name="add" size={32} color="black" />
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
      </View>
    </View>
  );
};

export default TodoScreen;