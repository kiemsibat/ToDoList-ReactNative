import React from 'react';
import {Text,StyleSheet,View} from 'react-native';

const Header = ({HeaderName}) => {
    return(
        <View style={styles.Container}>
            <Text style={styles.Text}>{HeaderName}</Text>
        </View>
    )
}

const styles= StyleSheet.create({
    Container:{
        backgroundColor: '#EF874D',
        height:80,
    },
    Text :{
        fontSize:30,
        textTransform:'uppercase',
        textAlign:'center',
        marginTop:20,
        fontWeight:'bold'
    }
})

export default Header;