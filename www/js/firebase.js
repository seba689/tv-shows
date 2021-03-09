var firebase = fireBase || fireBase;
var hasInt = false;

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyDS6WheN-we415GUy0ilGW1ODS5puAn8Ps",
    authDomain: "tvshowapp-42515.firebaseapp.com",
    databaseURL: "https://tvshowapp-42515-default-rtdb.firebaseio.com",
    projectId: "tvshowapp-42515",
    storageBucket: "tvshowapp-42515.appspot.com",
    messagingSenderId: "355033215809",
    appId: "1:355033215809:web:00c874e2bb175dc22867c0"
};

if(!hasInt){
  // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    hasInt = true;
}