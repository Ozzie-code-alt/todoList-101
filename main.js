let txtInput =  document.getElementById("user-task")
let mainBtn = document.getElementById("btn-submit")
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
let userTasks = document.getElementById("tasks")
let newElement = document.createElement("div")
let taskt_container = document.getElementById("task-container")
var htmlString = `
  <div class="tasks-input">
    <p id="tasks"></p>
    <button class="delete-btn">Delete</button>
  </div>
`;
// newElement.className= "tasks-input"
newElement.textContent= txtInput.value 
newElement.innerHTML = htmlString; 
txtInput.value=""
taskt_container.append(newElement)

}

console.log(anothercounter)
if(anothercounter > 3){
taskt_container.style.height = "20rem"
taskt_container.style.marginTop = "1rem"
mainBtn.style.marginTop= "1rem"
// taskt_container.classList.add("zoom-In")
}
})