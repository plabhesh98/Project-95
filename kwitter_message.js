var firebaseConfig = {
    apiKey: "AIzaSyDyjJd1rv3AA7G51ocTkmvd3Fn7weYpeTU",
    authDomain: "let-s-chat-web-app-56fa1.firebaseapp.com",
    databaseURL: "https://let-s-chat-web-app-56fa1-default-rtdb.firebaseio.com",
    projectId: "let-s-chat-web-app-56fa1",
    storageBucket: "let-s-chat-web-app-56fa1.appspot.com",
    messagingSenderId: "408295363131",
    appId: "1:408295363131:web:011bab6f72e4ccb916021e",
    measurementId: "G-PML9FKJEY3"
  };
  
  firebase.initializeApp(firebaseConfig);
  user_name = localStorage.getItem("username");