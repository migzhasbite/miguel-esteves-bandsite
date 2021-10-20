//API values to call
const apiKey = "?api_key=8e49ef38-f8d2-49ef-b098-a12df8fa3554";
const apiURL = `https://project-1-api.herokuapp.com/comments${apiKey}`;

// const commentsArr = axios.get(apiURL);

//point to comments section in HTML
const commentsSection = document.querySelector(".comments");
//API values to call
// let axiosResponse = axios.get(apiURL);
console.log(axios);

axios
	.get(apiURL)
	//inspect response in the .then
	.then((response) => {
		console.log(response);
		console.log(response.data);
		//this will clear pre-existing content in container on the site
		commentsSection.innerHTML = "";
		const displayComments = () => {
			for (let i = 0; i < response.data.length; i++) {
				//div container
				const commentsContainer = document.createElement("div");
				commentsContainer.classList.add("comments__container");
				commentsSection.appendChild(commentsContainer);
				//left div
				const commentsAvatarWrapper = document.createElement("div");
				commentsAvatarWrapper.classList.add(
					"comments__container--avatar-wrapper"
				);
				commentsContainer.appendChild(commentsAvatarWrapper);

				const commentsUserAvatar = document.createElement("img");
				commentsUserAvatar.classList.add("comments__container--user-avatar");
				commentsAvatarWrapper.appendChild(commentsUserAvatar);

				const commentsContentWrapper = document.createElement("div");
				commentsContentWrapper.classList.add(
					"comments__container--content--wrapper"
				);
				commentsContainer.appendChild(commentsContentWrapper);

				const commentsContentWrapperHeading = document.createElement("div");
				commentsContentWrapperHeading.classList.add(
					"comments__container--content--heading"
				);
				commentsContentWrapper.appendChild(commentsContentWrapperHeading);

				const commentsName = document.createElement("p");
				commentsName.classList.add("comments__container--content-name");
				commentsContentWrapperHeading.appendChild(commentsName);
				commentsName.innerText = response.data[i].name;

				const commentsDate = document.createElement("p");
				commentsDate.classList.add("comments__container--content-date");
				commentsContentWrapperHeading.appendChild(commentsDate);
				commentsDate.innerText = response.data[i].timestamp;

				const commentsContent = document.createElement("p");
				commentsContent.classList.add("comments__container--content-comment");
				commentsContentWrapper.appendChild(commentsContent);
				commentsContent.innerText = response.data[i].comment;
			}
		};
		displayComments();
	})
	.catch((error) => {
		console.log(error);
	});

// //upon submission
// const formEl = document.querySelector(".form__content");
// displayComments();

// formEl.addEventListener("submit", (event) => {
// 	event.preventDefault();
// 	commentsSection.innerHTML = "";
// 	const userName = event.target.userName.value;
// 	const userDate = new Date().toLocaleDateString("en-US");
// 	const userComment = event.target.userComment.value;

// 	const newComment = {
// 		name: userName,
// 		date: userDate,
// 		content: userComment,
// 	};
// 	commentsArr.unshift(newComment);
// 	displayComments();
// 	formEl.reset();
// });
