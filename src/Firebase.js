import * as firebase from 'firebase';
import firestore from 'firebase/firestore'

const settings = {timestampsInSnapshots: true};
const config = {
    apiKey: "AIzaSyC1R5zfo6RNepYDwnxjW3TBFmN8acj6Mio",
    authDomain: "todo-a3b50.firebaseapp.com",
    databaseURL: "https://todo-a3b50.firebaseio.com",
    projectId: "todo-a3b50",
    storageBucket: "todo-a3b50.appspot.com",
    messagingSenderId: "884395417729"
}
firebase.initializeApp(config);

firebase.firestore().settings(settings);

export default firebase;