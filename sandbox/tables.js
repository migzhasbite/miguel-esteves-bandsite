const formEl = document.querySelector(".form__content");

formEl.addEventListener("submit", (event) => {
	event.preventDefault();
	commentsSection.innerHTML = "";

	console.log(event.target.userName.value);
	const userName = event.target.userName.value;
	const userComment = event.target.userComment.value;
	const validate = function () {
		if (userName == "" || userComment == "") {
			alert("Please input a Value");
		} else {
			alert("Code has accepted : you can try another");
		}
	};
	validate();
	const newComment = {
		name: userName,
		content: userComment,
	};

	axios
		.post(apiURL, {
			name: userName,
			comment: userComment,
		})
		.then((result) => {
			console.log(result);

			formEl.reset();
			displayComments();
		})
		.catch((error) => {
			console.log(error);
		});
});
