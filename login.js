
const evbStudents = [
    {
        username: "metehan", 
        passwort: "123456", 
        teacher: true
    }, 
    {
        username: "eman", 
        passwort: "2022",
        teacher: false
    }, 
    {
        username: "koek", 
        passwort: "alperen", 
        teacher: false
    }, 
    {
        username: "ertosun", 
        passwort: "9876", 
        teacher: false
    }, 
    {
        username: "ulga", 
        passwort: "abc123", 
        teacher: false
    }, 
    {
        username: "sakalli", 
        passwort: "0633" , 
        teacher: false
    }, 
    {
        username : "konuskan", 
        passwort: "445414", 
        teacher: false
    }
]

//console.log(evbStudents); 

function getLogin() {

  var userInput = document.getElementById("user").value; 
  var pass = document.getElementById("passcode").value; 
  var message = document.getElementById("message"); 

   for(i = 0; i < evbStudents.length; i++) {
       //var allStundent = evbStudents[i]; 
       //console.log(allStundent);  
    if(userInput == evbStudents[i].username && pass == evbStudents[i].passwort ) {
        console.log("User logged in")
        message.innerHTML = "Dein Login war erfolgreich " + evbStudents[i].username
        return; // beendet die Funktion, wenn die Userdaten richtig sind
    }/*  else {
        console.log("try again"); 
        return; 
    } */
   }
    console.log("incorrect");
    message.innerHTML = "Dein Username oder Passwort waren falsch. Bitte erneut versuchen"
}

