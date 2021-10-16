//data provided on the copydeck as an array of objects

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
const commentsSection = document.querySelector(".comments--display");

//create containers
const commentsContainer = document.createElement("div");
commentsContainer.classList.add("comments__container--display");
commentsSection.appendChild(commentsContainer);

const commentsAvatarWrapper = document.createElement("div");
commentsAvatarWrapper.classList.add("comments__container--avatar-wrapper");
commentsContainer.appendChild(commentsAvatarWrapper);

const commentsContentWrapper = document.createElement("div");
commentsContentWrapper.classList.add("comments__container--content-wrapper");
commentsContainer.appendChild(commentsContentWrapper);

const commentsContentWrapperUser = document.createElement("div");
commentsContentWrapperUser.classList.add(
	"comments__container--content-heading"
);
commentsContentWrapper.appendChild(commentsContentWrapperUser);

//run iteration to display comments in array
const displayComments = () => {
	for (let i = 0; i < commentsArr.length; i++) {
		const commentsUserAvatar = document.createElement("img");
		commentsUserAvatar.classList.add("comments__container--user-avatar");
		commentsAvatarWrapper.appendChild(commentsUserAvatar);

		const commentsName = document.createElement("p");
		commentsName.classList.add("comments__container--content-name");
		commentsContentWrapper.appendChild(commentsName);
		commentsName.innerText = commentsArr[i].name;

		const commentsDate = document.createElement("p");
		commentsDate.classList.add("comments__container--content-date");
		commentsContentWrapper.appendChild(commentsDate);
		commentsDate.innerText = commentsArr[i].date;

		const commentsContent = document.createElement("p");
		commentsContent.classList.add("comments__container--content-comment");
		commentsContentWrapper.appendChild(commentsContent);
		commentsContent.innerText = commentsArr[i].content;
	}
};

const commentForm = document.querySelector("#comments--form");
// const nameInput = document.querySelector("#userName");
// const commentInput = document.querySelector("#userComment");

//adding event listener for form
commentForm.addEventListener("submit", (event) => {
	event.preventDefault();

	//new user comment info
	let newName = event.target.name.value;
	// let newDate = date.toLocaleDateString();
	let newContent = event.target.name.value;

	if (newName && newContent) {
		let newCommentObj = {
			name: newName,
			// date: newDate,
			content: newContent,
		};
		commentsArr.push(newCommentObj);
	}
});
displayComments();

// 	commentsSection.innerHTML = "";
// 	const newComment = {
// 		name: nameInput.ariaValueMax,
// 		content: commentInput.value,
// 	};
// 	commentList.unshift(newComment);

// 	// commentList.forEach((element) => {
// 	// 	displayComments(element);
// });

// const clearForm = () => {
// 	commentForm.reset();
// displayComments();
// commentsName.innerText = commentsArr[0].name;

// const commentsName

// console.log(commentsContainer);

// // // Refactor the displayTodo function so that it takes a single to do item as a parameter. Use the displayTodoRefactored function to display initial default data to the dom from the array of to do items.
// //place the already existing comments onto the website
// //declare the variable and class name of parent

// // const todoArray = [
// // 	"Walk the dogs",
// // 	"Make dinner",
// // 	"Learn jiu jitsu",
// // 	"Write a novel",
// // ];

// // const displayTodoRefactored = (item) => {
// // 	const todoInputValue = item.toUpperCase();
// // 	const newTodoItem = document.createElement("li");
// // 	newTodoItem.classList.add("todo-list__item");
// // 	newTodoItem.innerText = todoInputValue;
// // 	todoList.appendChild(newTodoItem);

// // 	newTodoItem.addEventListener("click", handleTodoComplete);

// // 	const newFaveItem = document.createElement("span");
// // 	newFaveItem.classList.add("fave");
// // 	newFaveItem.innerText = "❤️";
// // 	newTodoItem.appendChild(newFaveItem);

