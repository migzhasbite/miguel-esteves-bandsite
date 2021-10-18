const commentsArr = [
	{
		name: "Connor Walton",
		date: "02/17/2021",
		content:
			"This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains.",
	},
	{
		name: "Emilie Beach",
		date: "01/09/2021",
		content:
			"I feel blessed to have seen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What an incredible day.",
	},
	{
		name: "Miles Acosta",
		date: "12/20/2020",
		content:
			"I can't stop listening. Every time I hear one of their songs - the vocals - it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Can't get enough.",
	},
];

//target comments section
const commentsSection = document.querySelector(".comments");

//run iteration to display comments in array
const displayComments = () => {
	for (let i = 0; i < commentsArr.length; i++) {
		//div container
		const commentsContainer = document.createElement("div");
		commentsContainer.classList.add("comments__container");
		commentsSection.appendChild(commentsContainer);
		//left div
		const commentsAvatarWrapper = document.createElement("div");
		commentsAvatarWrapper.classList.add("comments__container--avatar-wrapper");
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
		commentsName.innerText = commentsArr[i].name;

		const commentsDate = document.createElement("p");
		commentsDate.classList.add("comments__container--content-date");
		commentsContentWrapperHeading.appendChild(commentsDate);
		commentsDate.innerText = commentsArr[i].date;

		const commentsContent = document.createElement("p");
		commentsContent.classList.add("comments__container--content-comment");
		commentsContentWrapper.appendChild(commentsContent);
		commentsContent.innerText = commentsArr[i].content;
	}
};

//upon submission
const formEl = document.querySelector(".form__content");
displayComments();

formEl.addEventListener("submit", (event) => {
	event.preventDefault();
	commentsSection.innerHTML = "";
	const userName = event.target.userName.value;
	const userDate = new Date().toLocaleDateString("en-US");
	const userComment = event.target.userComment.value;

	const newComment = {
		name: userName,
		date: userDate,
		content: userComment,
	};
	commentsArr.unshift(newComment);
	displayComments();
	formEl.reset();
});
