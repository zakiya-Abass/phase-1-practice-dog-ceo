//console.log("%c HI", "color: firebrick");

document.getElementById("dog-image-container");
document.addEventListener("DOMContentLoaded", addingImage);
const newImageContainer = document.getElementById("dog-image-container");
function addingImage() {
  fetch("https://dog.ceo/api/breeds/image/random/4")
    .then((res) => res.json())
    .then((data) => {
      for (const picture of data.message) {
        const img = document.createElement("img");
        img.setAttribute("src", picture);
        img.setAttribute("width", "200px");
        img.setAttribute("height", "200px");
        img.setAttribute("border-radius", "30px");
        img.style.margin = "5px";
        img.style.borderRadius = "5px";
        // newImageContainer.appendChild(img);
        console.log(data);
      }
    });
}
document.getElementById("select-breed");
document.addEventListener("DOMContentLoaded", () => {
  fetch("https://dog.ceo/api/breeds/list/all")
    .then((res) => res.json())
    .then((data) => {
      const ul = document.querySelector("#dog-breeds");
      //   console.log(Object.keys(data.message).filter(name => name[0] === 'a'));
      //   console.log(Object.keys(data.message).filter(name => name[0] === 'b'));
      //   console.log(Object.keys(data.message).filter(name => name[0] === 'c'));
      //   console.log(Object.keys(data.message).filter((name) => name[0] === "d"));
      for (const dogName of Object.keys(data.message)) {
        let li = document.createElement("li");

        li.addEventListener("click", () => {
          li.style.color = "red";
        });

        li.textContent = dogName;
        ul.appendChild(li);
      }
    });
});
