import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';

export default function App() {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const borrar = (button) => {
    if (button === '=') {
      calculateResult();
    } else if (button === 'C') {
      clearInput();
    } else {
      setInput(input + button);
    }
  };

  const calculateResult = () => {
    try {
      const evalResult = eval(input);
      if (evalResult === Infinity || isNaN(evalResult)) {
        setResult('Error: Numero invalido');
      } else {
        setResult(evalResult.toString());
      }
    } catch (error) {
      setResult('Error');
    }
  };

  const clearInput = () => {
    setInput('');
    setResult('');
  };

  return (
    <View style={styles.container}>
      <View style={styles.operationsContainer}>
        <Text style={styles.operationsText}>{input}</Text>
      </View>
      <View style={styles.resultContainer}>
        <Text style={styles.resultText}>{result}</Text>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button1} onPress={() => borrar('C')}>
          <Text style={styles.buttonText}>C</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button1} onPress={() => borrar('()')}>
          <Text style={styles.buttonText}>()</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button1} onPress={() => borrar('%')}>
          <Text style={styles.buttonText}>%</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button1} onPress={() => borrar('/')}>
          <Text style={styles.buttonText}>÷</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => borrar('7')}>
          <Text style={styles.buttonText}>7</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => borrar('8')}>
          <Text style={styles.buttonText}>8</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => borrar('9')}>
          <Text style={styles.buttonText}>9</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button1} onPress={() => borrar('*')}>
          <Text style={styles.buttonText}>x</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => borrar('4')}>
          <Text style={styles.buttonText}>4</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => borrar('5')}>
          <Text style={styles.buttonText}>5</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => borrar('6')}>
          <Text style={styles.buttonText}>6</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button1} onPress={() => borrar('-')}>
          <Text style={styles.buttonText}>-</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => borrar('1')}>
          <Text style={styles.buttonText}>1</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => borrar('2')}>
          <Text style={styles.buttonText}>2</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => borrar('3')}>
          <Text style={styles.buttonText}>3</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button1} onPress={() => borrar('+')}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.zeroButton]} onPress={() => borrar('0')}>
          <Text style={styles.buttonText}>0</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => borrar('.')}>
          <Text style={styles.buttonText}>.</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button1} onPress={() => borrar('=')}>
          <Text style={styles.buttonText}>=</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: '#ffff',
    alignItems: 'center',
  },
  operationsContainer: {
    alignItems: 'flex-end',
    paddingRight: 10,
    paddingBottom: 10,
    borderWidth: 2.5,
    borderColor: '#000',
    width: windowWidth * 0.96,
  },
  operationsText: {
    color: '#000000',
    fontSize: 35,
  },
  resultContainer: {
    alignItems: 'flex-end',
    paddingRight: 10,
    paddingBottom: 10,
  },
  resultText: {
    color: '#000000',
    fontSize: 45,
  },
  buttonContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: windowWidth,
    paddingBottom: 10,
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffffff',
    height: windowWidth * 0.24,
    width: windowWidth * 0.24,
    borderWidth: 1,
    borderRadius: windowWidth * 0.24 / 2,
    margin: 1,
  },
  button1: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffbf00',
    height: windowWidth * 0.24,
    width: windowWidth * 0.24,
    borderWidth: 1,
    borderRadius: windowWidth * 0.24 / 2,
    margin: 1,
  },
  zeroButton: {
    width: windowWidth * 0.5,
  },
  buttonText: {
    color: '#000000',
    fontSize: 32,
  },
});