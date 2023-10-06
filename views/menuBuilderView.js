import React from "react";

//import ViewModel:
import ViewModel from '../viewmodels/menuBuilderViewModel';

//import UI componets :
//TODO: import UI
import { StyleSheet, TouchableOpacity, Text, View, ScrollView, Button, Alert, SectionList, SafeAreaView } from 'react-native';
import SelectDropdown from 'react-native-select-dropdown';
const Colors = {
  darkGrey: '#202020',
  lightGrey: '#D9D9D9',
  darkGreen: '#1B3C33',
  lightGreen: '#FEC603'
};
const categories = ["Appetizers", "Lunch", "Dinner", "Pizza", "Dessert"];


// test data
const DATA = [
  {
    title: 'Main dishes',
    data: ['Pizza', 'Burger', 'Risotto'],
  },
  {
    title: 'Sides',
    data: ['French Fries', 'Onion Rings', 'Fried Shrimps'],
  },
  {
    title: 'Drinks',
    data: ['Water', 'Coke', 'Beer'],
  },
  {
    title: 'Desserts',
    data: ['Cheese Cake', 'Ice Cream'],
  },
];

// import alertToTest from './testing';

function MenuBuilderView(){
    //TODO: Live data/useState variable will go here.

    ViewModel.callApi();

    /* Menu text is like  that because styling with
       letter spacing causes misalignment in view */
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => Alert.alert('Under Construction')} style={styles.button}>
            <Text>Settings</Text>
          </TouchableOpacity>
          <Text style={styles.title}>M  E  N  U</Text>
          <SelectDropdown
            data={categories}
            style={styles.dropdown}
            onSelect={(selectedItem, index) => {
              console.log(selectedItem, index)
            }}
            buttonTextAfterSelection={(selectedItem, index) => {
              // text represented after item is selected
              return selectedItem
            }}
            rowTextForSelection={(item, index) => {
              // text represented for each item in dropdown
              return item
            }}
          />
        </View>
        <ScrollView style={styles.scrollView}>
          <SectionList
            sections={DATA}
            keyExtractor={(item, index) => item + index}
            renderItem={({item}) => (
              <View style={styles.item}>
                <Text style={styles.menuTitle}>{item}</Text>
              </View>
            )}
            renderSectionHeader={({section: {title}}) => (
              <Text style={styles.category}>{title}</Text>
            )}
          />
        </ScrollView>
        <View style={styles.footer}>
          <TouchableOpacity style={styles.footerordersbuttoncontainer} onPress={() => Alert.alert('Under Construction')}>
            <Text style={styles.footerbutton} >Orders</Text>
          </TouchableOpacity>  
          <View style={styles.footeraddbuttoncontainer}>
            <Text style={styles.footerbutton} onPress={() => Alert.alert('Under construction')}>+</Text>
          </View>
        </View>
      </SafeAreaView>
    );
}

/* msg: Hey below I would recommend seperating the styling into a seperate
document. Navigation of screens will likelt need to be handled in this
file too as well, but you may also want to look into best practics too - JM
*/

const styles = StyleSheet.create({
    container: {
      backgroundColor: Colors.darkGrey,
      flex: 1,
      alignItems: 'center', // Center secondary axis
      justifyContent: 'center', // Center main axis

    },
    header: {
      width: '100%',
      flex: 0.4,
      justifyContent: "center",
      alignItems: 'center',
      backgroundColor: Colors.darkGreen,

    },
    title: {
      marginBottom: 20,
      fontSize: 50,
      color: Colors.lightGrey
    },
    dropdown: {
      flex: 1,
    },
    button: {
      backgroundColor: '#ffffff',
      width: '100%',
      color: Colors.lightGrey
    },
    scrollView: {
      flex: 1,
      width: '100%',
      paddingLeft: 50,
      backgroundColor: Colors.darkGrey
    },
    item: {
      padding: 20,
      paddingBottom: 50
    },
    category: {
      marginTop: 50,
      fontSize: 48,
      color: Colors.lightGreen,
    },
    menuTitle: {
      color: Colors.lightGrey,
      fontSize: 24,
    },
    footer: {
      position: 'absolute',
      width: '100%',
      height: '10%',
      padding: 20,
      paddingBottom: 100,
      bottom: 0,
      flex: 1,
      flexDirection: "row",
      justifyContent: 'space-between',
      aligncontent: 'center',
      backgroundColor: Colors.lightGreen
    },
    footerordersbuttoncontainer: {
      backgroundColor: Colors.darkGreen,
      padding: 10,
      width: 130,
      height: 50,
      borderRadius: 90,
      justifyContent: 'center',
      alignItems: 'center',
    },
    footeraddbuttoncontainer: {
      backgroundColor: Colors.darkGreen,
      padding: 0,
      width: 50,
      height: 50,
      borderRadius: 90,
      justifyContent: 'center',
      alignItems: 'center',
    },
    footerbutton: {    
      fontSize: 30,
      color: '#ffffff'
    }
  });

export default MenuBuilderView;
