const loginForm = document.querySelector("#login-form");
if (loginForm) {
	loginForm.addEventListener("submit", (e) => {
		e.preventDefault();

		// get user info
		const email = loginForm["login-email"].value;
		const password = loginForm["login-password"].value;

		// log the user in
		auth.signInWithEmailAndPassword(email, password)
		.then(async (cred) => {
			console.log(cred.user);
			// close the signup modal & reset form
			//   const modal = document.querySelector('#modal-login');
			//   M.Modal.getInstance(modal).close();
		}).then(() => {
			loginForm.reset();
			console.log("login successfull")
			window.location.href="index1.html"
			return
			// window.location.href="index1.html";
		// }).catch((error) => {
		// 	var errorCode = error.code;
		// 	var errorMessage = error.message;
		//   });
	});
});
}