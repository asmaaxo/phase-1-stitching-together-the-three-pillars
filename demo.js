// We use the Objects below to control toggling like / unlike status
const glyphStates = {
  "♡": "♥",
  "♥": "♡"
};

const colorStates = {
  "red": "",
  "": "red"
};

// STEP 1: Select all the heart glyph elements
const articleHearts = document.querySelectorAll(".like-glyph");

function likeCallback(e) {
  const heart = e.target;
  mimicServerCall()
    .then(function(serverMessage) {
      alert("You notified the server!");
      alert(serverMessage);
      heart.innerText = glyphStates[heart.innerText];
      heart.style.color = colorStates[heart.style.color];
    })
    .catch(function(error) {
      alert("Something went wrong!");
    });
}

// STEP 3: Add click event listeners to each heart glyph
for (const glyph of articleHearts) {
  glyph.addEventListener("click", likeCallback);
}

// Mimicking a server call with a delay
function mimicServerCall() {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      resolve("Pretend remote server notified of action!");
    }, 300);
  });
}
