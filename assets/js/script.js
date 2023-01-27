// const inspQuotes = document.getElementById('inspQuotes');

// fetch('https://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=json')
//   .then(response => response.json())
//   .then(data => {
    
//     const quoteText = document.createElement('p');
//     quoteText.innerText = data.quoteText;

    
//     const quoteAuthor = document.createElement('p');
//     quoteAuthor.innerText = data.quoteAuthor;

    
//     inspQuotes.appendChild(quoteText);
//     inspQuotes.appendChild(quoteAuthor);
//   })
//   .catch(error => {
//     console.error('Error:', error);
//   });

//   console.log(response) 

var requestUrl = 
'https://dog.ceo/api/breeds/image/random';

var clickButton = document.getElementById('clickButton');
var image = document.getElementById("image");

clickButton.addEventListener("click", function () {
  fetch(requestUrl)
  .then(function (response) {
      return response.json();
  })
  .then(function (data) {
    console.log(data)
    display_image(data.message)
    image.classList.add('randomDog');
  })
});

function display_image(img) {
 document.getElementById("image").src = img;
}

var openModal = document.querySelector(".openModal");
var closeModal = document.querySelector("#closeModal")

openModal.addEventListener("click", function () {
  document.querySelector(".bgmodal").style.display = 'flex';
  validateForm();
});

closeModal.addEventListener("click", function () {
  document.querySelector(".bgmodal").style.display = 'none';
});


// $("document").ready(function () {

//   var url = "https://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=?";

//   loadQuote();

//   $("#newQuote").on("click", function () {
//     $("#quote-block").hide();
//     loadQuote();
//   });
// }

//     function loadQuote() {
//     var random = Math.floor(Math.random() * 10);
//     $.getJSON("https://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=?", function (result) {
//       //response data are now in the result variable
//       //$(".quote").css("display","none");
//       //   $(".author").css("display","none");
//       $(".quote").html(result.quoteText);

//       $(".author").html(result.quoteAuthor);
//     }
// }





// fetch("https://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=?", {
//     method: 'getQuote',
//     format: 'json',
//     lang: 'en',
// })
// .then (function (response) {
//     return response.json();
// })


// /**
//  * This is an example of a basic node.js script that performs
//  * the Client Credentials oAuth2 flow to authenticate against
//  * the Spotify Accounts.
//  *
//  * For more information, read
//  * https://developer.spotify.com/web-api/authorization-guide/#client_credentials_flow
//  */

// var request = require('request'); // "Request" library

// var client_id = 'CLIENT_ID'; // Your client id
// var client_secret = 'CLIENT_SECRET'; // Your secret

// // your application requests authorization
// var authOptions = {
//   url: 'https://accounts.spotify.com/api/token',
//   headers: {
//     'Authorization': 'Basic ' + (new Buffer(client_id + ':' + client_secret).toString('base64'))
//   },
//   form: {
//     grant_type: 'client_credentials'
//   },
//   json: true
// };

// request.post(authOptions, function(error, response, body) {
//   if (!error && response.statusCode === 200) {

//     // use the access token to access the Spotify Web API
//     var token = body.access_token;
//     var options = {
//       url: 'https://api.spotify.com/v1/users/jmperezperez',
//       headers: {
//         'Authorization': 'Bearer ' + token
//       },
//       json: true
//     };
//     request.get(options, function(error, response, body) {
//       console.log(body);
//     });
//   }
// });

