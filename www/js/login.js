
var uiConfig = {
    signInSuccessUrl: 'index.html',
    signInOptions: [
    //firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    //firebase.auth.FacebookAuthProvider.PROVIDER_ID,
    firebase.auth.EmailAuthProvider.PROVIDER_ID,
    //firebase.auth.PhoneAuthProvider.PROVIDER_ID
],
    //terms of service url.
    tosUrl: 'index.html'
};

// Initialize the FirebaseUI Widget using Firebase.
var ui = new firebaseui.auth.AuthUI(firebase.auth());
//the start method will await until the DOM is loadeed.
ui.start('#firebaseui-auth-container',uiConfig);
