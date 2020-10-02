import React, {useState} from 'react';
import {View, StyleSheet, FlatList,ScrollView} from 'react-native';
import Header from './components/Header/Header';
import TodoItem from './components/TodoItem/TodoItem';
// import Icon from 'react-native-vector-icons/FontAwesome';
import {Input} from 'react-native-elements';
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
    setTodos((pre) => {
      return [
        {text:text,key : Math.random().toString()},
        ...pre
      ]
    })
  }

  return (
    <View>
      <Header HeaderName="My Todos" />
      <View style={styles.List}>
        <AddTodo  submitHandler={submitHandler}/>
        <View>
        <FlatList
          data={todos}
          keyExtractor={(item) => item.key}
          renderItem={(item) => {
            return <TodoItem pressHandle={pressHandle} item={item.item} />;
          }}
        />
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  List: {
    padding: 50,
  },
  Text: {
    fontSize: 20,
    textTransform: 'uppercase',
  },
});
export default App;
