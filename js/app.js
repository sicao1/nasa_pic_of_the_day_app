window.onload = (event) => {
  fetch(
    "https://api.nasa.gov/planetary/apod?api_key=B1DPFwe5OBjq2QkaewOMi7dA2ZffDLqVn6H23mEx"
  )
    .then((response) => {
      return response.json();
    })
    .then(
      (json) => console.log(json),
      (err) => console.log(err)
    );
};
