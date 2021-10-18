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
	buttonEl.classList.add("shows__button");
	buttonElWrapper.appendChild(buttonEl);
	buttonEl.innerText = "BUY TICKETS";
	buttonEl.setAttribute("onclick", ".location.href='./shows.html';");
}
