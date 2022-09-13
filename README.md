<div align="center"><img style = "width:100%;"src="https://i.imgur.com/JJvIq83.png"></img></div>
<hr>
<h2 align=center>Cineflex</h2>
<h3 align=center>Web development Project</h3>
<hr>
<h4 align=center>A complete habit tracking application! Entitled to registration, login and many libraries</h4>

<br>
<div align=center style="display:flex; justify-content: center; gap:5%">
    <img src="https://media.giphy.com/media/mZmjSYFYIdJDVf0itm/giphy.gif" width="90%"></img>
</div>
<br><hr>

## Features

- User can register and login
- Login persistence with localstorage
- User can create new habits by defining the days of the week and delete them
- Habits of the day are shown on the home screen and can be considered completed
- Library react-circular-progressbar shows the percentage of completed habits

## Requirements

- Layout

  - [x] Apply layout to mobile, following Figma below. It is not necessary to implement a desktop version.

- Login screen (`/` route)
    - [x] The email and password must be sent to the API according to the documentation
    - [x] While loading, the fields and the button must be disabled, according to the layout
    - [x] On success, the user should be redirected to the `/today` route
    - [x] In case of failure, an `alert` must be displayed informing the user and the fields/button must be enabled again
    - [x] When clicking on the link to register, the user must be redirected to the `/cadastro` route
- Registration screen (route `/cadastro`)
    - [x] Data must be sent to the API as per documentation
    - [x] While loading, the fields and the button must be disabled, according to the layout
    - [x] In case of success, the user should be redirected to the `/` route (Login route)
    - [x] In case of failure, an alert must be displayed informing the user and the fields/button must be enabled again
    - [x] When clicking on the link to login, the user should be redirected to the `/` route (Login route)
- Top and Menu
    - [x] Top and menu must have fixed positioning
    - [x] At the top, the user's photo should be displayed according to the layout
    - [x] In the menu, the 3 Habits, Today and History buttons should redirect the user to the `/habitos`, `/hoje` and `/historico` routes respectively
- Habits screen (`/habitos` route)
    - [x] Load user habits, sending request to API according to documentation and displaying below according to layout
    - [x] When clicking to delete a habit, a `confirm` should be displayed to confirm if the user would really like to delete the habit. If so, a request must be sent to the API according to the documentation and the habits reloaded soon afterwards.
    - [x] If the user does not have any registered habit, the text must be displayed according to the layout
    - [x] By clicking on the "+" button, a habit registration form should be displayed just below the title according to the layout
    - [x] The user must enter the name of the habit in a text field and select the days of the week that he wants to perform the habit according to the layout
    - [x] When saving, the data must be sent to the API according to the documentation
    - [x] While loading, the text field and the button must be disabled, according to the layout. The weekday buttons should be disabled, but no visual change is required during loading.
    - [x] In case of success, the fields must be cleared and re-enabled, the form must be hidden again and the list of habits below reloaded
    - [x] In case of error, the fields must be re-enabled and an alert must indicate the problem to the user
    - [x] When canceling, the form must be hidden. If you have data already filled in, they must be kept in case the user reopens the creation form.
- Today screen (route `/hoje`)
    - [x] Load the user's habits today, sending a request to the API according to the documentation and displaying it below according to the layout
    - [x] The title of the screen must display the current day according to the layout
    - [x] The phrase "No habits completed yet" or "x% of habits completed" should be displayed in the subtitle, depending on the user's progress
    - [x] When marking or unmarking a habit as completed, a request must be sent to the API according to the documentation. No need to load.
    - [x] When marking a habit as completed, the current sequence count must be green
    - [x] If the current sequence is the same as the user's record, this must also be displayed in green
- History screen (route `/historico`)
    - [x] The text must be displayed according to the layout

## Bonus

- Login persistence
     - [x] After login, save the user object on the machine using **Local Storage**
     - [x] When opening the app, check if there is a user stored in Local Storage. If so, populate the UserContext with this data and redirect the user directly to the app's home screen, preventing him from logging in again

## Usage

Install my project with npm

> Clone the repository:

```bash
  git clone git@github.com:DanielCdOliveira/projeto10-trackit.git
```
>Install dependences:

```bash
  npm install
```
> Run aplication:

```bash
  npm start
```

## Deploy

- Deploy using [Vercel](https://projeto10-trackit-liart.vercel.app/)

### Built with

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![CSS](https://img.shields.io/badge/CSS-239120?&style=for-the-badge&logo=css3&logoColor=white)
![Javascript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Visual Studio Code](https://img.shields.io/badge/Visual%20Studio%20Code-0078d7.svg?style=for-the-badge&logo=visual-studio-code&logoColor=white)
![Git](https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white)

### Contact

[![LinkedIn][linkedin-shield]][linkedin-url]

[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=blue
[linkedin-url]: https://www.linkedin.com/in/danielcdoliveira/
