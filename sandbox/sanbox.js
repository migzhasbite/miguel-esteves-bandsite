const sandboxContainer = document.querySelector(".sandbox__container");
const apiURL = "https://project-1-api.herokuapp.com/";
const apiKey = "?api_key=8e49ef38-f8d2-49ef-b098-a12df8fa3554";

axios.post(``);

// const apiURL = "https://anapioficeandfire.com/api/books/";
const allBooksContainer = document.querySelector(".container");

const books = [
	{ name: "A Game of Thrones", numberOfPages: 694 },
	{ name: "A Clash of Kings", pages: 768 },
	{ name: "A Storm of Swords", pages: 992 },
];

// console.log(books);

// JSON.stringify(argument) will turn a piece of data into a JSON string
// const stringifiedBooks = JSON.stringify(books);
// console.log(stringifiedBooks);

// JSON.parse(argument) will turn a piece of data into a JavaScript object
// const parsedBooks = JSON.parse(stringifiedBooks);
// console.log(parsedBooks);

// axios requests return Promises
const axiosResponse = axios.get(apiURL);
console.log(axiosResponse);

axios
	.get(apiURL)
	// We can handle the Promises that Axios returns using .then() and .catch()
	// .then() takes a function as a parameter
	// Typically this will be an anonymous function. By specifying a paremeter name inside of the anonymous function, we can inspect the response from the axios request
	.then((result) => {
		// This will console.log the entire axios response
		console.log(result);
		// .data will return just the data (in this case, an array of book objects)
		console.log(result.data);
		allBooksContainer.innerHTML = "";

		// We can use array methods (.forEach(), .map(), .filter(), etc) to iterate through the data from our API response
		const content = result.data.forEach((element) => {
			const singleBookContainer = document.createElement("div");
			singleBookContainer.classList.add("card");

			const title = document.createElement("h1");
			title.classList.add("title");
			title.innerText = `${element.name}`;

			const authors = document.createElement("h2");
			authors.classList.add("authors");
			authors.innerText = `👱‍♂️ Author/Authors: ${element.authors}`;

			const numOfPages = document.createElement("p");
			numOfPages.classList.add("numOfPages");
			numOfPages.innerText = `📚 Number of Pages: ${element.numberOfPages}`;

			const country = document.createElement("p");
			country.classList.add("country");
			country.innerText = element.country;

			const releaseDate = document.createElement("p");
			releaseDate.classList.add("releaseDate");
			releaseDate.innerText = `⏰ Release Date: ${element.released}`;

			singleBookContainer.appendChild(title);
			singleBookContainer.appendChild(authors);
			singleBookContainer.appendChild(numOfPages);
			singleBookContainer.appendChild(country);
			singleBookContainer.appendChild(releaseDate);
			allBooksContainer.appendChild(singleBookContainer);
		});
	})
	.catch((error) => {
		console.log(error);
	});
