let txtInput =  document.getElementById("user-task")
let mainBtn = document.getElementById("btn-submit")
let deleteBtn = document.getElementById("delete-btn")
let programTask = document.getElementById('tasks-input')
let pressButton = document.getElementById('cat-button')
let anothercounter=0



mainBtn.addEventListener('click', function(){
// newElement.className = "tasks-input"
// newElement.textContent = txtInput.value
// console.log(txtInput.value)
// txtInput.value = ""
// taskt_container.append(newElement)
anothercounter++
let counter=1
let taskt_container = document.getElementById("task-container")


for(i=0;i<counter;i++){
let newElement = document.createElement("div")
let newTask = document.createElement("p")
let elementButton = document.createElement("button")
let taskt_container = document.getElementById("task-container")

newElement.className= "tasks-input"
newElement.id = `task-${i}`;// Add a unique identifier to each task element
newTask.className = "tasks" // adds classnames
newTask.textContent = txtInput.value // gets value from parent div
elementButton.textContent= "Delete" // edits text values
elementButton.className = "delete-btn"

newElement.appendChild(newTask) // adds child elements
newElement.appendChild(elementButton) // adds child elements

txtInput.value=""

taskt_container.append(newElement)

}

// console.log(anothercounter)
if(anothercounter > 3){
taskt_container.style.height = "20rem"
taskt_container.style.marginTop = "1rem"
mainBtn.style.marginTop= "1rem"
// taskt_container.classList.add("zoom-In")
}

taskt_container.addEventListener("click", function (event) {
    let clickedElement = event.target;
    if (clickedElement.classList.contains("delete-btn")) {
      let taskElement = clickedElement.parentElement;
      taskElement.remove();
    }
})
});



pressButton.addEventListener('click',getPics);

function getPics() {
    let CatPics = document.querySelector(".CatPics");
    CatPics.innerHTML = '';
  
    fetch('https://api.thecatapi.com/v1/images/search?size=small')
      .then((response) => response.json())
      .then((data) => {
        let catsURL = data[0].url;
        
        // Check image size before displaying
        checkImageSize(catsURL, 700, 700)
          .then((validURL) => {
            let catElement = document.createElement("img");
            catElement.setAttribute('src', validURL);
            catElement.classList.add("case");
            CatPics.appendChild(catElement);
          })
          .catch((error) => {
            console.log(error);
            CatPics.textContent = "Click and try Another Cat :3"
          });
      })
      .catch(err => console.log(err));
  }
  
  // Function to check image size and replace if it exceeds the specified dimensions
  function checkImageSize(url, maxWidth, maxHeight) {
    return new Promise((resolve, reject) => {
      let img = new Image();
      img.src = url;
      img.onload = function() {
        if (img.width > maxWidth || img.height > maxHeight) {
          reject("Image size exceeded");
        } else {
          resolve(url);
        }
      };
      img.onerror = function() {
        reject("Failed to load image");
      };
    });
  }
  