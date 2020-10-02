import React, {useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {Icon} from 'react-native-elements';
const TodoItem = ({item, pressHandle}) => {
  return (
    <TouchableOpacity onPress={() => pressHandle(item.key)}>
      <View style={styles.item}>
        <Text style={styles.itemText}>{item.text}</Text>
        <Icon name="rowing" />
      </View>
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
    borderRadius: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  itemText:{
    textTransform: 'capitalize',
  }
});

export default TodoItem;
