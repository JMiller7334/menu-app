import React from "react";

//import ViewModel:
import ViewModel from '../viewmodels/menuBuilderViewModel';

//import UI componets :
//TODO: import UI
import { StyleSheet, View, TextInput, Text } from 'react-native';

function ItemAdder(){
    //TODO: Live data/useState variable will go here.

    ViewModel.callApi();
    const [text, onChangeText] = React.useState('');

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                onChangeText={onChangeText}
                value={text}
                placeholder="Item"
              />
              <Text></Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
          flex: 1,
          alignItems: 'center', // Center horizontally
          justifyContent: 'center', // Center vertically

        },

        input: {
            height: 40,
            width: 200,
            margin: 12,
            borderWidth: 1,
            padding: 10,
        }
})

export default ItemAdder;