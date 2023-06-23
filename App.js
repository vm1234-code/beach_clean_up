import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, ScrollView } from 'react-native';

const jsonData = require('./trashHeaders.json')

const App = () => {
  const [inputValues, setInputValues] = useState({});

  const handleInputChange = (title, value) => {
    setInputValues((prevValues) => ({ ...prevValues, [title]: value }));
  };

  return (
    <View style={styles.container}>
      {Object.entries(jsonData).map(([title, values]) => (
        <View key={title} style={styles.rowContainer}>
          <Text style={styles.title}>{title}</Text>
          {values.map((value, index) => (
            <View key={index}>
              <Text style={styles.inputTitle}>{value}</Text>
              <TextInput
                style={styles.input}
                placeholder="Enter value"
                keyboardType="numeric"
                onChangeText={(text) => handleInputChange(value, text)}
                value={inputValues[value] || ''}
              />
            </View>
          ))}

        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  rowContainer: {
    marginBottom: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    padding: 8,
    marginBottom: 8,
  },
});

export default App;
