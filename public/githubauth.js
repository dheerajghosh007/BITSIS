var provider2 = new firebase.auth.GithubAuthProvider();

function githubSignin() {
   firebase.auth().signInWithPopup(provider2)
   
   .then(function(result) {
      var token = result.credential.accessToken;
      var user = result.user;
		
      console.log(token)
      console.log(user)
      window.location.href = "index1.html";
   }).catch(function(error) {
      var errorCode = error.code;
      var errorMessage = error.message;
		
      console.log(error.code)
      console.log(error.message)
   });
}

// function githubSignout(){
//    firebase.auth().signOut()
   
//    .then(function() {
//       console.log('Signout successful!')
//       window.location = "index.html";
//    }, function(error) {
//       console.log('Signout failed')
//    });
// }