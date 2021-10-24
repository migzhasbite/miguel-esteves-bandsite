//API key and URL
const apiKey = "?api_key=8e49ef38-f8d2-49ef-b098-a12df8fa3554";
const apiURL = `https://project-1-api.herokuapp.com/showdates${apiKey}`;

const showsSection = document.querySelector(".shows");

//retrieve from API
axios
	.get(apiURL)
	.then((response) => {
		console.log(response);
		console.log(response.data);
		showsSection.innerHTML = "";

		const showsHeading = document.createElement("h2");
		showsHeading.classList.add("shows__heading");
		showsSection.appendChild(showsHeading);
		showsHeading.innerText = "Shows";

		const displayShows = response.data.forEach((element) => {
			//create HTML elements
			const showsContainer = document.createElement("div");
			const showsDateInfo = document.createElement("div");
			const showsDateHeading = document.createElement("p");
			const showsDate = document.createElement("p");
			const dateFormat = new Date(Number(element.date)).toLocaleDateString(
				"en-US"
			);
			const showsVenueInfo = document.createElement("div");
			const showsVenueHeading = document.createElement("p");
			const showsVenue = document.createElement("p");
			const showsLocationInfo = document.createElement("div");
			const showsLocationHeading = document.createElement("p");
			const showsLocation = document.createElement("p");
			const buttonElWrapper = document.createElement("div");
			const buttonEl = document.createElement("button");

			//add class
			showsContainer.classList.add("shows__container");
			showsDateInfo.classList.add("shows__container--date");
			showsDateHeading.classList.add("shows__container--heading");
			showsDate.classList.add("shows__container--info");
			showsVenueInfo.classList.add("shows__container--venue");
			showsVenueHeading.classList.add("shows__container--heading");
			showsVenue.classList.add("shows__container--info");
			showsLocationInfo.classList.add("shows__container--location");
			showsLocationHeading.classList.add("shows__container--heading");
			showsLocation.classList.add("shows__container--info");
			buttonElWrapper.classList.add("shows__container--button");
			buttonEl.classList.add("shows__button");

			//append child to parent elements
			showsSection.appendChild(showsContainer);
			showsContainer.appendChild(showsDateInfo);
			showsDateInfo.appendChild(showsDateHeading);
			showsDateInfo.appendChild(showsDate);
			showsContainer.appendChild(showsVenueInfo);
			showsVenueInfo.appendChild(showsVenueHeading);
			showsVenueInfo.appendChild(showsVenue);
			showsContainer.appendChild(showsLocationInfo);
			showsLocationInfo.appendChild(showsLocationHeading);
			showsLocationInfo.appendChild(showsLocation);
			showsContainer.appendChild(buttonElWrapper);
			buttonElWrapper.appendChild(buttonEl);

			//apply innerText
			showsDateHeading.innerText = "Date";
			showsDate.innerText = dateFormat;
			showsVenueHeading.innerText = "Venue";
			showsVenue.innerText = `${element.place}`;
			showsLocationHeading.innerText = "Location";
			showsLocation.innerText = `${element.location}`;
			buttonEl.innerText = "BUY TICKETS";

			buttonEl.setAttribute("onclick", ".location.href='./shows.html';");
		});
	})
	.catch((error) => {
		console.log(error);
	});
