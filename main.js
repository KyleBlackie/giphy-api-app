const img = document.querySelector('img');
const input = document.getElementById('search-term');

function getGif(searchTerm) {
  // fetch data from the giphy api using the searchTerm argument or the text input value
  fetch(`https://api.giphy.com/v1/gifs/translate?api_key=Z94VXVe61QA2VBdPmfjghtxiSnJZPnHF&s=${typeof searchTerm === 'undefined' ? input.value : searchTerm}`, {mode: 'cors'})
  .then(response => response.json())
  .then(response => img.src = response.data.images.original.url)
  .catch(err => {
    console.log(err);
    // display error 404 gif
    img.src = "https://media1.tenor.com/images/aae13b1b54443b81e593e6c835087716/tenor.gif?itemid=7878852";
  });
}

// detect if the user presses enter
input.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        document.querySelector('button').click();
    }
});