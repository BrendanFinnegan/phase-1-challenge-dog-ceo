console.log("%c HI", "color: firebrick");
document.addEventListener("DOMContentLoaded", () => {
  fetch("https://dog.ceo/api/breeds/image/random/4")
    .then((res) => res.json())
    .then((data) =>
      data.message.forEach((x) => {
        let img = document.createElement("img");
        img.src = x;
        document.querySelector("#dog-image-container").append(img);
      })
    );  

  fetch("https://dog.ceo/api/breeds/list/all")
    .then((res) => res.json())
    .then((data) => {
      const breedList = data.message;
      let breedArray = Object.entries(breedList);
      breedArray.forEach((param) => {
        let element = document.createElement("li");
        element.textContent = param;
        element.addEventListener(
          "click",
          (e) => (e.target.style.color = "red")
        );
        document.querySelector("#dog-breeds").append(element);
      });
      let listOfNodes = Array.from(document.querySelectorAll('li'))
      let dropdown = document.querySelector("#breed-dropdown");
      
      dropdown.onchange = selection => {
          selection = dropdown.value
          let filteredArray = listOfNodes.filter(element => {
              return element.textContent[0] === selection
          })
          document.querySelector('ul').innerHTML = ''
          filteredArray.forEach(element => {
              let li = document.createElement('li')
              li.textContent = element.textContent
              document.querySelector('ul').append(li)
          })  
      }
    });
})
