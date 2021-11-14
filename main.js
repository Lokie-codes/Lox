// Initialize Firebase (ADD YOUR OWN DATA)
// Initialize Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.4.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.4.1/firebase-analytics.js";
  
const firebaseConfig = {
  apiKey: "AIzaSyBZGp5NBBULe9uAr2GL3M5c83SxpWLRG0U",
  authDomain: "portfoliolox.firebaseapp.com",
  projectId: "portfoliolox",
  storageBucket: "portfoliolox.appspot.com",
  messagingSenderId: "473257535510",
  appId: "1:473257535510:web:d308f3bcb64cf7e5522d37",
  measurementId: "G-H3FE4DEW1M"
};
firebase.initializeApp(firebaseConfig);


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Reference messages collection
var messagesRef = firebase.database().ref('messages');

// Listen for form submit
document.getElementById('contactForm').addEventListener('submit', submitForm);

// Submit form
function submitForm(e){
  e.preventDefault();

  // Get values
  var name = getInputVal('name');
  var company = getInputVal('company');
  var email = getInputVal('email');
  var phone = getInputVal('phone');
  var message = getInputVal('message');

  // Save message
  saveMessage(name, company, email, phone, message);

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
function saveMessage(name, company, email, phone, message){
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    name: name,
    company:company,
    email:email,
    phone:phone,
    message:message
  });
}
