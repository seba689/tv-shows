var main = {};

(function(){

    var logout = function(){
        firebase.auth().sgnOut().then(function(){
            console.log('ok');
            window.location.replace('login.html');
        },function(){})
    }
        
    var init = function(){
        firebase.auth().onAuthStateChanged(function(user){
            if(user){
                console.log('log');
            }
            else{
                console.log(' no log');
                window.location.replace('login.html');
            }
        });
    }
    init()
    main.logout = logout()
})

