const firebaseConfig = {
  apiKey: "AIzaSyBZPxq3ihPAHEF4Yf6JBQvoMDFc_4FjMEI",
  authDomain: "internform-f8946.firebaseapp.com",
  databaseURL: "https://internform-f8946-default-rtdb.firebaseio.com",
  projectId: "internform-f8946",
  storageBucket: "internform-f8946.appspot.com",
  messagingSenderId: "867199651767",
  appId: "1:867199651767:web:403f26843459a19f96e232"
};

// initialize firebase
firebase.initializeApp(firebaseConfig);

// reference your database
var contactFormDB = firebase.database().ref("contactForm");

document.getElementById("contactForm").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

  var name = getElementVal("name");
  var emailid = getElementVal("emailid");
  var msgContent = getElementVal("msgContent");

  saveMessages(name, emailid, msgContent);

  //   enable alert
  document.querySelector(".alert").style.display = "block";

  //   remove the alert
  setTimeout(() => {
    document.querySelector(".alert").style.display = "none";
  }, 3000);

  //   reset the form
  document.getElementById("contactForm").reset();
}

const saveMessages = (name, emailid, msgContent) => {
  var newContactForm = contactFormDB.push();

  newContactForm.set({
    name: name,
    emailid: emailid,
    msgContent: msgContent,
  });
};

const getElementVal = (id) => {
  return document.getElementById(id).value;
};