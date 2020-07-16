var result = JSON.parse(localStorage.getItem("result"))
var username = JSON.parse(localStorage.getItem("user"))
var total = JSON.parse(localStorage.getItem("total"))

window.onload = function(){
    
    var ans = Math.ceil((result/total)*100)
    var emotion = document.getElementById("emotion")
    var user = document.getElementById("user")
    var res = document.getElementById("res")
    var img = document.createElement("img")
    img.setAttribute("class", "img-fluid")
    if(result==0){
        img.setAttribute("src", "https://media.giphy.com/media/9Y5BbDSkSTiY8/giphy.gif")
    }
    else if(result==1){
        img.setAttribute("src", "https://media.giphy.com/media/l1J9qrTnntEl6dqQE/giphy.gif")
    }
    else if(result==2){
        img.setAttribute("src", "https://media.giphy.com/media/l1J9AsyIj26GQvrRS/giphy.gif")
    }
    else if(result==3){
        img.setAttribute("src", "https://media.giphy.com/media/l1J9rzUKxMKaz05Lq/giphy.gif")
    }
    else if(result==3){
        img.setAttribute("src", "https://media.giphy.com/media/3ohhwHW7zAALlbqhnG/giphy.gif")
    }
    else if(result==4){
        img.setAttribute("src", "https://media.giphy.com/media/3ohhwHW7zAALlbqhnG/giphy.gif")
    }
    else if(result==5){
        img.setAttribute("src", "https://media.giphy.com/media/3o7aDdTUMjA0Dna9DG/giphy.gif")
    }
    else if(result==6){
        img.setAttribute("src", "https://media.giphy.com/media/3o7aCYNWwi1vOC4nTi/giphy.gif")
    }
    else if(result==7){
        img.setAttribute("src", "https://media.giphy.com/media/xT9IgKwHdgLeMnnzA4/giphy.gif")
    }
    else if(result==8){
        img.setAttribute("src", "https://media.giphy.com/media/3o7aCWACkSbYGU1YGI/giphy.gif")
    }
    else if(result==9){
        img.setAttribute("src", "https://media.giphy.com/media/l0IsGBfjsVEFw8EKs/giphy.gif")
    }
    else if(result==10){
        img.setAttribute("src", "https://media.giphy.com/media/xT9IgAIblN8BiNLJfi/giphy.gif")
    }
    
    user.textContent = "Hi "+ username
    res.textContent =  "Wait & watch"

    emotion.appendChild(img)
}

var play = document.getElementById("play")
play.addEventListener("click", function(){
    window.location="index.html"
})