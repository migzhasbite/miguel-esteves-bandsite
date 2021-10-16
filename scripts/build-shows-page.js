// You must create the list of concerts using JavaScript DOM manipulation / flexbox layout.
// You must have an array in JavaScript with all of concerts data and render the concerts HTML dynamically using the array data. It’s up to your discretion to decide on properties you create to represent all of the individual concert data.
// No template literals should be used. All dynamic HTML should be added to DOM via DOM Methods for individual elements. Avoid bulk assigning stringified HTML using innerHTML
// Utilize your knowledge of JavaScript DOM Manipulation and built in functions to create all the content between the hero image and the footer, as well as create your own functions as necessary. There should be no need to have any shows content housed within your html file for this section.
// The individual rows of the Shows table will have different styling applied depending on the state of the table row. Utilize your knowledge of both JavaScript and Sass to accomplish this.
// The individual rows of the Shows table need to have a hover state applied to them when a cursor is hovering over the table row, as per style guide. This can be done by utilizing a pseudo class within your Sass.
// Additionally, clicking on an individual row should make that row "selected" or "active", applying a modifier CSS class via JavaScript. Utilize your knowledge of both JavaScript and Sass to accomplish this.
// Your styling will still be applied through your Sass files. Do not use the built in JavaScript DOM style method.

const showsArr = [
	{
		date: "Mon Sept 06 2021",
		venue: "Ronald Lane",
		location: "San Francisco, CA",
	},
	{
		date: "Tue Sept 21 2021",
		venue: "Pier 3 East",
		location: "San Francisco, CA",
	},
	{
		date: "Fri Oct 15 2021",
		venue: "View Lounge",
		location: "San Francisco, CA",
	},
	{
		date: "Sat Nov 06 2021",
		venue: "Hyatt Agency",
		location: "San Francisco, CA",
	},
	{
		date: "Fri Nov 26 2021",
		venue: "Moscow Center",
		location: "San Francisco, CA",
	},
	{
		date: "Wed Dec 15 2021",
		venue: "Press Club",
		location: "San Francisco, CA",
	},
];

const showsSection = document.querySelector(".shows");

const showsHeading = document.createElement("h2");
showsHeading.classList.add("shows__heading");
showsSection.appendChild(showsHeading);
showsHeading.innerText = "Shows";

for (let i = 0; i < showsArr.length; i++) {
	const showsContainer = document.createElement("div");
	showsContainer.classList.add("shows__container");
	showsSection.appendChild(showsContainer);
	// 	// showsContainer = showsArr;

	const showsDateInfo = document.createElement("div");
	showsDateInfo.classList.add("shows__container--date");
	showsContainer.appendChild(showsDateInfo);

	const showsDateHeading = document.createElement("p");
	showsDateHeading.classList.add("shows__container--heading");
	showsDateInfo.appendChild(showsDateHeading);
	showsDateHeading.innerText = "Date";
	const showsDate = document.createElement("p");
	showsDate.classList.add("shows__container--info");
	showsDateInfo.appendChild(showsDate);
	showsDate.innerText = showsArr[i].date;

	const showsVenueInfo = document.createElement("div");
	showsVenueInfo.classList.add("shows__container--venue");
	showsContainer.appendChild(showsVenueInfo);

	const showsVenueHeading = document.createElement("p");
	showsVenueHeading.classList.add("shows__container--heading");
	showsVenueInfo.appendChild(showsVenueHeading);
	showsVenueHeading.innerText = "Venue";
	const showsVenue = document.createElement("p");
	showsVenue.classList.add("shows__container--info");
	showsVenueInfo.appendChild(showsVenue);
	showsVenue.innerText = showsArr[i].venue;

	const showsLocationInfo = document.createElement("div");
	showsLocationInfo.classList.add("shows__container--location");
	showsContainer.appendChild(showsLocationInfo);

	const showsLocationHeading = document.createElement("p");
	showsLocationHeading.classList.add("shows__container--heading");
	showsLocationInfo.appendChild(showsLocationHeading);
	showsLocationHeading.innerText = "Location";
	const showsLocation = document.createElement("p");
	showsLocation.classList.add("shows__container--info");
	showsLocationInfo.appendChild(showsLocation);
	showsLocation.innerText = showsArr[i].location;

	//Buy Tickets button div
	const buttonElWrapper = document.createElement("div");
	buttonElWrapper.classList.add("shows__container--button");
	showsContainer.appendChild(buttonElWrapper);

	const buttonEl = document.createElement("button");
	buttonEl.classList.add("button");
	buttonElWrapper.appendChild(buttonEl);
	buttonEl.innerText = "BUY TICKETS";
}
