import React from "react";

//import ViewModel:
import ViewModel from '../viewmodels/menuBuilderViewModel';

//import UI componets :
//TODO: import UI
import { StyleSheet, Text, View, ScrollView, Button, Alert, SectionList } from 'react-native';
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
      <>
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
      </>
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
    header: {
      alignItems: 'center',
      padding: 50,
      backgroundColor: Colors.darkGrey
    },
    title: {
      fontSize: 60,
      letterSpacing: 30,
      marginTop: 20,
      marginBottom: 20,
      color: Colors.lightGrey
    },
    button: {
      marginRight: 0,
      backgroundColor: Colors.darkGrey,
      color: Colors.lightGrey
    },
    scrollView: {
      backgroundColor: Colors.darkGrey
    },
    item: {
      padding: 20,
      marginVertical: 8,
    },
    category: {
      fontSize: 32,
      color: Colors.lightGreen,
    },
    menuTitle: {
      color: Colors.lightGrey,
      fontSize: 24,
    }
  });

export default MenuBuilderView;
