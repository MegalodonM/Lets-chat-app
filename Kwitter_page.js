const firebaseConfig = {
    apiKey: "AIzaSyDWapjmMszWZAqHVBl4x6Hy_46co9s0aw4",
    authDomain: "lets-chat-web-app-91e9b.firebaseapp.com",
    projectId: "lets-chat-web-app-91e9b",
    storageBucket: "lets-chat-web-app-91e9b.appspot.com",
    messagingSenderId: "157568268794",
    appId: "1:157568268794:web:f98751eb6f0a58c2abcc43"
};

firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");

room_name = localStarage.getItem("room_name");

document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";


function send() {
    msg = document.getElementById("msg").value;
    firebase.database().ref(room_name).push({

        name: user_name, message: msg, like: 0
    });
    document.getElementById("msg").value = "";
}

function getData() {
    firebase.database().ref("/").on('value', function (snapshot) {
        document.getElementById("output").innerHTML = ""; snapshot.forEach(function (childSnapshot) {
            childKey = childSnapshot.key;
            Room_names = childKey;
            console.log("Room Name - " + Room_names);
            row = "<div class='room_name' id=" + Room_names + " onclick='redirectToRoomName(this.id)' >#" + Room_names + "</div><hr>";
            document.getElementById("output").innerHTML += row;
        });
    });

}

getData();

function redirectToRoomName(name) {
    console.log(name);
    localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html";
}


function logout() {
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location = "index.html";
}
