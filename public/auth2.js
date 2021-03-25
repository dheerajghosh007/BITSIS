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
	const interval = setInterval(() => {
		var user = firebase.auth().currentUser;
		var namef, email, photoUrl, uid, emailVerified;
		console.log("running");
		if (user) {
			console.log(user);
			email = user.email;
			namef = user.displayName;
			uname.innerText = namef;
			uemail.innerHTML = email;
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
var a=0
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
			.then((cred) => {
				alert(name);
				alert(cred.user);
				cred.user
					.updateProfile({ displayName: name })
					.then(() => {
						alert("successful");
					})
					.catch((err) => {
						console.log(err);
					});

				// return db.collection('users').doc(cred.user.uid).set({
				//   name: signupForm['signup-name'].value
				// });
			})
			.then(() => {
				// close the signup modal & reset form
				// const modal = document.querySelector('#modal-signup');
				// M.Modal.getInstance(modal).close();
				signupForm.reset();
				a=1
				window.location.href = "index1.html";
				return;
			});
	});
}
// logout
// const logout = document.querySelector('#logout');
// logout.addEventListener('click', (e) => {
//   e.preventDefault();
//   auth.signOut();
//   window.location.href="index.html";
// });

// login
const loginForm = document.querySelector("#login-form");
if (loginForm) {
	loginForm.addEventListener("submit", (e) => {
		e.preventDefault();

		// get user info
		const email = loginForm["login-email"].value;
		const password = loginForm["login-password"].value;

		// log the user in
		auth.signInWithEmailAndPassword(email, password).then((cred) => {
			// close the signup modal & reset form
			//   const modal = document.querySelector('#modal-login');
			//   M.Modal.getInstance(modal).close();
			loginForm.reset();
		});
	});
}

// firebase.auth().onAuthStateChanged(user => {
//     if(user){
//         console.log(user)
//     }else{

//     }
// })
