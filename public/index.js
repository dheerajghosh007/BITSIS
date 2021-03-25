const loggedOutLinks = document.querySelectorAll('.logged-out');
const loggedInLinks = document.querySelectorAll('.logged-in');

// var user = firebase.auth().currentUser;
// var name, email, photoUrl, uid, emailVerified;

// if (user != null) {
//   name = user.displayName;
//   email = user.email;
//   photoUrl = user.photoURL;
//   // emailVerified = user.emailVerified;
//   // uid = user.uid;  // The user's ID, unique to the Firebase project. Do NOT use
//                    // this value to authenticate with your backend server, if
//                    // you have one. Use User.getToken() instead.
// }



const setupUI = (user) => {
  if (user) {
    // toggle user UI elements
    // loggedInLinks.forEach(item => item.style.display = 'block');
    // loggedOutLinks.forEach(item => item.style.display = 'none');
  } else {
    // toggle user elements
    // loggedInLinks.forEach(item => item.style.display = 'none');
    // loggedOutLinks.forEach(item => item.style.display = 'block');
  }
};


// setup materialize components
document.addEventListener('DOMContentLoaded', function() {

    var modals = document.querySelectorAll('.modal');
    M.Modal.init(modals);
      var items = document.querySelectorAll('.collapsible');
    M.Collapsible.init(items);
  updateName()
  
  });