window.onload = (event) => {
  event.preventDefault();

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
        console.log(json.title);
        console.log(json.date);
        // need to delete lines aboveonce done
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

  let selectedDate = null;

  const storeDate = () => {
    const dateInput = document.querySelector("#date");
    selectedDate = dateInput;
    console.log(selectedDate);
  };
  storeDate();

  //Getting Title of Photo
};
