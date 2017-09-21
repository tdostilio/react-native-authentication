import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
    componentWillMount() {
        firebase.initializeApp({
            apiKey: 'AIzaSyDl1O_SdTKuITUVNy-LV3PST5wLvmwVUuo',
            authDomain: 'authentication-9042a.firebaseapp.com',
            databaseURL: 'https://authentication-9042a.firebaseio.com',
            projectId: 'authentication-9042a',
            storageBucket: 'authentication-9042a.appspot.com',
            messagingSenderId: '317535350921'
          });
    }

    render() {
        return (
            <View>
                <Header headerText="Authentication" />
                <LoginForm />
            </View>
        );
    }
}

export default App;
