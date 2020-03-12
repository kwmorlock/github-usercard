/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/

/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 

   Skip to Step 3.
*/

/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/

/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/

// const followersArray = [];

function createComponent(obj){
  const carddivone = document.createElement('div');
  const cardimg = document.createElement('img');
  const carddivtwo = document.createElement('div');
  const cardh = document.createElement('h3');
  const onep = document.createElement('p');
  const twop = document.createElement('p');
  const threep = document.createElement('p');
  const onea = document.createElement('a');
  const fourp = document.createElement('p');
  const fivep = document.createElement('p');
  const sixp = document.createElement('p');
  

 
  carddivone.appendChild(cardimg);
  carddivone.appendChild(carddivtwo);
  carddivone.appendChild(firstParagraph);
  carddivone.appendChild(cardh);
  carddivone.appendChild(onep);
  carddivone.appendChild(twop);
  carddivone.appendChild(threep);
  carddivone.appendChild(onea);
  carddivone.appendChild(fourp);
  carddivone.appendChild(fivep);
  carddivone.appendChild(sixp);

  carddivone.classList.add('card');
  carddivtwo.classList.add('card-info');
  cardh.classList.add('name');
  onep.classList.add('username');
  // expandButton.classList.add('expandButton');



  cardimg.setAttribute = obj.avatar_url;
  cardh.textContent = obj.name;
  onep.textContent = obj.login;
  twop.textContent = obj.location;
  onea.textContent = obj.url;
  fourp.textContent = obj.followers;
  fivep.textContent = obj.following;
  
  

  return carddivone;

}

const mycard =document.querySleector('.cards')
// const articles =document.querySelector('.articles');

// data.map(mapinfo => {
//   articles.appendChild(createComponent(mapinfo))
// })


/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:

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

/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/



axios.get('https://api.github.com/users/kwmorlock')
  .then(response => {
  console.log(response);
  response.data.message.forEach(cardSrc => {
    entryPoint.append(myCard(cardSrc))
  })
 })
  .catch(error => {
  console.log("the data was not returned", error)
})