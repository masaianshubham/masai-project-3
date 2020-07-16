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
    var user = form.get('user')

    apiCall(question, category, difficulty,type,user)
}

function apiCall(question, category, difficulty,type,user){
    
    var xhr = new XMLHttpRequest()
    var url = "https://opentdb.com/api.php?amount=10" +"&category=" + category + "&difficulty=" + difficulty + "&type=" + type  
    xhr.open("GET", url)
    xhr.send()
    xhr.onload = function(){
        var data = JSON.parse(this.response).results
        // console.log(data)
        localStorage.setItem("questions", JSON.stringify(data)) 
        localStorage.setItem("user", JSON.stringify(user))
        
        location.href = "quiz.html"
    }
}
