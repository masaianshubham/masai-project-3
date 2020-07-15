window.onload = function(){
    var form = document.querySelector("form")
    form.addEventListener("submit", getData)
    
}

function getData(){
    event.preventDefault()
    var form = new FormData(event.target)
    var question = form.get('questions')
    var category = form.get('category')
    var difficulty = form.get('difficulty')
    var type = form.get('type')

    apiCall(question, category, difficulty,type)
}

function apiCall(question, category, difficulty,type){
    
    var xhr = new XMLHttpRequest()
    var url = "https://opentdb.com/api.php?amount=" + question + "&category=" + category + "&difficulty=" + difficulty + "&type=" + type  
    xhr.open("GET", url)
    xhr.send()
    xhr.onload = function(){
        var data = JSON.parse(this.response).results
        // console.log(data)
        localStorage.setItem("questions", JSON.stringify(data)) 
        
        location.href = "quiz.html"
    }
}
