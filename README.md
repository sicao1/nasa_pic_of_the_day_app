# nasa_pic_of_the_day_app

GA first mini project

This site displays an astronomy picture of the day (APOD) with corresponding date and a brief explanation of the picture. Users upon entering the site will see the current days APOD with explanation. Users will also have an option to select a specific date and view that APOD. Below the main section is an explore more section where a carousel displays 7 randomly generated APOD's that display date and title when hovered over, and when clicked move into the main section to better view the picture and see the description.

The approach taken:
The site is meant to be fun and exploratory. If the user is seeking a specific date or wants to randomly explore they can.

Techonology used:

- used html, css and js to create a carousel. Process of making carousel was resourced from https://www.youtube.com/watch?v=6QE8dXq9SOE.

- additionally within the carousel are overlays for each card. Process of making overlay was resourced from https://www.youtube.com/watch?v=exb2ab72Xhs.

- icons used for carousel sourced from https://ionic.io/ionicons.

- site was designed computer first, then made responsive for small devices. Three responsive settings for smaller desktops, tablets or phones have @media setting within the style.css file.

- fetch was used to retrieve data from the NASA api site. An api key was neccessary in order to pull data.

- header section includes a form where users can import a date and once they click view it will change when is shown in the main section.

  - in order to accomplish this a new fetch request had to be created to take in the date input from the form so to fetch a new https
  - formatting the date. I wanted the date to show MM DD YYYY, but the input for the https has to be YYYY-MM-DD.

- main section includes date, exmplantion and img all fetched from NASA's api. Automatically set to pull current days APOD.

- explore more section contains a carousel with seven cards. Each card is a different APOD with a randomly choosen date.

  - in order to accomplish that had to randomly generate numbers for year, month and date; then combine them in a specific way.
  - since I wanted each card to randomly generate a for of loop was used for each card that would genreate a random date. Then also created an overlay to display the date and title of the APOD
  - also had to contend with adding a 0 in front of the months less than 10.

- the carousel uses icons that the user can use to move left or right within the carousel

- user is also able to click on the explore more APOD and have it displayed in the main section. This allows for better view of the picture and the full explanation of the photo.

  - this required a for loop that targets the overlay, grabs the date then fetches that APOD to populate the main section

  Unsolved problems:

  - carousel movement does not always center or fully display the last image. The offsetWidth, makes it feel unfinished when scrolling right further than 4 cards.

  - more css/formatting on the responsiveness for smaller viewscreens.

  - run into errors when APOD is a youtube video

  - when randomly chooosing a date, I played it safe and put the max day to 28, so there was not an error where the month didn't have a 29th, 30th or 31st.
