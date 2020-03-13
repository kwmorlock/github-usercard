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

// const mycardparent =document.querySelector('.cards')
//mycardparent here so its available to other functions





// axios.get('https://api.github.com/users/kwmorlock')
//   .then(response => {
//   console.log(response);
//   // const mycardparent =document.querySleector('div.cards')
// mycardparent.appendChild(createComponent(response.data))
//  })
//   .catch(error => {
//   console.log("the data was not returned", error)
// })



// axios
// .get('https://api.github.com/users/kwmorlock/followers')
//   .then(response => {
//   // console.log(response);
//   // const mycardparent =document.querySleector('div.cards')
// // mycardparent.appendChild(createComponent(response.data))
// response.data.forEach(obj => {
//   axios 
//   .get(`https://api.github.com/users/${obj}`)
//   .then(response => {
//     cards.appendChild(response.data)
//   })
// })
//  })
//   .catch(error => error)


function createComponent(obj){
  const carddivone = document.createElement('div');
  const cardimg = document.createElement('img');
  const carddivtwo = document.createElement('div');
  const cardh = document.createElement('h3');
  const login = document.createElement('p');
  const twop = document.createElement('p');
  const threep = document.createElement('p');
  const onea = document.createElement('a');
  const fourp = document.createElement('p');
  const fivep = document.createElement('p');
  const sixp = document.createElement('p');
  

 
  carddivone.appendChild(cardimg);
  carddivone.appendChild(carddivtwo);

  carddivtwo.appendChild(cardh);
  carddivtwo.appendChild(login);
  carddivtwo.appendChild(twop);
  carddivtwo.appendChild(threep);

  threep.appendChild(onea);

  carddivtwo.appendChild(fourp);
  carddivtwo.appendChild(fivep);
  carddivtwo.appendChild(sixp);

  // threep.appendChild(onea)

  carddivone.classList.add('card');
  carddivtwo.classList.add('card-info');
  cardh.classList.add('name');
  login.classList.add('username');
  // expandButton.classList.add('expandButton');



  cardimg.src= obj.avatar_url;
  cardh.textContent = obj.name;
  login.textContent = obj.login;
  twop.textContent = `Location ${obj.location}`;
  onea.setAttribute('href', obj.html_url);
  fourp.textContent = `Followers ${obj.followers}`;
  fivep.textContent = `Following ${obj.following}`;
  sixp.textContent = `Bio: ${obj.bio}`
  
  onea.textContent = `Profile`;
//pay attention to each div so it flows right and looks right


  // threep.textContent = `Profile: ${onea}`
  

  return carddivone;

}

// const mycardparent =document.querySelector('.cards')

// axios.get('https://api.github.com/users/kwmorlock')
//   .then(response => {
//   console.log(response);
//   // const mycardparent =document.querySleector('div.cards')
// mycardparent.appendChild(createComponent(response.data))
//  })
//   .catch(error => {
//   console.log("the data was not returned", error)
// })

const cards =document.querySelector('.cards')

axios.get('https://api.github.com/users/kwmorlock')
  .then(response => {
  console.log(response.data);
  // const mycardparent =document.querySleector('div.cards')
cards.appendChild(createComponent(response.data));
 })
  .catch(error => {
  console.log("the data was not returned", error)
})



// const followersmeow = [
//   'chelsabeth',
//   'Riley-Robinson'
// ];

const followersArray = ["chelsabeth", "Riley-Robinson", "sekotszs", "imriven", "marissacooter"];
followersArray.forEach(fourp => { axios.get(`https://api.github.com/users/${fourp}`)
    .then(response => {
   cards.append(createComponent(response.data))
   });
    // .catch(error => error)

})


// axios
// .get('https://api.github.com/users/kwmorlock/followers')
//   .then(response => {
//   // console.log(response);
//   // const mycardparent =document.querySleector('div.cards')
// // mycardparent.appendChild(createComponent(response.data))
// response.data.forEach(obj => {
//   axios 
//   .get(`https://api.github.com/users/${obj}`)
//   .then(response => {
//     cards.appendChild(response.data)
//   })
// })
//  })
//   .catch(error => error)




// const mycardparent =document.querySleector('div.cards')
// mycardparent.appendChild(createComponent)

// const articles =document.querySelector('.articles');

// card.map(mapinfo => {
//   cards.appendChild(createComponent(mapinfo))
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

// const mycardparent =document.querySleector('div.cards')
// //mycardparent here so its available to other functions

// axios.get('https://api.github.com/users/kwmorlock')
//   .then(response => {
//   console.log(response);
//   // const mycardparent =document.querySleector('div.cards')
// mycardparent.appendChild(createComponent(response.data))
//  })
//   .catch(error => {
//   console.log("the data was not returned", error)
// })
