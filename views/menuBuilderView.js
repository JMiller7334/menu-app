import React from "react";

//import ViewModel:
import ViewModel from '../viewmodels/menuBuilderViewModel';

//import UI componets :
//TODO: import UI
import { StyleSheet, Text, View, ScrollView, Button, Alert, SectionList, SafeAreaView } from 'react-native';
import SelectDropdown from 'react-native-select-dropdown';
const categories = ["Appetizers", "Lunch", "Dinner", "Pizza", "Dessert"];
const Colors = {
  darkGrey: '#202020',
  lightGrey: '#D9D9D9',
  darkGreen: '#1B3C33',
  lightGreen: '#FEC603'
}

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

function MenuBuilderView(){
    //TODO: Live data/useState variable will go here.

    ViewModel.callApi();

    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <View style={styles.button}>
            <Button
              title="Settings"
              onPress={() => Alert.alert('Under Construction')}
              color={Colors.lightGrey}
            />
          </View>
          <Text style={styles.title}>MENU</Text>
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
          <Button
            title="Orders"
            onPress={() => Alert.alert('Under Construction')}
            color='white'
          />
          <Button
            title="+"
            onPress={() => Alert.alert('Under Construction')}
            color='white'
          />
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
      flex: 0.4,
      justifyContent: "center",
      alignItems: 'center',
      backgroundColor: Colors.darkGreen,

    },
    title: {
      marginBottom: 20,
      fontSize: 60,
      letterSpacing: 30,
      color: Colors.lightGrey
    },
    dropdown: {
      flex: 1,
    },
    button: {
      width: '100%',
      flex: 0.8,
      flexDirection: 'row',
      justifyContent: 'flex-end',
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
      marginVertical: 8,
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
      width: '100%',
      flex: 0.1,
      flexDirection: "row",
      justifyContent: 'space-between',
      backgroundColor: Colors.lightGreen
    }
  });

export default MenuBuilderView;
