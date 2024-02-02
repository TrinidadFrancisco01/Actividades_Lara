import React from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.logo}>Instagram</Text>

      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Phone number, username or email"
          autoCapitalize="none"
          autoCorrect={false}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry={true}
        />
        <TouchableOpacity style={styles.loginButton}>
          <Text style={styles.loginButtonText}>Log In</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.separator}>
        <View style={styles.line}></View>
        <Text style={styles.separatorText}>OR</Text>
        <View style={styles.line}></View>
      </View>

      <View style={styles.footer}>
        <Image
          source={require('./assets/logo-facebook.png')} // Ajusta la ruta según tu estructura de carpetas
          style={styles.footerImage}
        />
        <Text style={styles.footerText}>Continue as Dave Johnson</Text>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fafafa',
  },
  logo: {
    fontSize: 40,
    fontWeight: 'bold',
    marginBottom: 30,
    fontStyle: 'italic',
  },
  form: {
    width: '80%',
  },
  input: {
    height: 50,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 15,
    paddingHorizontal: 10,
  },
  loginButton: {
    backgroundColor: '#3498db',
    paddingVertical: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  loginButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  separator: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20,
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: 'gray',
  },
  separatorText: {
    marginHorizontal: 10,
    color: 'gray',
  },
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
  },
  footerImage: {
    width: 30,
    height: 30,
    marginRight: 10,
  },
  footerText: {
    color: 'gray',
  },
});