let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")

let count = 0

function increment() {
    //console.log("clicked")
    count += 1
    countEl.textContent = count
    console.log(countEl)
}

function save() {
    //console.log("clicked")
    let logEntry = count + " - "
    saveEl.textContent += logEntry
    countEl.textContent = 0 
    count = 0 
}


