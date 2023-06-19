let txtInput =  document.getElementById("user-task")
let mainBtn = document.getElementById("btn-submit")



mainBtn.addEventListener('click', function(){
console.log(txtInput.value)
txtInput.value = ""
})