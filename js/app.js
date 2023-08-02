window.onload = (event) => {
  event.preventDefault();

  // Starting point (baseline)
  fetch(
    "https://api.nasa.gov/planetary/apod?api_key=B1DPFwe5OBjq2QkaewOMi7dA2ZffDLqVn6H23mEx"
  )
    .then((response) => {
      return response.json();
    })
    .then(
      (json) => {
        console.log(json);
        // Get image
        const imageUrl = json.url;
        const imgElement = document.createElement("img");
        imgElement.src = imageUrl;
        imgElement.classList = "starter-img";
        const moveImg = document.querySelector("#image-container");
        moveImg.append(imgElement);

        // Get Title
        const title = json.title;
        const placeTitle = document.querySelector(".title-of-photo h2");
        placeTitle.append(title);

        // Get Date
        let date = json.date.split("-");
        date = `${date[1]} ${date[2]} ${date[0]}`;
        const placeDate = document.querySelector(".date-choosen h2");
        placeDate.append(date);

        // Get Explanation
        const explanation = json.explanation;
        const placeExplanation = document.querySelector(".explanation p");
        placeExplanation.append(explanation);
      },
      (err) => console.log(err)
    );

  // use user input to change what is viewed on screen
  document.querySelector(".cta-form");
  addEventListener("submit", (event) => {
    event.preventDefault();

    const dateInputValue = document.querySelector("#date-input").value;
    console.log(dateInputValue);

    // fetch new api json data and change
    fetch(
      `https://api.nasa.gov/planetary/apod?api_key=B1DPFwe5OBjq2QkaewOMi7dA2ZffDLqVn6H23mEx&date=${dateInputValue}&hd=true`
    )
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        console.log(json);
        // change image
        const newImgUrl = json.url;
        const imgSrc = document.querySelector("img");
        imgSrc.src = newImgUrl;

        // change date shown
        let newDate = json.date.split("-");
        newDate = `${newDate[1]} ${newDate[2]} ${newDate[0]}`;
        const placeNewDate = document.querySelector(".date-choosen h2");
        placeNewDate.textContent = newDate;

        // change title
        const newTitle = json.title;
        const placeNewTitle = document.querySelector(".title-of-photo h2");
        placeNewTitle.textContent = newTitle;

        // change explanation
        const newExplanation = json.explanation;
        const placeNewExplanation = document.querySelector(".explanation p");
        placeNewExplanation.textContent = newExplanation;
      });
  });

  // explore more section to generate randomly
  const cards = document.querySelectorAll(".carousel > li");

  for (const card of cards) {
    const randomGeneratedDate = () => {
      const randomYear = () => {
        min = Math.ceil(1996);
        max = Math.floor(2023);
        return Math.floor(Math.random() * (max - min + 1) + min);
      };
      const randomMonth = () => {
        min = Math.ceil(1);
        max = Math.floor(12);
        let randomGenMonth = Math.floor(Math.random() * (max - min + 1) + min);
        return randomGenMonth < 10 ? "0" + randomGenMonth : randomGenMonth;
      };
      const randomDay = () => {
        min = Math.ceil(1);
        max = Math.floor(28);
        return Math.floor(Math.random() * (max - min + 1) + min);
      };
      return `${randomYear()}-${randomMonth()}-${randomDay()}`;
    };
    const randomDate = randomGeneratedDate();

    fetch(
      `https://api.nasa.gov/planetary/apod?api_key=B1DPFwe5OBjq2QkaewOMi7dA2ZffDLqVn6H23mEx&date=${randomDate}`
    )
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        console.log(json);
        // Get image
        const randomUrl = json.url;
        const placeRandomUrl = card.querySelector(".image-img");
        placeRandomUrl.src = randomUrl;

        // Get date
        let randomDate = json.date.split("-");
        randomDate = `${randomDate[1]} ${randomDate[2]} ${randomDate[0]}`;
        const placeRandomDate = card.querySelector(".image-date");
        placeRandomDate.textContent = randomDate;

        // Get title
        const randomTitle = json.title;
        const placeRandomTitle = card.querySelector(".image-title");
        placeRandomTitle.textContent = randomTitle;
      });
  }

  //buttons on carousel
  const carousel = document.querySelector(".carousel");
  const arrowBtns = document.querySelectorAll(".wrapper ion-icon");
  const firstCardWidth = carousel.querySelector(".card").offsetWidth;

  arrowBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      carousel.scrollLeft +=
        btn.id === "left" ? -firstCardWidth : firstCardWidth;
    });
  });

  // choose from explore more to display on main section
  const imgButton = document.querySelectorAll(".image-overlay");

  for (let i = 0; i < imgButton.length; i++) {
    imgButton[i].addEventListener("click", function (event) {
      event.preventDefault();
      console.log(`I've been clicked`);
      console.log(imgButton[i]);

      const exploreMoreDate = document.querySelector(".image-date");
      let formatExploreMoreDate = exploreMoreDate.textContent.split(" ");
      formatExploreMoreDate = `${exploreMoreDate[2]}-${exploreMoreDate[0]}-${exploreMoreDate[1]}`;
      console.log(formatExploreMoreDate);
    });
  }
};
