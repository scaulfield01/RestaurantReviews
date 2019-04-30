import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  FlatList
} from 'react-native';
import Header from'components/Header';
import RestaurantRow from 'components/RestaurantRow';

const restaurants = [
  {name: 'Component Bistro', address: '123 Real Street'},
  {name: 'Native Deli', address: '456 Generica Avenue'},
  {name: 'Facebook Gastro pub', address: '100 Markzis lane'},
  {name: 'Ratke Group', address: '00 Londonderry Terrace'},
  {name: 'Beatty and Sons', address: '209 Duke Alley'},
  {name: 'Becker Inc', address: '2247 Green Ridge Terrace'},
  {name: 'Jacobs Group', address: '72753 Waxwing Plaza'},
  {name: 'Hartmann, Wolf and Dietrich', address: '35 Westridge Plaza'},
  {name: 'Boyer-Corkery', address: '638 Continental Center'},
  {name: 'Littel, Goyette and Hansen', address: '2079 Cherokee Circle'},
  {name: 'Greenholt, Strosin and Volkman', address: '1560 Loftsgordon Crossing'},
  {name: 'Hamill Group', address: '321 Carpenter Pass'},
  {name: 'Ortiz, Goodwin and Anderson', address: '4 Tony Parkway'},
  {name: 'Bernier, Rath and Homenick', address: '36630 West Junction'},
  {name: 'Swaniawski Inc', address: '8847 Nelson Pass'},
  {name: 'Walker LLC', address: '283 Pankratz Pass'},
  {name: 'Prohaska-Howe', address: '3538 Hallows Avenue'},
  {name: 'Gulgowski-Bechtelar', address: '09537 Sunbrook Junction'},
  {name: 'Durgan-Koss', address: '9 Farwell Crossing'},
  {name: 'Ernser-Turner', address: '635 Spohn Pass'}
];


export default class App extends Component {
  state = {
    search: null
  }
  render() {

    return (
      <View sytle={styles.row}>
        <Header />
        <TextInput
          style={styles.input}
          placeholder="Search ..."
          onChangeText={text => {
            this.setState({ search: text })
          }}
          value={this.state.search}
        />

        <FlatList
          data={
            restaurants.filter(place => {
              return !this.state.search ||
              place.name.toLowerCase().indexOf(this.state.search.toLowerCase()) > -1
            })
          }
          renderItem ={({item, index }) => 
            <RestaurantRow place={item} index={index} />
          }
          keyExtractor={item => item.name}
          initialNumToRender={16}
          ListHeaderComponent={<View style={{height: 30}}/>}
        />

      </View>
    );
  }
}

const styles = StyleSheet.create({
  input: {
    padding: 10,
    paddingHorizontal: 20,
    fontSize: 16,
    color: '#444',
    borderBottomWidth: 1,
    borderColor: '#ddd',
    backgroundColor: '#F5F5F5'
  }
})