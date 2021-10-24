//boiler plate:
// class TopBar {
//   constructor() {}
//   render() {
// return ``
// }
// }
// Todo: Make an entire web application
//
// Components:
// - Hero banner
// - Title banner
// - Article
// - Button

class HeroBanner {
	constructor(imageUrl, altText) {
		this.imageUrl = imageUrl;
		this.altText = altText;
	}

	render() {
		return `
		  <header class="header">
			  <img 
				  src="${this.imageUrl}" 
				  alt="${this.altText}"
				  class="header__image"
			  />
		  </header>
	  `;
	}
}

class TitleBanner {
	constructor(text) {
		this.text = text;
	}

	render() {
		return `
		  <div class="main-title">
			  <h1 class="main-title__heading">
				  ${this.text}
			  </h1>
		  </div>
	  `;
	}
}

class Article {
	constructor(paragraphs) {
		this.paragraphs = paragraphs;
	}
	render() {
		const transformedParaphs = this.paragraphs
			.map((paragraph) => {
				return "<p>" + paragraph + "</p>";
			})
			.join("");

		return `
		  <article>
			  ${transformedParaphs}
		  </article>
	  `;
	}
}

class HomePage {
	constructor() {
		this.herobanner = new HeroBanner(
			"./images/dog-banner.jpg",
			"Five adorable puppies!"
		);
		this.titlebanner = new TitleBanner("Welcome to Puppy Place!");
		this.article = new Article([
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia sed molestiae alias. Dolorum ipsa, fuga alias nostrum ab voluptatem iste facilis. Sed repellat sit voluptatum quis, quisquam vitae unde itaque?",

			"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit provident libero quod nemo incidunt. Enim ipsum omnis libero nemo fugiat modi eligendi. Vel harum odit, nisi at rerum soluta aspernatur.",

			"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui natus quibusdam facere ea expedita aliquam! Deserunt suscipit tenetur optio harum nobis praesentium ducimus dolores, reiciendis magni, libero accusantium. Eum, blanditiis.",
		]);
	}

	render() {
		return `
		  ${this.herobanner.render()}
		  ${this.titlebanner.render()}
		  ${this.article.render()}
	  `;
	}
}

// 0. Select our "app" element
const appEl = document.getElementById("app");

// 1. Make an instance of our home page component
const homepage = new HomePage();

// 2. Render that home page into our app
appEl.innerHTML = homepage.render();
