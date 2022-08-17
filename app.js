document.querySelector(".get-jokes").addEventListener("click", getJokes);

function getJokes(e) {
  const number = document.getElementById("number").value;

  //Preparation to call AJAX Request
  const xhr = new XMLHttpRequest();
  xhr.open("GET", `http://api.icndb.com/jokes/random/${number}`, true);

  xhr.onload = function () {
    if (this.status === 200) {
      const response = JSON.parse(this.responseText);
      let outputJoke = "";
      if (response.type === "success") {
        response.value.forEach((joke) => {
          outputJoke += `<li>${joke.joke}</li>`;
        });
      } else {
        outputJoke += "<li>Something went wrong...</li>";
      }

      document.querySelector(".jokes").innerHTML = outputJoke;
    }
  };
  xhr.send();

  e.preventDefault();
}
