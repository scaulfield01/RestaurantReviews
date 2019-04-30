import React, {Component} from 'react';
import {
	View,
	Text,
	StyleSheet,
	Button,
	TouchableOpacity,
	TouchableHighlight,
	TouchableWithoutFeedback
} from 'react-native';

export default class RestaurantRow extends Component {
	state = {
		showInfo: false
	}

	infoPressed = () => {
		this.setState({ showInfo: !this.state.showInfo });
	}

	render() {

		const {
			place, 
			index
		} = this.props

		return (
			<View key={place.name} style={{ backgroundColor: index % 2 === 0 ? '#CAFAFE' : '#97CAEF'}}>
			  
			  <View style={styles.row}>
				  <View style={styles.edges}>
				    <Text>{index + 1}</Text>
				  </View>

				  <View style={styles.nameAddress}>
				    <Text>{place.name}</Text>
				    <Text style={styles.addressTextColor}>{place.address}</Text>
				  </View>

					<View style={styles.edges}>
						<TouchableOpacity 
							onPress={this.infoPressed} 
							style={styles.button}
						>
							<Text style={styles.buttonText} >INFO</Text>
						</TouchableOpacity>
				  </View>	
			  </View>		   
				    {
				    	this.state.showInfo && 
				    	<View>
				    		<Text style={styles.info}>
				    			Restaurant Info
				    		</Text>
				    	</View>
				    }
			</View>
		)
	}
}

const styles = StyleSheet.create({
	row: {
	  flexDirection: 'row'
	},
	edges: {
	  flex: 1,
	  alignItems: 'center',
	  justifyContent: 'center',
	  padding: 5,
	  minWidth: 50
	},
	nameAddress: {
	  flexDirection: 'column',
	  flex: 8
	},
	addressTextColor: {
	  color: 'black'
	},
	button: {
	  borderWidth: 1,
	  borderColor: '#0066CC',
	  borderRadius: 14,
	  paddingHorizontal: 10,
	  paddingVertical: 3,
	  backgroundColor: '#fff',
	},
	buttonText: {
		color: '#55BCC9',
		fontSize: 12
	},
	info: {
	  marginHorizontal: 40,
	  marginVertical: 10,
	  padding: 10,
	  backgroundColor: '#fff',
	  borderWidth: 1,
	  borderColor: '#ddd',
	  borderRadius: 4
	}
})