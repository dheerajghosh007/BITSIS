var provider = new firebase.auth.GoogleAuthProvider();

function googleSignin() {
   firebase.auth()
   
   .signInWithPopup(provider).then(function(result) {
      var token = result.credential.accessToken;
      var user = result.user;
		
      console.log(token)
      console.log(user)
      a=2
      window.location.href = "index1.html";
      return
   }).catch(function(error) {
      var errorCode = error.code;
      var errorMessage = error.message;
		
      console.log(error.code)
      console.log(error.message)
   });
}

// function googleSignout() {
//    firebase.auth().signOut()
	
//    .then(function() {
//       console.log('Signout Succesfull')
//       window.location = "index.html";
//    }, function(error) {
//       console.log('Signout Failed')  
//    });
// }