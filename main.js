// Initialize Firebase (ADD YOUR OWN DATA)
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyC_vyEXBsv4KKWn6p6_QSQJsPOE4dy1RI8",
    authDomain: "abhayme-83bd5.firebaseapp.com",
    databaseURL: "https://abhayme-83bd5.firebaseio.com",
    projectId: "abhayme-83bd5",
    storageBucket: "",
    messagingSenderId: "779918946958"
  };
  firebase.initializeApp(config);


// Reference messages collection
var messagesRef = firebase.database().ref('contact');

// Listen for form submit
document.getElementById('contactForm').addEventListener('submit', submitForm);

// Submit form
function submitForm(e){
  e.preventDefault();

  // Get values
  var name = getInputVal('fullname');
  //var company = getInputVal('company');
  var email = getInputVal('email');
  //var phone = getInputVal('phone');
  var message = getInputVal('message');

  // Save message
  saveMessage(name, email, message);

  // Show alert
  document.querySelector('.alert').style.display = 'block';

  // Hide alert after 3 seconds
  setTimeout(function(){
    document.querySelector('.alert').style.display = 'none';
  },3000);

  // Clear form
  document.getElementById('contactForm').reset();
}

// Function to get get form values
function getInputVal(id){
  return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(name,email, message){
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    name: name,
    email:email,
    message:message
  });
}
