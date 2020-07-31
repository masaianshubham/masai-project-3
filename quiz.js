
var data = JSON.parse(localStorage.getItem("questions"))
// console.log(data)
var user1  = JSON.parse(localStorage.getItem("user"))
console.log(typeof user1)
window.onload = function(){
    appendCard(data,user1)
    var resbtn = document.getElementById("result")
    resbtn.setAttribute("class", "btn btn-danger btn-lg float-right d-block")

}

function appendCard(data,user1){
    var res = document.getElementById("res")
    var user = document.getElementById("user")
    user.innerText = "Hi " + user1

    for(var i=0;i<data.length;i++){
        
        var col = document.createElement("div")
        col.setAttribute("class", "col-12")
        var card = document.createElement("div")
        card.setAttribute("class", "card my-3")
        var cardHead = document.createElement("div")
        cardHead.setAttribute("class", "card-header")
        var cat = document.createElement("p")
        cat.setAttribute("class", "float-left small")
        cat.innerText = data[i].category
        
        var dif = document.createElement("p")
        if(data[i].difficulty=="easy"){
            dif.setAttribute("class", "float-right  badge badge-pill badge-success")
        }
        else if(data[i].difficulty=="medium"){
            dif.setAttribute("class", "float-right badge badge-pill badge-warning")
        }
        else{
            dif.setAttribute("class", "float-right badge badge-pill badge-danger")
        }
        dif.innerText = data[i].difficulty

        var cardBody = document.createElement("div")
        cardBody.setAttribute("class", "card-body")
        cardBody.setAttribute("id", i)
        var que = document.createElement("h3")
        que.innerHTML = "Que." + (i+1) + ". " + data[i].question

        var op1 = document.createElement("button")
        op1.innerHTML = data[i].correct_answer
        op1.setAttribute("class", "btn btn-primary mx-2 my-2")
        
        if(data[i].incorrect_answers.length==1){
            var op2 = document.createElement("button")
            op2.innerHTML = data[i].incorrect_answers[0]
            op2.setAttribute("class", "btn btn-primary mx-2 my-2")
        }

        else{
            var op2 = document.createElement("button")
            op2.innerHTML = data[i].incorrect_answers[0]
            op2.setAttribute("class", "btn btn-primary mx-2 my-2")
    
            var op3 = document.createElement("button")
            op3.innerHTML = data[i].incorrect_answers[1]
            op3.setAttribute("class", "btn btn-primary mx-2 my-2")
    
            var op4 = document.createElement("button")
            op4.innerHTML = data[i].incorrect_answers[2]
            op4.setAttribute("class", "btn btn-primary mx-2 my-2")

        }



        cardHead.append(cat, dif)
        card.append(cardHead)
        cardBody.appendChild(que)
        if(data[i].incorrect_answers.length==1){
            if(i%2==0){
                cardBody.append(op2, op1)
            }
            else{
                cardBody.append(op1, op2)
            }
        }
        else{
            if(i%2==0){
                cardBody.append(op3, op2, op1, op4)
            }
            else{
                if(i%3==5){
                    cardBody.append(op1, op2, op3, op4)
                }
                else{
                    cardBody.append(op4, op2, op3, op1)
                }
            }
        }
        card.appendChild(cardBody)
        col.appendChild(card)
        res.appendChild(col)
    }
}

window.addEventListener("click", change)
var count=0
var result = document.getElementById("result")
result.addEventListener("click", function(){
    localStorage.setItem("result", JSON.stringify(count))
    localStorage.setItem("total", JSON.stringify(data.length))
    window.location = "result.html"
})
console.log(count)
function change(){
    
    if(event.target.className== "btn btn-primary mx-2 my-2"){
        if(event.target.innerText ==data[event.target.parentNode.id].correct_answer){
            event.target.setAttribute("class", "btn btn-success mx-2 my-2")
            count++
        }
        else{
            event.target.setAttribute("class", "btn btn-danger mx-2 my-2")
        }
    }
    

}
