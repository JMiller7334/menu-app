import React from "react";

//import ViewModel:
import ViewModel from '../viewmodels/menuBuilderViewModel';

//import UI componets :
//TODO: import UI
import { StyleSheet, Text, View } from 'react-native';

function MenuBuilderView(){
    //TODO: Live data/useState variable will go here.

    ViewModel.callApi();

    return (
        <View style={styles.container}>
            <Text>MenuBuilderScreen: under construction:</Text>
        </View>
    );
}

/* msg: Hey below I would recommend seperating the styling into a seperate
document. Navigation of screens will likelt need to be handled in this
file too as well, but you may also want to look into best practics too - JM
*/
const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center', // Center horizontally
      justifyContent: 'center', // Center vertically
    },
  });

export default MenuBuilderView;
