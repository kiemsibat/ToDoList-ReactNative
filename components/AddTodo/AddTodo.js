import React from 'react';
import { useState } from 'react';
import {Text,View,StyleSheet,Button,TextInput} from 'react-native';

const AddTodo = ({submitHandler}) => {
    const [text,setText] = useState('')
    const handleChange = (val) => {
        setText(val)
        console.log(val);
    }
    return(
        <View  style={styles.Button}>
            <TextInput 
               style={styles.input}
                placeholder="Add New Todo"
                onChangeText={handleChange}
            />
            <Button onPress={() => submitHandler(text) }  title="Add" color="coral"/>
        </View>
    )
}
const styles = StyleSheet.create({
    input:{
        marginBottom:20,
        padding:10,
        borderBottomWidth:1,
        borderBottomColor:'black',
        paddingHorizontal:8,
        paddingVertical:6,
        borderStyle:'dashed',
    },
    Button:{
        marginBottom:10,
    }
})

export default AddTodo;