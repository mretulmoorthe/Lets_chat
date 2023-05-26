//YOUR FIREBASE LINKS
var firebaseConfig = {
      apiKey: "AIzaSyBTcbfE6oxcKivxBmSKqy_cDQSmIOhYSdw",
      authDomain: "lets-chat-a95b6.firebaseapp.com",
      databaseURL: "https://lets-chat-a95b6-default-rtdb.firebaseio.com",
      projectId: "lets-chat-a95b6",
      storageBucket: "lets-chat-a95b6.appspot.com",
      messagingSenderId: "926991899838",
      appId: "1:926991899838:web:4c3f2d39d92bcc7d8992ef"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    user_name = localStorage.getItem("user_name");
    room_name = localStorage.getItem("room_name");

    function send(){
     msg = document.getElementById("msg").value ;
     firebase.database().ref(room_name).push({
      name:user_name,
      message:msg,
      like:0
     });
     document.getElementById("msg").value = "";
    }

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