// // 	newFaveItem.addEventListener("click", handleFaving);
// // };
// /******************************** */
// // Add an event handler when the to do form is submitted that will take whatever the user has typed into the input for new to do items and add display it on the dom using the displayTodoRefactored() function
// todoForm.addEventListener("submit", (event) => {
// 	event.preventDefault();
// 	//   console.log(todoInput.value);
// 	const newTodoString = todoInput.value;
// 	displayTodoRefactored(newTodoString);
// 	event.target.reset();
// });

// // // Iterate through the todoArray variable outside of an event handler so that the initial data from the array is displayed to the dom when the page loads.
// for (let i = 0; i < todoArray.length; i++) {
// 	displayTodoRefactored(todoArray[i]);
// }
// /**************************************************** */

// 	todoForm.reset();
// };

// function renderCommentsEl() {
// 	const commentsSection = document.querySelector("comments--shown");

// 	for (let i = 0; i < comments.length; i++) {
// 		const name = comments[i].name;
// 		const date = comments[i].date;
// 		const content = comments[i].content;
// 		commentsSection.appendChild(comments);
// 	}
// }

// renderCommentsEl();

// //comments form
// const commentForm = document.getElementById("comments--form");

// //target comments in container
// const commentsContainer = document.querySelector("#comments--display");

// //function to generate HTML
// const renderComments = () => {
// 	//create elements and set classes to each

// }

// //create button function
// // buttonEl = document.querySelector(".")
// function displayComments(commentsArr) {
// 	console.log("test for comments section");
// 	for (i = 0; i < commentsArr.length; i++) {
// 		console.log("test within loop");
// 		// const commentsContainer = document.createElement("div");
// 		// commentsContainer.classList.add("comments__container");
// 		// console.log();
// 		const commentsHeading = document.createElement("h1");
// 		commentsHeading.classList.add("comments__heading");
// 		commentsHeading.innerText = "Join the Conversation";
// 		commentsContainer.appendChild(commentsHeading); //parent, appendchild, child
// 		const commentsName = document.createElement("h2");
// 		const inputEl = document.querySelector(".input-field");
// 		inputEl.addEventListener("input", (event) => {
// 			console.log("input event object: ", event);
// 			console.log("event.target: ", event.target);
// 			console.log("event.target.value: ", event.target.value);
// 		});
// 		commentsName.classList.add("comments__name");
// 		commentsName.innerText = commentsArr[i].name;
// 		const commentsContent = document.createElement("h2");
// 		commentsContent.classList.add("comments__content");
// 		commentsContent.innerText = commentsArr[i].content;

// 		//add to the whole section
// 		commentsSection.appendChild(commentsContainer);
// 	}
// }
// displayComments(comments[i]);

// // const inputEl = document.querySelector(".input-field");
// // inputEl.addEventListener("input", (event) => {
// // 	console.log("input event object: ", event);
// // 	console.log("event.target: ", event.target);
// // 	console.log("event.target.value: ", event.target.value);
// // });
// // // //create container for comments
// // // let singleCommentContainer = document.createElement("section");
// // // singleCommentContainer.classList.add("comments--single");
// // // commentsContainer.appendChild(singleCommentContainer);

// // // //create element avatar
// // // let commentAvatar = document.createElement("figure");
// // // // Add any classes or styles
// // // commentAvatar.classList.add("comment--avatar");
// // // // Append the element to a parent
// // // singleCommentContainer.appendChild(commentAvatar);

// // // //create element name
// // // let userName = document.createElement("p");
// // // userName.classList.add("name--content");
// // // commentsContainer.appendChild(userName);

// // // // create element nameText

// // // //create element content
// // // let commentContent = document.createElement("div");
// // // commentContent.classList.add("comments--content");
// // // commentsContainer.appendChild(commentContent);

// // // //create element contentText
// // // let contentText = document.createElement("p");
// // // contentText.innerText = comments.content[i].content;

// //iterate through the comments array variable outside of an event handler so that the initial data from the array is displayed.
// for (let i = 0; i < comments.length; i++) {
// 	commentsRefactored(comments[i]);
// }
