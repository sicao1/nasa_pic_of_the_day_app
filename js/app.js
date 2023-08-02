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

  // explore more section to generate randomly
  let randomGeneratedDate = "";
  const randomYear = () => {
    min = Math.ceil(1995);
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
  randomGeneratedDate = `${randomYear()}-${randomMonth()}-${randomDay()}`;
  console.log(randomGeneratedDate);

  fetch(
    `https://api.nasa.gov/planetary/apod?api_key=B1DPFwe5OBjq2QkaewOMi7dA2ZffDLqVn6H23mEx&date=${randomGeneratedDate}`
  )
    .then((response) => {
      return response.json();
    })
    .then((json) => {
      console.log(json);
      // Get image
      const randomUrl = json.url;
      const placeRandomUrl = document.querySelector("#browse-img-1");
      placeRandomUrl.src = randomUrl;

      // Get date
      let randomDate = json.date.split("-");
      randomDate = `${randomDate[1]} ${randomDate[2]} ${randomDate[0]}`;
      const placeRandomDate = document.querySelector("#image-date-1");
      placeRandomDate.textContent = randomDate;

      // Get title
      const randomTitle = json.title;
      const placeRandomTitle = document.querySelector("#image-title-1");
      placeRandomTitle.textContent = randomTitle;
    });

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
};
