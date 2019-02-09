import React from 'react';
import {StyleSheet,TextInput} from "react-native";

export default class TextField extends React.Component {
    constructor(props){
        super(props);
    }
    render() {
        return(
            <TextInput
                {...this.props}
                placeholderTextColor = '#CDCDCD'
                style={styles.container}
            />

        )
    }
}
const styles = StyleSheet.create({
   container : {
       backgroundColor : 'black',
       color: 'white',
       borderRadius : 10,
       height : 50,
       margin: 10,
       padding: 10,
   }

});