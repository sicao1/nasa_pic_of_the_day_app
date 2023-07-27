window.onload = (event) => {
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
        const imageUrl = json.url;
        const imgElement = document.createElement("img");
        imgElement.src = imageUrl;

        const moveImg = document.querySelector("#image-container");
        moveImg.append(imgElement);
      },
      (err) => console.log(err)
    );
};
