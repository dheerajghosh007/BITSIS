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
async function updateName() {
	const uname = document.querySelector("#navbar-user");
	const uemail = document.querySelector("#nav-email");
	const uphoto = document.querySelector("#nav-photo");
	const interval = setInterval(() => {
		var user = firebase.auth().currentUser;
		var namef, email, photoUrl, uid, emailVerified;
		console.log("running");
		if (user) {
			console.log(user);
			email = user.email;
			namef = user.displayName;
			photoUrl = user.photoURL;
			uname.innerText = namef;
			uemail.innerHTML = email;
			uphoto.src = photoUrl;
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

const signupForm = document.querySelector("#signup-form");
if (signupForm) {
	signupForm.addEventListener("submit", (e) => {
		e.preventDefault();

		// get user info
		const email = signupForm["signup-email"].value;
		const password = signupForm["signup-password"].value;
		const name = signupForm["signup-name"].value;
		

		// sign up the user
		auth
			.createUserWithEmailAndPassword(email, password)
			.then(async (cred) => {
				// alert(name);
				console.log(cred.user);
				await cred.user.updateProfile({ displayName: name });
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
				// window.location.href = "index1.html";
				return;
			});
	});
}
// logout
const logout = document.querySelector('#logout');
logout.addEventListener('click', (e) => {
  e.preventDefault();
  auth.signOut();
	console.log("Logged out successfully")
	window.location.href="index.html";
});

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
