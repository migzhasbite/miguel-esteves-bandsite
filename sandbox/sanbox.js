const sandboxContainer = document.querySelector(".sandbox__container");

//point to comments section in HTML
const commentsSection = document.querySelector(".comments");
//API values to call
const apiKey = "?api_key=8e49ef38-f8d2-49ef-b098-a12df8fa3554";
const apiURL = `https://project-1-api.herokuapp.com/comments${apiKey}`;

// let axiosResponse = axios.get(apiURL);

// axios.post(`https://corsanywhere.herokuapp.com/${apiURL}`, {
// 	formData,
// });
axios
	.get(apiURL)
	//inspect response in the .then
	.then((response) => {
		console.log(response);
		console.log(response.data);
		//this will clear pre-existing content in container on the site
		commentsSection.innerHTML = "";
		const displayComments = response.data.forEach((element) => {
			// for (let i = 0; i < response.data.length; i++) {
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
			commentsName.innerText = `${element.name}`;

			const commentsDate = document.createElement("p");
			commentsDate.classList.add("comments__container--content-date");
			commentsContentWrapperHeading.appendChild(commentsDate);
			const dateFormat = new Date(element.timestamp).toLocaleDateString(
				"en-US"
			);
			commentsDate.innerText = dateFormat;

			const commentsContent = document.createElement("p");
			commentsContent.classList.add("comments__container--content-comment");
			commentsContentWrapper.appendChild(commentsContent);
			commentsContent.innerText = `${element.comment}`;
		});
	})
	// displayComments();
	.catch((error) => {
		console.log(error);
	});

// // upon submission
const formEl = document.querySelector(".form__content");
// // displayComments();
const formData = formEl.addEventListener("submit", (event) => {
	event.preventDefault();
	commentsSection.innerHTML = "";
	axios.post(`https://corsanywhere.herokuapp.com/${apiURL}`, {
	const userName = event.target.userName.value;
	const userDate = new Date().toLocaleDateString("en-US");
	const userComment = event.target.userComment.value;
// });
// .then((response) => {
// 	console.log(response);
// 	console.log(response.id);
// })
// .catch((error) => {
// 	console.log(error);
// });

// 	const userName = event.target.userName.value;
// 	const userDate = new Date().toLocaleDateString("en-US");
// 	const userComment = event.target.userComment.value;
// 	console.log(userName);

// 	const newComment = {
// 		name: userName,
// 		comment: userComment,
// 		id: [i].id,
// 		timestamp: userDate,
// 	};
// 	commentsArr.unshift(newComment);
// 	displayComments();
// 	formEl.reset();
// });

// //display comments from API

// function commentsArr(array) {
// 	for (i = 0; i < array.length; i++) {
// 		let keyValuePairs = {
// 			name: array[i].name,
// 			comment: array[i].comment,
// 			id: array[i].id,
// 			likes: "",
// 			timestamp: array[i].timestamp,
// 		};
// 	}
// }
// JSON.stringify(argument) will turn a piece of data into a JSON string
// const stringifiedBooks = JSON.stringify(books);
// console.log(stringifiedBooks);

// JSON.parse(argument) will turn a piece of data into a JavaScript object
// const parsedBooks = JSON.parse(stringifiedBooks);
// console.log(parsedBooks);

// axios requests return Promises

// console.log(axiosResponse);

// We can handle the Promises that Axios returns using .then() and .catch()
// .then() takes a function as a parameter
// Typically this will be an anonymous function. By specifying a paremeter name inside of the anonymous function, we can inspect the response from the axios request
// .then((result) => {
// 	// This will console.log the entire axios response
// 	console.log(result);
// 	// .data will return just the data (in this case, an array of book objects)
// 	console.log(result.data);
// 	allBooksContainer.innerHTML = "";

// 	// We can use array methods (.forEach(), .map(), .filter(), etc) to iterate through the data from our API response
// 	const content = result.data.forEach((element) => {
// 		const singleBookContainer = document.createElement("div");
// 		singleBookContainer.classList.add("card");

// 		const title = document.createElement("h1");
// 		title.classList.add("title");
// 		title.innerText = `${element.name}`;

// 		const authors = document.createElement("h2");
// 		authors.classList.add("authors");
// 		authors.innerText = `👱‍♂️ Author/Authors: ${element.authors}`;

// 		const numOfPages = document.createElement("p");
// 		numOfPages.classList.add("numOfPages");
// 		numOfPages.innerText = `📚 Number of Pages: ${element.numberOfPages}`;

// 		const country = document.createElement("p");
// 		country.classList.add("country");
// 		country.innerText = element.country;

// 		const releaseDate = document.createElement("p");
// 		releaseDate.classList.add("releaseDate");
// 		releaseDate.innerText = `⏰ Release Date: ${element.released}`;

// 		singleBookContainer.appendChild(title);
// 		singleBookContainer.appendChild(authors);
// 		singleBookContainer.appendChild(numOfPages);
// 		singleBookContainer.appendChild(country);
// 		singleBookContainer.appendChild(releaseDate);
// 		allBooksContainer.appendChild(singleBookContainer);
// 	});
// })
// .catch((error) => {
// 	console.log(error);
// });}}
//create function to retrieve inputted data
