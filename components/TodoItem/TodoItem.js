import React, {useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

const TodoItem = ({item, pressHandle}) => {
  return (
    <TouchableOpacity onPress={() => pressHandle(item.key)}>
    
        <Text style={styles.item}>{item.text}</Text>
      
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  item: {
    padding: 20,
    marginBottom: 20,
    borderColor: 'black',
    borderWidth: 1,
    borderStyle: 'dashed',
    borderRadius: 10,
    textTransform: 'capitalize',
  },
});

export default TodoItem;
