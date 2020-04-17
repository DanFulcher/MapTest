import React from 'react';
import {TouchableOpacity, View, Text, StyleSheet} from 'react-native';

const Button = props => {
  console.log(props);
  return (
    <TouchableOpacity onPress={() => props.handlePress()}>
      <View style={styles.button}>
        <Text style={styles.buttonText}>{props.title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'blue',
    padding: 20,
    width: '100%',
    maxWidth: 300,
    borderRadius: 25,
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
  },
});

export default Button;
