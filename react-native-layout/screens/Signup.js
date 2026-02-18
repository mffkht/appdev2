import React from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const Signup = ({ onSwitch }) => {
  return (
    <View style={styles.container}>
      {/* Title */}
      <Text style={styles.title}>Signup</Text>

      {/* Username */}
      <View style={styles.inputBox}>
        <Ionicons name="person" size={20} color="#ff69b4" />
        <TextInput
          placeholder="Username"
          style={styles.input}
          placeholderTextColor="#ffb6c1"
        />
      </View>

      {/* Email */}
      <View style={styles.inputBox}>
        <Ionicons name="mail" size={20} color="#ff69b4" />
        <TextInput
          placeholder="Email"
          style={styles.input}
          placeholderTextColor="#ffb6c1"
        />
      </View>

      {/* Password */}
      <View style={styles.inputBox}>
        <Ionicons name="lock-closed" size={20} color="#ff69b4" />
        <TextInput
          placeholder="Password"
          secureTextEntry
          style={styles.input}
          placeholderTextColor="#ffb6c1"
        />
      </View>

      {/* Signup Button */}
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Create Account</Text>
      </TouchableOpacity>

      {/* Switch to Login */}
      <Text style={styles.switchText}>
        Already have an account?
        <Text style={styles.link} onPress={onSwitch}> Login</Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#ffe6f0', // soft pink background
  },
  title: {
    fontSize: 28,
    textAlign: 'center',
    marginBottom: 25,
    fontWeight: 'bold',
    color: '#ff1493', // hot pink title
  },
  inputBox: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'gray', // pink border
    borderRadius: 25,
    padding: 12,
    marginBottom: 15,
    backgroundColor: '#fff0f5', // very light pink inside
  },
  input: {
    marginLeft: 10,
    flex: 1,
    color: '#ff1493',
  },
  button: {
    backgroundColor: '#ff69b4', // pink button
    padding: 15,
    borderRadius: 25,
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
  },
  switchText: {
    textAlign: 'center',
    marginTop: 15,
    color: '#ff1493',
  },
  link: {
    color: '#ff1493',
    fontWeight: 'bold',
  },
});

export default Signup;
