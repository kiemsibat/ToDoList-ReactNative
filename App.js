import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  FlatList,
  Alert,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import Header from './components/Header/Header';
import TodoItem from './components/TodoItem/TodoItem';
import {LogBox} from 'react-native';
import AddTodo from './components/AddTodo/AddTodo';


const App = () => {
  const [todos, setTodos] = useState([
    {text: 'buy coffee', key: '1'},
    {text: 'create an app', key: '2'},
    {text: 'play on the switch', key: '3'},
  ]);

  const pressHandle = (key) => {
    setTodos((pre) => {
      return pre.filter((todo) => todo.key !== key);
    });
  };

  const submitHandler = (text) => {
    if (text.length > 3) {
      setTodos((pre) => {
        return [{text: text, key: Math.random().toString()}, ...pre];
      });
    } else {
      Alert.alert('ERROR', 'Todos must be over 3 characters long', [
        {text: 'UnderStood', onPress: () => console.log('Alert Closer')},
      ]);
    }
  };

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
        // console.log('dismisses keyboard')
      }}>
      <View style={styles.container}>
        {/* <Icon name="rowing" /> */}
        <Header HeaderName="My Todos" />
        <View style={styles.content}>
          <AddTodo submitHandler={submitHandler} />
          <View style={styles.list}>
            <FlatList
              data={todos}
              keyExtractor={(item) => item.key}
              renderItem={(item) => {
                return  <TodoItem pressHandle={pressHandle} item={item.item} /> 
              }}
            />
        
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    // padding: 50 50 0 50,
    paddingLeft: 50,
    paddingRight: 50,
    // paddingBottom:30,

    backgroundColor: 'pink',
    flex: 1,
  },
  list: {
    // marginTop:20,
    // paddingTop:20,
    backgroundColor: '#E9D56D',
    flex: 1,
  },
});
LogBox.ignoreAllLogs();
export default App;
