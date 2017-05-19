
//
(function(){
  var config = {
    apiKey: "AIzaSyCB2wcMMLRwABTuhUtl6zjkZrMV-TR_XBs",
    authDomain: "clocks-c2e56.firebaseapp.com",
    databaseURL: "https://clocks-c2e56.firebaseio.com",
    projectId: "clocks-c2e56",
    storageBucket: "clocks-c2e56.appspot.com",
    messagingSenderId: "555017051001"
  };
  firebase.initializeApp(config);


  const emailid = document.getElementById("emailid");
  const passwordid = document.getElementById("passwordid");
  const loginid = document.getElementById("loginid");
  const signup = document.getElementById("signupid");
  const logoutid = document.getElementById("logoutid");

  btnLogin.addEventListener('click' e =>{
    const email = emailid.value;
    const pass = passwordid.value;
    const auth = firebase.auth();

    const promise = auth.signInWithEmailAndPassword(email, pass);
    promise.catch(e=> console.log(e.message));
  })

   loginid.addEventListener('click' e =>{
    const email = emailid.value;
    const pass = passwordid.value;
    const auth = firebase.auth();

    const promise = auth.createUserWithEmailAndPassword(email, pass);
    promise.catch(e=> console.log(e.message));
  });

  logoutid.addEventListener('click', e => {
    firebase.auth().signOut();
  })
   firebase.auth().onAuthStateChanged(
    firebaseUser =>{
      if(firebaseUser){
        window.location.href = "/main.html";
        }else {
          console.log('not logged in')
        }
    })

());
