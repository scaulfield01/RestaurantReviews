import React, {Component} from 'react';

import {View, Text, StyleSheet, TextInput} from 'react-native';

const restaurants = [
  { name: 'Component Bistro', address: '123 Real Street'},
  { name: 'Native Deli', address: '456 Generica Avenue'},
  { name: 'Facebook Gastro pub', address: '100 Markzis lane'}
];

export default class App extends Component {

  state = {
    search: null
  }

  render() {
    return (
      <View sytle={styles.row}>
        <Text style={styles.header}>Restaurant Review</Text>

        <TextInput 
          style={styles.input}
          placeholder="Search ..."
          onChangeText={text => {
            this.setState({ search: text })
          }}
          value={this.state.search}
        />

        {
          restaurants.filter(place => {
            return !this.state.search ||
              place.name.toLowerCase().indexOf(this.state.search.toLowerCase()) > -1
          }).map((place, index) => {
            return(
              <View key={place.name} style={[
                styles.row,
                {backgroundColor: index % 2 === 0 ? 'white' : '#F3F3F7'}
                ]}>
                <View style={styles.edges}>
                  <Text>{index + 1}</Text>
                </View>

                <View style={styles.nameAddress}>
                  <Text>{place.name}</Text>
                  <Text style={styles.addressTextColor}>{place.address}</Text>
                </View>

                <View style={styles.edges}>
                  <Text>Info</Text>
                </View>
              </View>
            )
          })
        }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header:{
    padding: 40,
    fontSize: 30,
    textAlign: 'center',
    color: '#006699',
    fontWeight: '300'
  },
  row:{
    flexDirection: 'row'
  },
  edges:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 5
  },
  nameAddress:{
    flexDirection: 'column',
    flex: 8
  },
  addressTextColor: {
    color: 'blue'
  },
  input: {
    marginBottom: 30,
    padding: 10,
    paddingHorizontal: 20,
    fontSize: 16,
    color: '#444',
    borderBottomWidth: 1,
    borderColor: '#ddd',
    backgroundColor: '#F5F5F5'
  }
})
