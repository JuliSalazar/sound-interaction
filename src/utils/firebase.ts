import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

var firebaseConfig = {
    apiKey: "AIzaSyBDrmfUBoTMMX-Y69xz-QzpGHrSDuDselQ",
    authDomain: "sound-interaction.firebaseapp.com",
    projectId: "sound-interaction",
    storageBucket: "sound-interaction.appspot.com",
    messagingSenderId: "145301324056",
    appId: "1:145301324056:web:cac6907cf57e3e4856de6d"
  };


let appFirebase:firebase.app.App;

if(firebase.apps.length == 0){
    appFirebase = firebase.initializeApp(firebaseConfig);
}
//El ! significa que estamos seguros de que la variable no se quedará vacía
export const COLLECTION = appFirebase!.firestore().collection('sounds');

//Para obtener de la db
/* db.collection("cities").get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        console.log(doc.id, " => ", doc.data());
    });
}); */