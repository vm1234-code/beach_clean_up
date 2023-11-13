import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, ScrollView, TouchableWithoutFeedback, Keyboard, KeyboardAvoidingView } from 'react-native';

// Load JSON data from the file 'trashHeaders'
const jsonData = require('./trashHeaders.json')

//Functional component named 'App'
const App = () => {

  // State to manage input values
  const [inputValues, setInputValues] = useState({});
  
  //Function to handle changes in TextInput
  const handleInputChange = (title, value) => {
    setInputValues((prevValues) => ({ ...prevValues, [title]: value }));
  };

// Get current date, month, and year
var date = new Date().getDate(); //To get the Current Date
var month = new Date().getMonth() + 1; //To get the Current Month
var year = new Date().getFullYear(); //To get the Current Year

// Render the UI
  return (

    // Dismiss the keyboard when tapping outside of a TextInput
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>

    {/* Adjust the view when the keyboard is open */}
    <KeyboardAvoidingView behavior="position" style={styles.container}>
    <Text style={styles.mainTitle}>Surfrider Beach Clean-Up {'\n'} {month}/{date}/{year}</Text>

    {/* Scrollable container for the form */}
    <ScrollView style={styles.scrollContainer}>

      {/* Map through the JSON data and render input fields */}
      {Object.entries(jsonData).map(([title, values]) => (
        <View key={title} style={styles.rowContainer}>
          
          {/* Display the title for the current section */}
          <Text style={styles.title}>{title}</Text>

          {/* Map through values in the current section and render input fields and title */}
          {values.map((value, index) => (
            <View style={styles.inputLine} key={index}>
              <Text style={styles.inputTitle}>{value}</Text>
              
              {/** Input field for entering numeric values */}
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

      

    
    </ScrollView>
    </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
    
  );
};

// Styles for the components
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
