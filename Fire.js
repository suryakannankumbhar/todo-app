import firebase from 'firebase';
import 'firestore';

const firebaseConfig = {
    apiKey: 'AIzaSyB0L4BbrP5NNusBNzf3vxk4NyAQzPeEfwI',
    authDomain: 'test-app-54968.firebaseapp.com',
    projectId: 'test-app-54968',
    storageBucket: 'test-app-54968.appspot.com',
    messagingSenderId: '476596984653',
    appId: '1:476596984653:web:c40615fa24fbe79801b504',
};

export default class Fire {
    constructor(callback) {
        this.init(callback);
    }
    init(callback) {
        if (!firebase.apps.length) {
            firebase.initializeApp(firebaseConfig);
        }

        firebase.auth().onAuthStateChanged(user => {
            if (user) {
                callback(null, user);
            } else {
                firebase
                    .auth()
                    .signInAnonymously()
                    .catch(error => {
                        callback(error);
                    });
            }
        });
    }
}
