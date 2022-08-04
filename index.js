window.onload = function(){
    let jumbtrone = document.querySelector(".jumbotron")
    jumbtrone.classList.add("d-block")
    setTimeout(() => {
    jumbtrone.classList.add("opacity")
    
        },50)
        addBadge()
}



const addBadge= function(){
    let cards = document.querySelectorAll(".card")
    
    for(let card of cards){
        let name = card.querySelector(".album-genre").innerText
        card.innerHTML += `<span class="badge badge-info">${name}</span>`
    }    

}


const removeRow = function(){
    let rows = document.querySelectorAll(".delete")
    for (let i = 0; i < rows.length; i++) {
       let button = rows[i].querySelector("btn")
       button.addEventListener("click",removeRow())
    }
    

}