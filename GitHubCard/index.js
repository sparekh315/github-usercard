/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>

*/


/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

    Skip to STEP 3.
*/

/*
  STEP 4: Pass the data received from Github into your function,
    and append the returned markup to the DOM as a child of .cards
*/

/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/

 




/*
  STEP 3: Create a function that accepts a single object as its only argument.
    Using DOM methods and properties, create and return the following markup:

    <div class="card">
      <img src={image url of user} />
      <div class="card-info">
        <h3 class="name">{users name}</h3>
        <p class="username">{users user name}</p>
        <p>Location: {users location}</p>
        <p>Profile:
          <a href={address to users github page}>{address to users github page}</a>
        </p>
        <p>Followers: {users followers count}</p>
        <p>Following: {users following count}</p>
        <p>Bio: {users bio}</p>
      </div>
    </div>
*/

//card building funciton
function UserCard(userData) {
  const cardContainer = document.createElement('div'),
        cardImg = document.createElement('img'),
        cardInfoContainer =document.createElement('div'),
        name = document.createElement('h3'),
        userName = document.createElement('p'),
        location = document.createElement('p'),
        profile = document.createElement('p'),
        profileLink = document.createElement('a'),
        followers = document.createElement('p'),
        following = document.createElement('p'),
        bio = document.createElement('p');

  
  cardContainer.classList.add('card');
  cardInfoContainer.classList.add('card-info');
  name.classList.add('name');
  userName.classList.add('username');


  cardContainer.appendChild(cardImg);
  cardContainer.appendChild(cardInfoContainer);

  cardInfoContainer.appendChild(name);
  cardInfoContainer.appendChild(userName);
  cardInfoContainer.appendChild(location);
  cardInfoContainer.appendChild(profile);
  cardInfoContainer.appendChild(profileLink);
  cardInfoContainer.appendChild(followers);
  cardInfoContainer.appendChild(following);
  cardInfoContainer.appendChild(bio);

  cardImg.src = userData.avatar_url;
  name.textContent = userData.name;
  userName.textContent = userData.login;
  location.textContent = userData.location;
  profile.textContent = 'Profile Link:';
  profileLink.href = userData.html_url;
  profileLink.textContent = userData.html_url;
  followers.textContent = userData.followers;
  following.textContent = userData.following;
  bio.textContent = userData.bio;



return cardContainer

}

//grabbing .cards className div to hold new cards
const cards = document.querySelector('.cards');
console.log(cards);



//personal card
axios
.get(`https://api.github.com/users/sparekh315`)
.then(response => {
  cards.prepend(UserCard(response.data));
  console.log(response);
})
.catch(error => {console.log('Data not returned', error);
});



//followers cards
const followersArray = ['tetondan', 'dustinmyers','justsml','luishrd', 'bigknell'];

followersArray.forEach(user => {
axios
.get(`https://api.github.com/users/${user}`)
.then(response => {
  cards.appendChild(UserCard(response.data));
  //console.log(response);
})
.catch(error => {console.log('Data not returned', error);
});
});



