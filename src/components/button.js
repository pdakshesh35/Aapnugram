import React from 'react';
import {TouchableOpacity, View, StyleSheet, Text} from 'react-native';

export default class CustomeButton extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            title : this.props.title,

        }
    }
    render() {
        return(
            <TouchableOpacity {...this.props}>
                <View style = {styles.container}>
                    <Text style={styles.text}>{this.state.title}</Text>
                </View>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
   container : {
       backgroundColor : 'black',
       height : 50,
       marginLeft : 40,
       marginRight : 40,
       marginTop : 10,
       justifyContent : 'center',
       borderRadius : 10

   },
   text : {
       color : 'white',
       textAlign: 'center'
   }
});