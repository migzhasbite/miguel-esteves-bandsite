//API values to call
const apiKey = "?api_key=9dc7097-5a54-453e-aae5-7667c6906bc1";
const apiURL = `https://project-1-api.herokuapp.com/comments${apiKey}`;

//point to comments section in HTML
const commentsSection = document.querySelector(".comments");
//API values to call
// let axiosResponse = axios.get(apiURL);
console.log(axios);

function displayComments() {
	axios
		.get(apiURL)
		//inspect response in the .then
		.then((response) => {
			console.log(response);
			console.log(response.data);
			//this will clear pre-existing content in container on the site
			commentsSection.innerHTML = "";
			const populateComments = response.data
				.sort((comment1, comment2) => comment2.timestamp - comment1.timestamp)
				.forEach((element) => {
					//create elements
					const commentsContainer = document.createElement("div");
					const commentsAvatarWrapper = document.createElement("div");
					const commentsUserAvatar = document.createElement("img");
					const commentsContentWrapper = document.createElement("div");
					const commentsContentWrapperHeading = document.createElement("div");
					const commentsName = document.createElement("p");
					const commentsDate = document.createElement("p");
					const dateFormat = new Date(element.timestamp).toLocaleDateString(
						"en-US"
					);
					const commentsContent = document.createElement("p");

					//add class
					commentsContainer.classList.add("comments__container");
					commentsAvatarWrapper.classList.add(
						"comments__container--avatar-wrapper"
					);
					commentsUserAvatar.classList.add("comments__container--user-avatar");
					commentsContentWrapper.classList.add(
						"comments__container--content--wrapper"
					);
					commentsContentWrapperHeading.classList.add(
						"comments__container--content--heading"
					);
					commentsName.classList.add("comments__container--content-name");
					commentsDate.classList.add("comments__container--content-date");
					commentsContent.classList.add("comments__container--content-comment");

					//append child to parent elements
					commentsSection.appendChild(commentsContainer);
					commentsContainer.appendChild(commentsAvatarWrapper);
					commentsAvatarWrapper.appendChild(commentsUserAvatar);
					commentsContainer.appendChild(commentsContentWrapper);
					commentsContentWrapper.appendChild(commentsContentWrapperHeading);
					commentsContentWrapperHeading.appendChild(commentsName);
					commentsContentWrapperHeading.appendChild(commentsDate);
					commentsContentWrapper.appendChild(commentsContent);

					//apply name
					commentsName.innerText = `${element.name}`;
					commentsDate.innerText = dateFormat;
					commentsContent.innerText = `${element.comment}`;
				});
		})
		.catch((error) => {
			console.log(error);
		});
}

// //upon submission
const formEl = document.querySelector(".form__wrapper");
displayComments();

formEl.addEventListener("submit", (event) => {
	event.preventDefault();
	commentsSection.innerHTML = "";
	const userName = event.target.userName.value;
	const userComment = event.target.userComment.value;

	const name = document.querySelector(".form__text--name");
	const content = document.querySelector(".form__text--content");

	const newComment = {
		name: userName,
		content: userComment,
	};
	const validateForm = function () {
		if (userName == "" || userComment == "") {
			console.log("this works");
			name.style.border = "1px red solid";
			content.style.border = "1px red solid";
			displayComments();
		} else {
			console.log("this works too");
			name.style.border = "1px $color-mercury solid;";
			content.style.border = "1px $color-mercury solid;";

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
		}
	};
	validateForm();
});
