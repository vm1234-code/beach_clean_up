import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, ScrollView, TouchableWithoutFeedback, Keyboard, KeyboardAvoidingView } from 'react-native';

const jsonData = require('./trashHeaders.json')

const App = () => {
  const [inputValues, setInputValues] = useState({});

  const handleInputChange = (title, value) => {
    setInputValues((prevValues) => ({ ...prevValues, [title]: value }));
  };

var date = new Date().getDate(); //To get the Current Date
var month = new Date().getMonth() + 1; //To get the Current Month
var year = new Date().getFullYear(); //To get the Current Year

//if 


  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
    <KeyboardAvoidingView behavior="position" style={styles.container}>
    <Text style={styles.mainTitle}>Surfrider Beach Clean-Up {'\n'} {month}/{date}/{year}</Text>
   
    <ScrollView style={styles.scrollContainer}>
      {Object.entries(jsonData).map(([title, values]) => (
        <View key={title} style={styles.rowContainer}>
          <Text style={styles.title}>{title}</Text>
          {values.map((value, index) => (
            <View style={styles.inputLine} key={index}>
              <Text style={styles.inputTitle}>{value}</Text>
              <TextInput
                style={styles.inputNumber}
                placeholder="Enter value"
                keyboardType="numeric"
                onChangeText={(text) => handleInputChange(value, text)}
                value={inputValues[value] || ''}
              />
              
            </View>
          ))}

        </View>

        
      ))}

      <TextInput
                style={styles.input}
                placeholder="Enter value"
                keyboardType="numeric"
      />

    
    </ScrollView>
    </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
    
  );
};

const styles = StyleSheet.create({
  mainTitle:{
    textAlign: 'center',
    paddingTop: 60,

  },
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 30,

  },
  scrollContainer:{
    flex: 1,
  },

  rowContainer: {
    marginBottom: 16,
    backgroundColor: 'skyblue',
    justifyContent:'center',
    alignItems: 'center',
    width: 300,
  },
  
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
    alignSelf: 'flex-start'
  },

  inputTitle:{
    paddingRight:15,
  },
  
  //This puts the input box next to the title
  inputLine: {
    flexDirection: 'row',
    alignItems: 'center',

  },
  inputNumber: {
    height:40,
    width:60,
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 4,
    padding: 8,
    marginBottom: 8,
  },
});

export default App;
