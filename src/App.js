import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header, Button } from './components/common';
import LoginForm from './components/LoginForm';
// import Animation from 'lottie-react-native';
// import rey from './rey_updated.json';

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
        
        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                this.setState({ loggedIn: true });
            } else {
                this.setState({ loggedIn: false });
            }
        });
    }

    renderContent() {
        if (this.state.loggedIn) {
            return (
                <Button>
                    Log Out
                </Button>
            );
        }

        return <LoginForm />;
    }
    // componentDidMount() {
    //     this.animation.play();
    //   }

    render() {
        return (
            <View>
                <Header headerText='Authentication' />
                {this.renderContent()}
                {/* <Animation
                    ref={animation => { this.animation = animation; }}
                    style={{
                    width: 300,
                    height: 300,
                    }}
                    source={require('./rey_updated.json')}
                /> */}
            </View>

        );
    }
}

export default App;
