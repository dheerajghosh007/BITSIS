




// // const signupForm = document.querySelector('#signup-form');
// // if(signupForm){
// // signupForm.addEventListener('submit', (e) => {
// //   e.preventDefault();
  
// //   // get user info
// //   const email = signupForm['signup-email'].value;
// //   const password = signupForm['signup-password'].value;
// //   const name = signupForm['signup-name'].value;

// //   // sign up the user
// //   auth.createUserWithEmailAndPassword(email, password).then(cred => {
    
    
// //     }).catch(err=>{
// //         console.log(error.message
// //             )})
      
// //     }).catch(err=>{
// //         console.log(error.message)
// //     })

// //     // return db.collection('users').doc(cred.user.uid).set({
// //     //   name: signupForm['signup-name'].value
// //     // });
// //   .then(() => {
// //     // close the signup modal & reset form
// //     // const modal = document.querySelector('#modal-signup');
// //     // M.Modal.getInstance(modal).close();
// //     signupForm.reset();
// //     window.location.href="index1.html";
// //     return

// //   });
// // })
// var uploader = document.getElementById('uploader');
// var fileButton = document.getElementById('fileButton');

// //Listen for file 
// fileButton.addEventListener('change', function(e){

//    //Get File
//    var file = e.target.files[0];

//    var user = firebase.auth().currentUser;
//    //Create a Storage Ref
//    var storageRef = firebase.storage().ref(user.email + '/profilePicture/' );

//    //Upload file
//    var task = storageRef.put(file);

//    var user = firebase.auth().currentUser;                
// });  

//    //Update Progress Bar 
// //    task.on('state_changed', 

// //    function progress(snapshot){
// //       var percentage = (snapshot.bytesTransferred / snapshot.totalBytes) *100;
// //       uploader.value = percentage;

// //       //if percentage = 100
// //       //$(".overlay").hide();         
// //    },

// //    function error(err){

// //    },

// //    function complete(){

// //    }

var files = [];
document.getElementById("files").addEventListener("change", function(e) {
  files = e.target.files;
  for (let i = 0; i < files.length; i++) {
    console.log(files[i]);
  }
});

document.getElementById("send").addEventListener("click", function() {
  //checks if files are selected
  if (files.length != 0) {
    //Loops through all the selected files
    for (let i = 0; i < files.length; i++) {
      //create a storage reference
      var storage = firebase.storage().ref(files[i].name);

      //upload file
      var upload = storage.put(files[i]);

      //update progress bar
      upload.on(
        "state_changed",
        function progress(snapshot) {
          var percentage =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          document.getElementById("progress").value = percentage;
        },

        function error() {
          alert("error uploading file");
        },

        function complete() {
          document.getElementById(
            "uploading"
          ).innerHTML += `${files[i].name} upoaded <br />`;
        }
      );
    }
  } else {
    alert("No file chosen");
  }
});

function getFileUrl(filename) {
  //create a storage reference
  var storage = firebase.storage().ref(filename);

  //get file url
  storage
    .getDownloadURL()
    .then(function(url) {
      console.log(url);
    })
    .catch(function(error) {
      console.log("error encountered");
    });
}

