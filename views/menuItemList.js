import React from 'react';
import {View, Text, SectionList, StyleSheet} from 'react-native';

import {styles} from './styles/styles';

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

function ListOfMenuItems() {
    return (
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
    );
}



export default ListOfMenuItems;