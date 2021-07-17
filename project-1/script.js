
// Node list containing all the Panels.
const panels = document.querySelectorAll('.panel')

panels.forEach((panel) =>{
    // to go through all panels
    panel.addEventListener('click',()=>{
        removeActiveClasses()
        panel.classList.add('active')
    })
})
function removeActiveClasses(){
    panels.forEach((panel)=>{
        panel.classList.remove('active')
    })
}