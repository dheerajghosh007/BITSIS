// auth.onAuthStateChanged(user => {
//     if (user) {
//         setupUI(user);
//     //   db.collection('guides').get().then(snapshot => {
//     //     setupGuides(snapshot.docs);

//     //   });
//     } else {
//       setupUI();
//     //   setupGuides([]);
//     }
//   })

const logout = document.querySelector('#logout');
if(logout){
logout.addEventListener('click', (e) => {
  e.preventDefault();
  firebase.auth().signOut();
	console.log("Logged out successfully")
	window.location.href="index.html";
});
}



async function updateName() {
	const uname = document.querySelector("#navbar-user");
	const uemail = document.querySelector("#nav-email");
	const uphoto = document.querySelector("#nav-photo");
	const interval = setInterval(() => {
		var user = firebase.auth().currentUser;
		var namef, email, photoUrl, uid, emailVerified;
		var image = './new23.jpeg';
		// console.log("running");
		if (user) {
			// console.log(user);
			email = user.email;
			namef = user.displayName;
			photoUrl = (user.photoURL)?(user.photoURL):image;
			uname.innerText = namef;
			uemail.innerHTML = email;
			uphoto.src = user.photoURL;
			clearInterval(interval);
			// photoUrl = user.photoURL;
			// emailVerified = user.emailVerified;
			// uid = user.uid;  // The user's ID, unique to the Firebase project. Do NOT use
			// this value to authenticate with your backend server, if
			// you have one. Use User.getToken() instead.
		}
	}, 1000);
}

document.addEventListener("DOMContentLoaded", function () {
	updateName();
});

// auth.onAuthStateChanged(user => {
//     if (user) {
//       console.log('user logged in: ', user);
//     } else {
//       console.log('user logged out');
//     }
//   })

// signup


var files = [];

document.getElementById("uploadfile").addEventListener("change", function(e) {
	files = e.target.files;
	for (let i = 0; i < files.length; i++) {
	  console.log(files[i]);
	}
  });


const signupForm = document.querySelector("#signup-form");
if (signupForm) {
	signupForm.addEventListener("submit", (e) => {
		e.preventDefault();

				// // get user info
		const email = signupForm["signup-email"].value;
		const password = signupForm["signup-password"].value;
		const name = signupForm["signup-name"].value;
		  if (files.length != 0) {
			//Loops through all the selected files
			for (let i = 0; i < files.length; i++) {
			  //create a storage reference
			  var storage = firebase.storage().ref(email);
		
			  //upload file
			  var upload = storage.put(files[i]);
		
			  //update progress bar
			  upload.on(
				"state_changed",
				function progress(snapshot) {
				  var percentage =
					(snapshot.bytesTransferred / snapshot.totalBytes) * 100;
				//   document.getElementById("progress").value = percentage;
				//   console.log(percentage)
				},
		
				function error() {
				  alert("error uploading file");
				},
		
				function complete() {
							// sign up the user
		auth
		.createUserWithEmailAndPassword(email, password)
		.then(async (cred) => {
			// alert(name);
			// function getFileUrl(filename) {
				//create a storage reference
				var storage = firebase.storage().ref(email);
			  
				
				//get file url
				var pic = await storage
				  .getDownloadURL()
				  
					
			//   }
			
			console.log(cred.user);
			await cred.user.updateProfile({ displayName: name ,photoURL: pic});
			// debugger;

			// return db.collection('users').doc(cred.user.uid).set({
			//   name: signupForm['signup-name'].value
			// });
		})
		.then(() => {
			// close the signup modal & reset form
			// const modal = document.querySelector('#modal-signup');
			// M.Modal.getInstance(modal).close();
			signupForm.reset();
			window.location.href = "index1.html";
			return;
		});
				}
			  );
			}
		  }

				

	});
}
// logout


// login
// const loginForm = document.querySelector("#login-form");
// if (loginForm) {
// 	loginForm.addEventListener("submit", (e) => {
// 		e.preventDefault();

// 		// get user info
// 		const email = loginForm["login-email"].value;
// 		const password = loginForm["login-password"].value;

// 		// log the user in
// 		auth.signInWithEmailAndPassword(email, password)
// 		.then(async (cred) => {
// 			console.log(cred.user);
// 			// close the signup modal & reset form
// 			//   const modal = document.querySelector('#modal-login');
// 			//   M.Modal.getInstance(modal).close();
// 		}).then(() => {
// 			loginForm.reset();
// 			console.log("login successfull")
// 			return
// 			// window.location.href="index1.html";
// 		// }).catch((error) => {
// 		// 	var errorCode = error.code;
// 		// 	var errorMessage = error.message;
// 		//   });
// 	});
// });
// }

// firebase.auth().onAuthStateChanged(user => {
//     if(user){
//         console.log(user)
//     }else{

//     }
// })
