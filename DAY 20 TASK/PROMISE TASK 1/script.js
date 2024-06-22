const divtag = document.getElementsByClassName("data-values");
function fetchPromise() {
  const url = "https://api.tcgdex.net/v2/en/sets";
  
  //! Fetch and promise
  fetch(url)
    .then((data) => {
      return data.json();
    })
    .then((values) => {

      //!forEach loop is used to display the contents
      values.forEach((content) => {
        let res = document.createElement("div");
        res.setAttribute("class", "card");
        res.setAttribute("style", "width: 17rem");
        res.innerHTML += ` 
    <img src= "${
      content.logo
    }.png" class="card-img-top" alt="Image Not Available">
    <div class="card-body">
      <p class="card-text"> ID : ${content.id.toUpperCase()} </p>
      <p>Name : ${content.name}</p>
      <p>Card-Count : ${content.cardCount.total}</p>
    </div>`;
        divtag[0].append(res);
      });
    })
    .catch((error) => console.log(error));
}

//!Function call
fetchPromise();