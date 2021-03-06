import React from 'react';
import {View,Text} from 'react-native';
import {loginStyles} from "../styles/loginstylesheet";
import {TextField,Button} from "../components";
import firebase from "../config/firebaseConfig";
import {connect} from "react-redux";
import {loginAction} from '../actions/loginAction'
import {firebaseConnect, firestoreConnect} from "react-redux-firebase";
import {compose} from "redux";


class Login extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            username : '',
            password : ''
        };
        this.firebaseValues = this.firebaseValues.bind(this);
    }
    render() {
        return(

            <View style={loginStyles.container}>
                <TextField
                    placeholder="username"
                    onChangeText={(text)=>this.setState({username : text})}
                    value={this.state.username}
                />
                <TextField
                    placeholder="password"
                    onChangeText={(text)=>this.setState({password : text})}
                    value={this.state.password}
                    secureTextEntry
                />

                <Button title="Login" onPress={()=>this.props.loginWithCredential(this.state)}/>
                <Button title="Sign Up" onPress={()=>console.log(this.props.data)}/>

            </View>
        )
    }

    firebaseValues() {
        console.log("hrere");
        var users = [];
        firebase.database().ref('items').on('value',function(snapshot){
            snapshot.forEach(child=>{
               users.push(child.val());
            });

        });


    }
}

const mapStateToProps = (state) => {
    return {
        login : state.login,
        data : state.firestore.ordered.items
    }

};
const mapDispatchToProps = (dispatch) => {
  return {
      loginWithCredential : (credential) => dispatch(loginAction(credential))
  }
};
export default compose(
    connect(mapStateToProps,mapDispatchToProps),
    firestoreConnect(()=>['items'])
)(Login);