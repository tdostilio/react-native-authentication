import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header, Button, CardSection } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
    state = { loggedIn: null };
    
    componentWillMount() {
        firebase.initializeApp({
            apiKey: 'AIzaSyDl1O_SdTKuITUVNy-LV3PST5wLvmwVUuo',
            authDomain: 'authentication-9042a.firebaseapp.com',
            databaseURL: 'https://authentication-9042a.firebaseio.com',
            projectId: 'authentication-9042a',
            storageBucket: 'authentication-9042a.appspot.com',
            messagingSenderId: '317535350921'
        });
        
        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                this.setState({ loggedIn: true });
            } else {
                this.setState({ loggedIn: false });
            }
        });
    }


    renderContent() {
        switch (this.state.loggedIn) {
            case true:
                return (
                <CardSection>
                    <Button>
                        Log Out
                    </Button>
                </CardSection>);
            case false:
                return <LoginForm />;

            default:
        }
    }

    render() {
        return (
            <View>
                <Header headerText='Authentication' />
                {this.renderContent()}
            </View>

        );
    }
}

export default App;
