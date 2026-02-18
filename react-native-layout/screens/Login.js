import React from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const Login = ({ onSwitch }) => {
  return (
    <View style={styles.container}>
      {/* Login Image */}
      <Image
        source={require('../assets/images/login.png')}
        style={styles.loginImage}
      />

      {/* Title */}
      <Text style={styles.title}>Login</Text>

      {/* Email Input */}
      <View style={styles.inputBox}>
        <Ionicons name="mail" size={20} color="#ff69b4" />
        <TextInput
          placeholder="Email"
          style={styles.input}
          placeholderTextColor="#ffb6c1"
        />
      </View>

      {/* Password Input */}
      <View style={styles.inputBox}>
        <Ionicons name="lock-closed" size={20} color="#ff69b4" />
        <TextInput
          placeholder="Password"
          secureTextEntry
          style={styles.input}
          placeholderTextColor="#ffb6c1"
        />
      </View>

      {/* Login Button */}
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>

      {/* Switch to Signup */}
      <Text style={styles.switchText}>
        Don’t have an account?
        <Text style={styles.link} onPress={onSwitch}>
          {' '}
          Sign up
        </Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#ffe6f0',
  },
  loginImage: {
    width: 150,
    height: 150,
    alignSelf: 'center',
    marginBottom: 20,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 28,
    textAlign: 'center',
    marginBottom: 25,
    fontWeight: 'bold',
    color: '#ff1493',
  },
  inputBox: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 25,
    padding: 12,
    marginBottom: 15,
    backgroundColor: '#fff0f5',
  },
  input: {
    marginLeft: 10,
    flex: 1,
    color: '#ff1493',
  },
  button: {
    backgroundColor: '#ff69b4',
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

export default Login;
