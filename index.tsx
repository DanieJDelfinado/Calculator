import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, TextInput, Button } from 'react-native';

export default function HomeScreen() {
  
  const [firstNumber, setFirstNumber] = useState('');
  const [secondNumber, setSecondNumber] = useState('');
  const [result, setResult] = useState('');

  
  const addNumbers = () => {
    const num1 = parseFloat(firstNumber);
    const num2 = parseFloat(secondNumber);
    if (!isNaN(num1) && !isNaN(num2)) {
      setResult((num1 + num2).toString());
    } else {
      setResult('Invalid input');
    }
  };

  
  const subtractNumbers = () => {
    const num1 = parseFloat(firstNumber);
    const num2 = parseFloat(secondNumber);
    if (!isNaN(num1) && !isNaN(num2)) {
      setResult((num1 - num2).toString());
    } else {
      setResult('Invalid input');
    }
  };

  
  const multiplyNumbers = () => {
    const num1 = parseFloat(firstNumber);
    const num2 = parseFloat(secondNumber);
    if (!isNaN(num1) && !isNaN(num2)) {
      setResult((num1 * num2).toString());
    } else {
      setResult('Invalid input');
    }
  };

  
  const divideNumbers = () => {
    const num1 = parseFloat(firstNumber);
    const num2 = parseFloat(secondNumber);
    if (!isNaN(num1) && !isNaN(num2)) {
      if (num2 !== 0) {
        setResult((num1 / num2).toString());
      } else {
        setResult('Cannot divide by zero');
      }
    } else {
      setResult('Invalid input');
    }
  };

  const resetFields = () => {
    setFirstNumber('');
    setSecondNumber('');
    setResult('');
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <View style={styles.rowContainer}>
          <Text style={styles.label}>1st Number:</Text>
          <TextInput
            style={styles.input}
            keyboardType='numeric'
            value={firstNumber}
            onChangeText={setFirstNumber}
            placeholder='Enter First Number'
          />
        </View>

        <View style={styles.rowContainer}>
          <Text style={styles.label}>2nd Number:</Text>
          <TextInput
            style={styles.input}
            keyboardType='numeric'
            value={secondNumber}
            onChangeText={setSecondNumber}
            placeholder='Enter Second Number'
          />
        </View>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={addNumbers} style={styles.button}>
          <Text style={styles.buttonText}>ADD</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={subtractNumbers} style={styles.button}>
          <Text style={styles.buttonText}>SUBTRACT</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={multiplyNumbers} style={styles.button}>
          <Text style={styles.buttonText}>MULTIPLY</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={divideNumbers} style={styles.button}>
          <Text style={styles.buttonText}>DIVIDE</Text>
        </TouchableOpacity>
      </View>

     <View style = {styles.rowContainer}>
     <Text style= {{fontSize: 20}}>Result:</Text>
     <Text style={styles.result}>{result}</Text>
     </View>
     
           <Button title='Reset' onPress={resetFields} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 10,
    backgroundColor: 'white',
  },
  inputContainer: {
    marginBottom: 20, 
  },
  input: {
    borderWidth: 1,
    borderRadius: 50,
    padding: 7,
    width: '65%',
    marginRight: 10,
  },
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  label: {
    fontSize: 19,
    marginRight: 10,
  },
  buttonContainer: {
    marginBottom: 20, 
  },

  button: {
    backgroundColor: 'pink',
    padding: 10,
    borderRadius: 50,
    marginVertical: 5,
    alignItems: 'center',
  },
  buttonText: {
    textAlign: 'center',
    fontSize: 16,
  },
  result: {
    fontSize: 20,
    textAlign: 'center',
      marginLeft: 50

  },
});
