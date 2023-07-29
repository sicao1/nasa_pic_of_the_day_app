window.onload = (event) => {
  // event.preventDefault();

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
        console.log(json.url);

        // Get image
        const imageUrl = json.url;
        const imgElement = document.createElement("img");
        imgElement.src = imageUrl;
        const moveImg = document.querySelector("#image-container");
        moveImg.append(imgElement);

        // Get Title
        const title = json.title;
        const placeTitle = document.querySelector(".title-of-photo h2");
        placeTitle.append(title);

        // Get Date
        const date = json.date;
        const placeDate = document.querySelector(".date-choosen h2");
        placeDate.append(date);

        // Get Explanation
        const explanation = json.explanation;
        const placeExplanation = document.querySelector(".explanation p");
        placeExplanation.append(explanation);
      },
      (err) => console.log(err)
    );

  // user chooses
  // Store date so user can choose a date to see different images

  // need to use a different site:
  // apod.nasa.gov/apod/ap${YYMMDD}.html
  // https://api.nasa.gov/planetary/apod?api_key=B1DPFwe5OBjq2QkaewOMi7dA2ZffDLqVn6H23mEx&date=2023-07-01&hd=true

  document.querySelector(".cta-form");
  addEventListener("submit", (event) => {
    event.preventDefault();

    const dateInputValue = document.querySelector("#date-input").value;
    console.log(dateInputValue);

    fetch(
      `https://api.nasa.gov/planetary/apod?api_key=B1DPFwe5OBjq2QkaewOMi7dA2ZffDLqVn6H23mEx&date=${dateInputValue}&hd=true`
    )
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        console.log(json);
        console.log(json.url);

        const newImgUrl = json.url;
        const imgSrc = document.querySelector("img");
        imgSrc.src = newImgUrl;
      });
  });
};
