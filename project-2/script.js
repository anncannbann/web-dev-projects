const progress = document.getElementById("progress")
const prev = document.getElementById("prev")
const next = document.getElementById("next")
const circles = document.querySelectorAll(".circle")

let currentActive = 1

prev.addEventListener('click',() =>{

    currentActive--

    if(currentActive <1){
        currentActive = 1
        console.log(currentActive);
    }
    update()
})



next.addEventListener('click',() =>{

        currentActive++

        if(currentActive >circles.length){
            currentActive = circles.length

            console.log(currentActive);

        }
        update()
})

function update(){
    circles.forEach((circle,idx) => {
        
    })
}